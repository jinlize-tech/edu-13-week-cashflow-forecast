# 使用说明

## 适用任务

暑期收款不错，但9月集中退费、教师奖金和下学期房租叠加。

## 准备输入

银行/现金余额、应收、预收与消课、未来收款计划、退款、工资、房租、营销、税费、借款和资本支出。使用前先脱敏姓名、联系方式和与任务无关的敏感信息。

## 操作步骤

1. 确认期初现金
2. 分类现金流
3. 设定基准假设
4. 滚动13周
5. 运行保守/压力情景
6. 标记缺口
7. 输出行动清单

## 校验命令

```powershell
node scripts/validate_input.js examples/typical_input.json
node scripts/validate_output.js examples/typical_output.json
```

## 状态使用

- `completed`：核心成果完整。
- `completed_with_limits`：只完成可验证部分，并说明受阻范围。
- `needs_input`：缺少关键输入。
- `needs_confirmation`：资料冲突或需人工确认。
- `failed`：工具或计算失败，提供恢复动作。

## 人工确认

业务负责人复核输入事实、关键假设和最终成果适用范围后，成果才可进入正式业务使用。
