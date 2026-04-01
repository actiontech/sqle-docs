---
title: IDE 审核
---

IDE 审核功能将 IDE 工具中的 SQL 审核记录同步到 SQLE 平台，帮助管理员了解开发团队的 SQL 审核使用情况。

## 前置条件

- 已安装并配置 IDE 审核插件：
  - [IntelliJ IDEA 插件](/docs/dev-manual/auditplugins/jetbrains)
  - [Eclipse 插件](/docs/dev-manual/auditplugins/eclipse)

## 使用流程

### 1. 在 IDE 中执行审核

开发人员在 IDE 中编写 SQL 后，通过插件触发审核。审核结果实时反馈在 IDE 中，同时记录同步到 SQLE 平台。

### 2. 在平台查看审核记录

管理员登录 SQLE 平台，进入 **IDE 审核记录** 页面，可查看：

| 内容 | 说明 |
|------|------|
| 原始 SQL | 开发人员提交审核的 SQL 语句 |
| 触发规则 | SQL 触发的审核规则及告警等级 |
| 使用统计 | 执行次数、执行时间等使用情况 |

## 后续操作

根据审核记录和使用统计，管理员可识别团队中的常见 SQL 问题，优化审核规则配置，推动 SQL 编码规范的落地。
