---
title: IDE审核
---

# IDE审核


### 使用场景
本功能适用于管理员和开发团队，旨在实现将IDE工具中生成的SQL审核同步到SQLE平台，以便管理员能够查看开发人员的审核记录和使用统计。这将帮助管理员了解开发团队的使用情况，进行性能优化和资源管理。

## 前置操作：

在开始使用本功能之前，请确保完成以下操作：

* 请确保插件已正确安装和配置，以确保SQL审核记录能够成功同步到SQLE平台。

:::tip
目前SQLE已提供了IDEA和Eclipse的审核插件
* IDEA审核插件配置请参考[IDEA插件配置](docs/dev-manual/auditplugins/jetbrains.md)
* Eclipse审核插件配置请参考[Eclipse插件配置](/docs/dev-manual/auditplugins/eclipse.md)
:::


## 使用步骤：
下面是将IDE生成的SQL审核同步到SQLE平台的详细步骤：

### 生成SQL审核记录
在IDE工具中创建或编辑SQL脚本，并执行审核操作。

### 查看审核记录和使用统计
登录到SQLE平台，导航到IDE审核记录页面。你将能够查看在IDE工具中生成的SQL审核记录，包括原始SQL和触发的规则。此外，你还可以获取有关开发团队的使用统计信息，如执行次数、执行时间等。

## 后续操作
根据审核记录和使用统计，管理员可以了解开发团队的SQL审核情况。这将有助于进行性能优化和资源管理，例如识别慢查询、优化SQL语句、调整资源分配等。
