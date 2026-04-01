---
title: 华为云 RDS 慢日志扫描
---

# 华为云 RDS 慢日志扫描

当使用华为云 RDS 实例时，可通过创建华为云 RDS 慢日志扫描任务，定期采集实例上的慢 SQL 并推送到 SQLE 进行审核分析。

## 支持的数据源类型

- MySQL

## 前置条件

- 已创建华为云 RDS 实例，并获取实例的项目 ID 和实例 ID
- 已开启慢日志明文显示并设置慢查询时间阈值（参考 [华为云用户手册](https://support.huaweicloud.com/usermanual-rds/rds_mysql_slow_query_log.html)）
- 已获取访问密钥（参考 [华为云用户手册](https://support.huaweicloud.com/usermanual-ca/zh-cn_topic_0046606340.html)）
- 已在平台添加对应数据源

## 操作步骤

### 步骤一：开启华为云慢日志扫描

1. 进入项目，点击左侧导航栏 **SQL 管控配置**
2. 找到目标数据源，开启智能扫描
3. 扫描类型选择 **华为云慢日志扫描**
4. 填写以下配置项：

| 配置项 | 说明 |
|--------|------|
| 项目 ID | 华为云 RDS 实例所在项目 ID |
| 实例 ID | 华为云 RDS 实例 ID |
| Access Key ID | 访问密钥 ID |
| Access Key Secret | 访问密钥 Secret |
| 启动慢日志时拉取慢日志时间范围（小时） | 读取慢日志的时间范围，最大 30 天（华为云自动删除 30 天前的日志） |
| 当前 RDS 实例所在区域 | 参考 [华为云 RDS 终端节点](https://developer.huaweicloud.com/endpoint?RDS) |
| 审核规则模板 | 选择对应的审核规则模板 |

5. 点击 **提交** 完成配置

### 步骤二：查看采集与审核结果

在扫描详情中查看采集的华为云慢日志 SQL 及审核结果。
