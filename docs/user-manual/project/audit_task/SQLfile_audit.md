---
title: SQL文件扫描
---
本节介绍SQL文件扫描的应用场景及配置方法。

:::note
平台已支持的所有数据源类型均支持SQL文件扫描
:::

## 使用场景
当用户需要在批量执行SQL前扫描SQL，发现潜在的安全漏洞、提高数据库性能及数据库开发质量时，可以使用SQL文件进行批量扫描。


## 使用方式

### 前置条件
在后端环境中准备SQL文件

### 新建智能扫描任务
进入智能扫描任务列表，点击新建，选择SQL文件扫描任务类型。

### 执行Scannerd文件
:::tip
注意：使用rpm或docker部署的情况下，scannerd通常在SQLE的bin目录下。
::: 

示例如下：

```
./scannerd sqlfile -H127.0.0.1 -N"SQLfile" -P"10000" -J"default" -D/root/sqle/sqle/cmd/scannerd/scanners/mybatis/testdata/ -A"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcG4iOiJ0ZXN0MDcyNCIsImV4cCI6MTcyMTcyODU0NywibmFtZSI6ImFkbWluIn0.CojdTvBkr-iN_26tWI-Kr6mMnJt1NIDr-Y3v7m9ySuM"
```

参数解释如下：

* -J, --project：说明扫描任务所在项目，例如“default”；
* -H, --host string：指定SQLE主机所在地址；
* -P, --port string：指定SQLE所在端口；
* -N, --name string：指定扫描任务名称，scannerd会将获得的SQL传至指定的任务池中审核；
* -D, --dir string：指定要扫描的SQL文件路径；
* -A, --token string：输入扫描任务凭证token；
* -K, --skip-sql-file-audit：只上传sql，不审核sql；
* -S, --skip-error-sql-file; 跳过无法解析的sql文件；

获得执行结果：
![sqlfile_audit](img/sqlfile_audit.png)

### 平台查看执行结果
* 用户进入扫描任务详情，可以查看SQLw文件中已采集到的SQL信息；
* 用户点击`立即审核`，可以在扫描任务报告中获取当前SQL的审核结果；