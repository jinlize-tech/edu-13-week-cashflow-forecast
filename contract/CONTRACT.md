# 输入输出契约

## 输入字段

| 键 | 名称 | 类型 | 必填 |
|---|---|---|---|
| `opening_cash` | 期初现金余额 | number | 是 |
| `collections_schedule` | 十三周预期收款 | array | 是 |
| `refunds_schedule` | 十三周预期退款 | array | 是 |
| `payroll_schedule` | 十三周工资与提成 | array | 是 |
| `rent_schedule` | 十三周房租与固定支出 | array | 是 |
| `marketing_schedule` | 十三周营销支出 | array | 是 |
| `other_payments` | 其他现金支出 | array | 否 |
| `scenario_name` | 情景名称 | string | 否 |

## 状态

- `completed`：核心成果完整，关键结论人工确认要求满足。
- `completed_with_limits`：至少一项实质成果，说明限制、已完成和受阻范围。
- `needs_input`：必填字段缺失。
- `needs_confirmation`：资料冲突或人工确认未完成。
- `failed`：计算或工具失败。

## 输出

- `13周现金表`：结构化条目数组，不允许空壳或占位文本。
- `缺口预警`：结构化条目数组，不允许空壳或占位文本。
- `情景对比`：结构化条目数组，不允许空壳或占位文本。
- `关键假设`：结构化条目数组，不允许空壳或占位文本。
- `行动优先级`：结构化条目数组，不允许空壳或占位文本。
- `每周更新模板`：结构化条目数组，不允许空壳或占位文本。

完整机器契约见`contract/input.schema.json`、`contract/output.schema.json`和`contract/runtime_contract.json`。
