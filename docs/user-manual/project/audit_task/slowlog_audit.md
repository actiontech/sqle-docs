---
title: 慢日志
---

# 慢日志
本节介绍慢日志扫描的应用场景、以及如何创建慢日志扫描任务。

当前SQLE支持两种慢日志采集方式，一种由scanner采集慢日志文件中的慢查询，一种由SQLE直接采集慢查表中的慢查询，用户可在编辑页面选取需要的采集方式。

### 使用场景
需要检查已上线业务是否有超过指定时长的慢SQL产生。


### 方式一：采集慢日志文件

#### 前置条件
* 已添加对应数据源
* 修改配置文件my.cnf，在[mysqld]文件中设置以下内容
```jsx title="[mysqld]"
slow_query_log = ON //开启慢日志
slow_query_log_file = /var/lib/mysql/tmp_slow.log   //设置慢日志文件路径
long_query_time = 1  //设置慢查询时间阈值，当前示例时间为1s，可根据实际业务变更
```

#### 步骤一：新建智能扫描任务
* 任务名称：指定扫描任务的名称，当前仅支持英文名称
* 数据源名称：选择扫描任务对应的数据源，如果没有指定数据源，将进行静态审核如果您没有指定数据源，那么该扫描任务将使用您所选择的数据库类型的默认规则模版进行静态审核
* 数据库：选择扫描任务使用的数据库
* 数据库类型：根据选取的数据源呈现
* 审核任务类型：选择慢日志扫描任务
* 审核过去时间段内 抓取的SQL（分钟）：扫描的时间覆盖范围
* 审核规则模板：选择对应的审核规则模板
* 审核任务周期：配置的是SQLE对审核任务进行自动审核的执行时间


#### 步骤二：执行scannerd文件
:::tip
注意：scannerd文件通常在SQLE的bin目录下，需将scannerd文件与数据源放置在同一环境下执行
::: 

示例如下：

```
./scannerd slowquery -H "127.0.0.1" -P "10000" -N "slowlog_of_GRADE1" -J "default" -A eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcG4iOiJzbG93bG9nX29mX0dSQURFMSIsImV4cCI6MTcwODA3MjMzNSwibmFtZSI6ImFkbWluIn0.ArU5HpU7aSSVrRutxSAwRFYahSx0_4RNzD4KB6LTfpM --log-file /var/lib/mysql/mysql-for-test-slow.log
```

参数解释如下：

* -J, --project：说明扫描任务所在项目，例“default”
* -H, --host string：指定SQLE主机所在地址
* -N, --name string：指定扫描任务名称，scannerd会将获得的慢SQL传至指定的任务池中审核
* -P, --port string：指定SQLE所在端口
* -A, --token string：输入扫描任务凭证token
* --log-file：指定慢日志文件，scannerd从该文件中获取慢SQL


#### 步骤三：在指定库表上执行慢SQL，平台上生成扫描任务报告并查看

### 方式二：采集慢日志表
#### 前置条件
* 已添加数据源
* 在MySQL中设置以下内容：
```
set global long_query_time=1; // 需根据实际业务调整慢查询时间阈值，此处仅供参考
set global slow_query_log=1; // 开启慢日志查询
SET GLOBAL log_output='FILE,TABLE'；// 开启 MySQL 的慢日志收集功能，并且确认将慢日志内容写入文件 mysql-slow.log 和表 mysql.slow_log
```

#### 步骤一：新建智能扫描任务
* 任务名称：指定扫描任务的名称，当前仅支持英文名称
* 数据源名称：选择扫描任务对应的数据源，如果没有指定数据源，将进行静态审核如果您没有指定数据源，那么该扫描任务将使用您所选择的数据库类型的默认规则模版进行静态审核
* 数据库：选择扫描任务使用的数据库
* 数据库类型：根据选取的数据源呈现
* 审核任务类型：选择慢日志扫描任务
* 采集周期(分钟)：SQLE进行采集的周期，若设置为10分钟，则SQLE将每隔10分钟去采集慢日志表中生成的慢查询
* 审核过去时间段内抓取的SQL（分钟）：扫描的时间覆盖范围
* 审核规则模板：选择对应的审核规则模板
* 审核任务周期：配置的是SQLE对审核任务进行自动审核的执行时间




### 执行结果
在扫描任务详情查看扫描的SQL语句及审核报告
![result](img/slowlog-result.png)
![result2](img/slowlog-result2.png)


### 后续步骤
分析扫描任务报告中出现的慢SQL





