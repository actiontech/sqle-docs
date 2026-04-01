---
title: 用户手册
---

SQLE 是爱可生自主研发的 SQL 质量管理平台，支持 16+ 种数据库、700+ 条审核规则，覆盖 SQL 开发、审核、变更、扫描、优化全链路。

:::tip 关于 SQLE 与 DMS
SQLE 区分社区版和企业版，企业版在社区版基础上提供多项目管理、高级扫描、SSO 对接等增强能力。DMS（Data Management Service）是基于 SQLE 企业版的数据管理服务，额外提供账号管理和数据脱敏能力。

本手册以 SQLE 功能为主线，企业版专有功能标注 **企业版** 标签，DMS 专有功能标注 **DMS** 标签。
:::

## 手册结构

| 章节 | 说明 | 主要角色 |
|------|------|---------|
| [平台管理](platform/intro.md) | Dashboard、全局视图、用户与权限、系统设置 | 平台管理员 |
| [项目空间](project/intro.md) | 数据源、成员、规则模板、流程模板等项目级配置 | 项目管理员 / DBA |
| [SQL 开发](sql-dev/intro.md) | 快捷审核、数据导出、SQL 工作台、结构对比、IDE 审核、CI/CD | 开发 / DBA |
| [SQL 上线](sql-deploy/intro.md) | SQL 工单（创建、审核、上线）、回滚、版本管理 | 开发 / DBA |
| [SQL 管控](sql-management/intro.md) | SQL 管控配置、智能扫描任务、性能洞察、下钻分析 | DBA |
| [数据安全](data-security/intro.md) | 数据脱敏、权限模板、授权清单（DMS 专有） | 安全管理员 |
| [SQL 优化](sql-optimization/intro.md) | SQL 改写、SQL 调优 | 开发 / DBA |
| [知识与规则](knowledge/intro.md) | 知识库、自定义规则 | 所有角色 |

## 快速导航

**首次使用？** 建议按以下顺序操作：

1. 管理员完成 [平台管理](platform/intro.md) 中的用户和角色配置
2. 创建 [项目](project/intro.md) 并配置数据源、规则模板、流程模板
3. 开发人员开始 [创建工单](sql-deploy/intro.md) 提交 SQL 变更
4. DBA 通过 [SQL 管控](sql-management/intro.md) 设置持续扫描任务
