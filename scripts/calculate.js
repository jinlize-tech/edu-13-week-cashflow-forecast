'use strict';

const FORMULA_VERSION = '1.0.0';

function fail(code, message, field) {
  return { ok: false, error: { code, message, field: field || null, formula_version: FORMULA_VERSION } };
}

function money(value) {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

function finiteNumber(value, field, minimum) {
  if (typeof value !== 'number' || !Number.isFinite(value)) {
    throw new Error(`INPUT_INVALID:${field}`);
  }
  if (minimum !== undefined && value < minimum) {
    throw new Error(`INPUT_INVALID:${field}`);
  }
  return value;
}

function ratio(value, field) {
  finiteNumber(value, field, 0);
  if (value > 1) throw new Error(`INPUT_INVALID:${field}`);
  return value;
}

function run(fn, input) {
  try {
    return { ok: true, formula_version: FORMULA_VERSION, result: fn(input) };
  } catch (error) {
    const [code, field] = String(error.message).split(':');
    return fail(code || 'CALCULATION_FAILED', code === 'INPUT_INVALID' ? '输入缺失或非法' : String(error.message), field);
  }
}

function calculateImpl(input) {
  const opening = finiteNumber(input.opening_cash, 'opening_cash');
  const keys = ['collections_schedule', 'refunds_schedule', 'payroll_schedule', 'rent_schedule', 'marketing_schedule'];
  for (const key of keys) {
    if (!Array.isArray(input[key]) || input[key].length !== 13) throw new Error(`INPUT_INVALID:${key}`);
    input[key].forEach((value, index) => finiteNumber(value, `${key}[${index}]`));
  }
  const other = input.other_payments === undefined ? Array(13).fill(0) : input.other_payments;
  if (!Array.isArray(other) || other.length !== 13) throw new Error('INPUT_INVALID:other_payments');
  other.forEach((value, index) => finiteNumber(value, `other_payments[${index}]`));
  const weeklyNet = [];
  const weeklyEnding = [];
  let cash = opening;
  for (let week = 0; week < 13; week += 1) {
    const net = input.collections_schedule[week] - input.refunds_schedule[week]
      - input.payroll_schedule[week] - input.rent_schedule[week]
      - input.marketing_schedule[week] - other[week];
    cash += net;
    weeklyNet.push(money(net));
    weeklyEnding.push(money(cash));
  }
  const minimumCash = Math.min(...weeklyEnding);
  const firstNegative = weeklyEnding.findIndex((value) => value < 0);
  return {
    weekly_net_cash_flow: weeklyNet,
    weekly_ending_cash: weeklyEnding,
    minimum_cash: money(minimumCash),
    shortage_week: firstNegative === -1 ? null : firstNegative + 1,
    runway_weeks: firstNegative === -1 ? null : firstNegative,
    weeks: 13,
    currency: '本币',
  };
}

function calculate(input) {
  return run(calculateImpl, input || {});
}

module.exports = { calculate, FORMULA_VERSION };
