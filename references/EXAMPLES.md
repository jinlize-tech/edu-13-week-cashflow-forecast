# 十三周现金流预测示例

## 典型场景

暑期收款不错，但9月集中退费、教师奖金和下学期房租叠加。

## 具体示例

系统显示第7周出现缺口并比较延期招聘、收紧折扣和分期采购三种行动，不自动作融资决策。

## 脱敏输入示例

```json
{
  "contract_version": "1.2.0",
  "data_status": "confirmed",
  "contains_sensitive_data": false,
  "requested_output_language": "zh-CN",
  "opening_cash": 1000.0,
  "collections_schedule": [
    {}
  ],
  "refunds_schedule": [
    {}
  ],
  "payroll_schedule": [
    {}
  ],
  "rent_schedule": [
    {}
  ],
  "marketing_schedule": [
    {}
  ],
  "other_payments": [
    {}
  ],
  "scenario_name": "情景名称已核对（脱敏示例）"
}
```

## 预期处理

1. 运行输入契约校验。
2. 逐项核对输入来源、版本和口径。
3. 按`references/PROFESSIONAL_PLAYBOOK.md`完成专业分析。
4. 输出13周现金表、缺口预警、关键假设等核心成果。
5. 由业务负责人确认输入事实、关键假设和最终成果适用范围后才可作为正式业务结论。

## 不应出现的输出

- 虚构政策、价格、人员、课程或客户事实。
- 以“暂无”“待完善”等占位文本冒充完成。
- 无依据的确定性判断或伪造人工签批。
