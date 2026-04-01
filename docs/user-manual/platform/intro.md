---
title: 平台管理
---

平台管理涵盖 SQLE 平台级别的全局设置，包括 Dashboard、全局视图、用户与权限管理、系统对接与配置等。

这些操作通常由平台管理员在系统初始化阶段完成，日常使用中按需调整。

## 本章内容

### 概览与全局视图

| 功能 | 说明 | 适用角色 |
|------|------|---------|
| [全局 Dashboard](../Dashboard.md) | 平台级运维概览，查看待办、工单统计等 | 平台管理员 / DBA |
| [资源全景视图](../resource-overview.md) | 查看平台支持的全部审核规则及数据源类型 | 所有角色 |
| [全局数据源](../allinstance.md) | 跨项目查看和管理所有数据源 | 平台管理员 / DBA |

### 用户与权限

| 功能 | 说明 | 适用角色 |
|------|------|---------|
| [用户管理](../user-manager/user.md) | 创建和管理平台用户 | 平台管理员 |
| [角色管理](../user-manager/role.md) | 定义角色和操作权限 | 平台管理员 |
| [账号管理](../user-manager/account.md) | 统一账号纳管与权限映射（DMS） | 平台管理员 |

### 系统设置

| 功能 | 说明 | 适用角色 |
|------|------|---------|
| [登录对接](../sys-configuration/login_syn.md) | LDAP / OAuth2 等登录方式对接 | 平台管理员 |
| [消息推送](../sys-configuration/message_syn.md) | 飞书、钉钉、企业微信等通知渠道 | 平台管理员 |
| [流程对接](../sys-configuration/process_syn.md) | 钉钉/飞书审批、Coding 对接 | 平台管理员 |
| [Webhook](../sys-configuration/webhook.md) | 工单状态变更的 HTTP 回调 | 平台管理员 |
| [多因素认证](../sys-configuration/MFA.md) | 登录二次验证 | 平台管理员 |
| [全局配置](../sys-configuration/configuration.md) | 系统全局参数配置 | 平台管理员 |
| [个性化设置](../sys-configuration/customize.md) | 产品名称、Logo 等外观定制 | 平台管理员 |
| [管理区域](../sys-configuration/zone.md) | 数据源分区管理 | 平台管理员 |
