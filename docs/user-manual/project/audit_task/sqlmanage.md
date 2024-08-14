---
title: SQL管控【企业版】
---

# SQL全生命周期管控

SQL管控页面集中了用户在SQL审核和扫描任务中生成的SQL，当用户的SQL来源多且分散时，可以在SQL管控页面快速发现审核出问题的SQL，并将其分配给其他成员处理，或将不关心的SQL设为忽略状态，以避免遗漏问题SQL，方便追溯问题SQL的产生及后续解决方式，从而实现高效的SQL管理。


## 前置条件

用户需要登录平台并生成审核记录，满足以下条件之一：

* 在使用SQL快捷审核时，为SQL附加了审核标签。
* 在SQL管控配置中为数据源开启了智能扫描，并获得采集结果。

## 使用步骤

用户点击左侧菜单栏的SQL管控标签，进入SQL管控页面。

### SQL筛选

平台提供多种筛选方式，帮助用户快速找到符合条件的SQL：

* SQL来源：根据SQL的来源方式进行筛选，如SQL审核、扫描任务；
* 数据源：根据SQL所属的数据源进行筛选；
* Schema：根据SQL所属的Schema进行筛选；
* 审核规则等级：根据审核规则的等级进行筛选，如error、warning、notice、normal；
* 时间范围：根据SQL生成的时间范围进行筛选；
* SQL状态：根据SQL的状态进行筛选，如待处理、已解决、已忽略等；
* 与我相关：根据SQL是否与当前用户相关进行筛选，可以选择只显示与当前用户有关的SQL。
* 端点信息：根据SQL的来源端点进行筛选


### SQL操作

除了展示和过滤SQL，平台还提供多种SQL操作方式，帮助用户快捷处理SQL：

* 按指纹查看SQL：支持按SQL指纹做聚合，跳转查看SQL审核列表；
* 查看SQL执行计划：支持查看SQL分析结果，快速了解SQL的执行计划；
* 指派负责人：可以将SQL指派给对应负责人处理；
* 变更状态：可以将表单中的SQL标记为已解决、已忽略或已人工审核的状态；
* 导出：可以根据当前筛选条件导出SQL管控列表的信息。


### 操作结果
通过以上步骤，用户可以使用SQL管控功能集中管理SQL，快速发现问题SQL并进行处理。

