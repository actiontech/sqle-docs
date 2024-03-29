---
title: 自定义审核规则
---

## 使用场景
当用户根据业务需求需要创建新的审核规则时，可以使用平台的自定义规则功能。目前，用户可以在平台上通过正则表达式自定义SQL审核的规范，且新建的审核规则将作为全局资源使用。

## 使用步骤

### 新建自定义规则

1.以平台管理员身份登入，点击右上角更多按钮，选择`规则管理`，进入自定义规则页面；
![customrule-route](img/customrule-route.png)

2.点击`新建`,填写规则基本信息，并输入正则表达式，确认无误后，点击提交，即可完成自定义规则创建；
![customrule-info](img/customrule-info.png)
![customrule-regex](img/customrule-regex.png)

:::tip
当前支持golang正则语法。
:::

### 应用自定义规则
1.编辑数据源应用的规则模板，启用新建的自定义规则；
![customrule-usetemplate](img/customrule-usetemplate.png)
2.创建工单，新建表`users123`，从工单审核结果中可以看到自定义规则已生效；
![customrule-result](img/customrule-result.png)


:::tip
目前仅支持在SQLE平台新建自定义规则，暂不支持导入导出规则模板时携带自定义规则。
:::
