---
title: 华为云RDS慢日志扫描
---

当使用华为云RDS实例，并且希望监管实例上产生的慢SQL时，可以通过创建华为云RDS慢日志扫描任务实现。该任务会定期扫描华为云RDS实例上的慢日志，并将扫描结果发送到SQLE平台进行分析。


### 支持的数据源类型
* MySQL

### 前置操作

在进行以下操作之前，请确保已完成以下步骤：

* 创建华为云RDS实例，并获取实例的项目ID和实例ID。
* 开启慢日志明文显示，并设置慢查询时间阈值。参考[华为云用户手册](https://support.huaweicloud.com/usermanual-rds/rds_mysql_slow_query_log.html)。
* 获取访问密钥。访问密钥文件需要下载至本地查看。参考[华为云用户手册](https://support.huaweicloud.com/usermanual-ca/zh-cn_topic_0046606340.html)。
* 在平台添加对应数据源。



### 步骤一 开启华为云慢日志扫描类型

在SQL管控配置中为数据源开启智能扫描，扫描类型选择“华为云慢日志扫描”，并填写以下字段信息：

* 项目ID：实例所在项目ID；
* 实例ID：实例ID；
* Access Key ID：在步骤3中获取的访问密钥 ID；
* Access Key Secret：在步骤3中获取的访问密钥Secret；
* 启动慢日志时拉取慢日志时间范围（小时）：由于开启明文显示后，华为云平台会自动删除30天前的日志，所以时间范围上限是30天；
* 当前RDS实例所在实例：参考[华为云用户手册](https://developer.huaweicloud.com/endpoint?RDS)；
* 审核规则模板：选择对应的审核规则模板；

点击`提交`，完成数据源上的华为云慢日志SQL扫描任务配置。


### 步骤二 获取采集结果及审核结果
在扫描详情中查看采集的华为云慢日志SQL信息及审核结果。