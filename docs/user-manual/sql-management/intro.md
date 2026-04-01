---
title: SQL 管控
---

SQL 管控提供持续化的 SQL 质量治理能力，通过智能扫描任务自动采集各来源的 SQL，结合审核规则进行巡检和分析。

## 本章内容

| 功能 | 说明 | 适用角色 |
|------|------|---------|
| [SQL 管控配置](../project/audit_task/intro.md) | 配置智能扫描任务和高优先级 SQL 标准 | DBA |
| [SQL 管控列表](../project/audit_task/sqlmanage.md) | 统一查看和管理采集到的 SQL | DBA |
| [性能洞察](../project/audit_task/performance-insight.md) | 数据库性能分析与诊断 | DBA |
| [SQL 下钻分析](../project/audit_task/SQLdrilldown.md) | 对单条 SQL 进行深度性能分析 | DBA |

### 智能扫描任务类型

平台支持多种 SQL 采集来源：

- [库表元数据](../project/audit_task/metadata_audit.md)
- [慢日志](../project/audit_task/slowlog_audit.md)
- [TopSQL](../project/audit_task/topsql.md)
- [Processlist](../project/audit_task/processlist_audit.md)
- [MyBatis 文件](../project/audit_task/mybatis.md)
- [SQL 文件](../project/audit_task/SQLfile_audit.md)
- [Java 应用程序 SQL 抓取](../project/audit_task/java_application_audit.md)
- [Java Agent](../project/audit_task/java_agent_audit.md)
