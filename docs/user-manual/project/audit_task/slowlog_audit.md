---
title: 慢日志
---

# 慢日志
当您需要检查已上线业务是否有超过指定时长的慢SQL产生时，可以为数据源开启慢日志智能扫描。

当前SQLE支持两种慢日志采集方式，一种由scanner采集慢日志文件中的慢查询，一种由SQLE直接采集慢查表中的慢查询，用户可在编辑页面选取需要的采集方式，您可选择需要的方式采集产生的慢查询。

## 支持的数据源类型
* MySQL

## 方式一：采集慢日志表
### 前置条件
* 已添加数据源
* 在MySQL中设置以下内容：
```
set global long_query_time=1; // 需根据实际业务调整慢查询时间阈值，此处仅供参考
set global slow_query_log=1; // 开启慢日志查询
SET GLOBAL log_output='FILE,TABLE';// 开启 MySQL 的慢日志收集功能，并且确认将慢日志内容写入文件 mysql-slow.log 和表 mysql.slow_log
```
:::tip
为了优化查询性能，使用这一采集方式时，需要用户手动运行下面的SQL，将mysql.slow_log表的引擎改为MyISAM，并添加索引。
```
ALTER TABLE mysql.slow_log ENGINE = MyISAM;
ALTER TABLE mysql.slow_log ADD INDEX idx_start_time (start_time);
```
:::

### 步骤一：开启慢日志智能扫描类型

在SQL管控配置中为数据源开启智能扫描，扫描类型选择“慢日志扫描”，并填写以下字段信息：

* 采集来源：选择“从mysql.slow_log表采集”；
* 审核规则模板：选择对应的审核规则模板；

点击`提交`，完成数据源上的慢日志扫描任务配置。


### 步骤二 获取采集结果及审核结果
在扫描详情中查看从慢日志表中采集的SQL信息及审核结果。



## 方式二：采集慢日志文件

### 前置条件
* 已添加对应数据源；
* 修改配置文件my.cnf，在文件中添加以下内容：
```jsx title="my.cnf"
slow_query_log = ON //开启慢日志
slow_query_log_file = /var/lib/mysql/tmp_slow.log   //设置慢日志文件路径
long_query_time = 1  //设置慢查询时间阈值，当前示例时间为1s，可根据实际业务变更
```

### 步骤一：开启慢日志智能扫描类型

在SQL管控配置中为数据源开启智能扫描，扫描类型选择“慢日志扫描”，并填写以下字段信息：

* 采集来源：选择“从slow.log文件采集”；
* 审核规则模板：选择对应的审核规则模板；

点击`提交`，完成数据源上的慢日志扫描任务配置。

### 步骤二：执行scannerd文件

* 复制慢日志的连接信息
* 在数据源环境中执行scannerd文件

执行命令示例如下：

```
./scannerd mysql_slow_log --project=default --host=127.0.0.1 --port=10000  --audit_plan_id=1  --token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcG4iOiJjNGNhNDIzOGEwYjkyMzgyMGRjYzUwOWE2Zjc1ODQ5YiIsImV4cCI6MTc1NDAzNjEyOCwiaXNzIjoiYWN0aW9udGVjaCBkbXMiLCJ1aWQiOiI3MDAyMDAifQ.gUE0fNLjAJAWXK7sPydEN8zQ96gStxa-luNTvBtIMWy --log-file /var/lib/mysql/mysql-for-test-slow.log
```

:::tip
注意：scannerd文件通常在SQLE的bin目录下，需将scannerd文件放在数据源环境下执行。
::: 

参数解释如下：

* --project：说明扫描任务所在项目，例“default”；
* --host string：指定dms主机所在地址；
* --port string：指定SQLE所在端口；
* --token string：扫描任务凭证token；
* --log-file：指定慢日志文件，scannerd从该文件中获取慢SQL；

### 步骤三 获取采集结果及审核结果
在扫描详情中查看从慢日志文件中采集的SQL信息及审核结果。


## 后续步骤
1. 分析智能扫描中出现的慢SQL：用户可以重点关注慢SQL的部分，这些SQL可能需要进行性能优化或数据库结构调整，以提升系统的响应速度。
2. 过滤不关心的SQL：用户可以通过在sqle.black_list_audit_plan_sqls表中添加需要过滤的SQL片段，实现对scanner扫描任务中不关心的SQL的过滤。这样，在SQLE的增量和全量接口中包含了指定关键字的SQL将被自动过滤掉，减少冗余的结果展示。





