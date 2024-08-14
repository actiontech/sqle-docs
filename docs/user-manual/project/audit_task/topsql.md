---
title: TopSQL
---

TOP SQL 语句可能会导致数据库性能下降。为此，我们提供了TOP SQL智能扫描，用以实时监控SQL性能，通过自动监察数据库中最耗费资源的 SQL 语句，减少手动分析的同时，快速定位性能瓶颈，以此提高数据库运行性能。

### 支持的数据源类型
* DB2
* Oracle
* OceanBase for MySQL
* ceanBase for Oracle
* PostgreSQL
* 达梦

### 步骤一 开启TopSQL扫描类型

在SQL管控配置中为数据源开启智能扫描，扫描类型选择“TopSQL”，并填写以下字段信息：

* 采集周期：表示SQLE对TopSQL的采集频率，SQLE将按照该时间间隔进行SQL采集。如果该值过低，会影响实例性能；
* 排序字段：目前可基于总执行次数、执行时间、物理读块数、逻辑读块数、I/O等待时间进行排序
* Top N：选择需要展示的SQL数量
* 审核规则模板：选择对应的审核规则模板；

点击`提交`，完成数据源上的TopSQL扫描任务配置。

### 步骤二 获取采集结果及审核结果
在扫描详情中查看采集的TopSQL信息及审核结果。


:::tip
对PG类型的数据源开启TOPSQ智能扫描时，PG需要保证两个前提：
* 确保pg_stat_statements扩展已安装，参考SQL语句CREATE EXTENSION pg_stat_statements;
* 将参数shared_preload_libraries的值设置为 pg_stat_statements来指定在启动时加载pg_stat_statements扩展
```
docker run --name': docker run --name postgres -e POSTGRES_PASSWORD=123456 -d -p 5432:5432 -v /my/local/dir:/var/lib/postgresql/data postgres:13 -c shared_preload_libraries=pg_stat_statements
```
:::
