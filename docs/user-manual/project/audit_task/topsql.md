---
title: TopSQL
---

# TopSQL 扫描

TopSQL 扫描自动监控数据库中最耗费资源的 SQL 语句，帮助快速定位性能瓶颈，减少手动分析成本。

## 支持的数据源类型

- DB2
- Oracle
- OceanBase for MySQL
- OceanBase for Oracle
- PostgreSQL
- 达梦

## 前置条件

- 已在项目中添加目标数据源
- 对于 PostgreSQL 数据源，需额外满足以下条件：
  - 安装 `pg_stat_statements` 扩展：`CREATE EXTENSION pg_stat_statements;`
  - 在启动参数中加载扩展：`shared_preload_libraries = 'pg_stat_statements'`

## 操作步骤

### 步骤一：开启 TopSQL 扫描

1. 进入项目，点击左侧导航栏 **SQL 管控配置**
2. 找到目标数据源，开启智能扫描
3. 扫描类型选择 **TopSQL**
4. 填写以下配置项：

| 配置项 | 说明 |
|--------|------|
| 采集周期 | SQLE 对 TopSQL 的采集频率。设置过低可能影响实例性能 |
| 排序字段 | 排序依据：总执行次数、执行时间、物理读块数、逻辑读块数、I/O 等待时间 |
| Top N | 每次采集展示的 SQL 数量 |
| 审核规则模板 | 选择对应的审核规则模板 |

5. 点击 **提交** 完成配置

### 步骤二：查看采集与审核结果

在扫描详情中查看采集的 TopSQL 信息及审核结果。
