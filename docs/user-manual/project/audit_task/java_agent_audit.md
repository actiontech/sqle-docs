---
title: Java Agent 应用程序 SQL 抓取
---

import Edition from '@site/src/components/Edition';

# Java Agent 应用程序 SQL 抓取 <Edition type="enterprise" />

通过 Java Agent（探针）方式注入应用进程，在运行时采集 Java 应用执行的 SQL 并推送到 SQLE 审核。相比 JDBC 驱动替换方式，Agent 方式无需修改应用内部 JAR 包，侵入性更低。

## 支持的数据源类型

- MySQL

## 前置准备

### 环境要求

- 一台 Linux 服务器（Ubuntu 即可）
- 已安装 JDK：`sudo apt install default-jdk`
- 已部署并启动 MySQL 服务

### 所需文件

| 文件 | 说明 |
|------|------|
| Java 应用 JAR 包 | 待监控的应用程序 |
| SQL 初始化文件 | 应用所需的数据库初始化脚本 |
| SQLE Java Agent JAR 包 | 用于采集 SQL 的探针 |

:::tip
Java Agent JAR 包为企业版功能，如有需要请联系 [SQLE 商业支持](../../../support/community-support.md)。
:::

### 初始化应用

```bash
mysql -h127.0.0.1 -P3306 -uroot -p \
  -e "CREATE DATABASE IF NOT EXISTS jw DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci"
mysql -h127.0.0.1 -P3306 -uroot -D jw -p < init-mysql.sql
```

将 Java 应用 JAR 包和 Agent JAR 包上传到服务器指定目录（如 `/opt/surveyking/`）。

## 操作步骤

### 步骤一：创建扫描任务

在 SQL 管控配置中为数据源开启智能扫描，扫描类型选择 **应用程序 SQL 抓取**，配置审核规则模板后点击 **提交**。

### 步骤二：启动 Java 应用

:::tip
以下命令需在本地编辑替换参数后，一次性拷贝到目标环境执行。
:::

```bash
SQLE_COLLECT_ENABLE=true \
SQLE_BASE_URL=http://<SQLE地址>:10000 \
SQLE_TASK_NAME=jw_app \
SQLE_TASK_TOKEN=<扫描任务凭证> \
SQLE_LOG_FILE=/tmp/collect.log \
java -javaagent:sql-agent-1.0-SNAPSHOT.jar \
  -jar surveyking-v0.3.0-beta.4.jar \
  --server.port=1991 \
  --spring.datasource.url=jdbc:mysql://<数据库地址>:3306/jw \
  --spring.datasource.username=root \
  --spring.datasource.password=<密码> \
  & >> /opt/surveyking/std.log
```

#### 环境变量说明

| 变量 | 说明 |
|------|------|
| `SQLE_COLLECT_ENABLE` | 是否开启 SQL 采集（`true` 时推送到 SQLE，否则仅输出本地日志） |
| `SQLE_BASE_URL` | SQLE 服务地址（格式：`http://IP:端口`） |
| `SQLE_TASK_NAME` | 扫描任务名称 |
| `SQLE_TASK_TOKEN` | 扫描任务凭证 Token |
| `SQLE_PROJECT_NAME` | 项目名称 |
| `SQLE_LOG_FILE` | 采集日志文件路径，不指定则输出到标准输出 |
| `SQLE_EXCLUDE_JAVA_FILE` | 可选。忽略部分 Java 文件不插桩，多个文件用逗号分隔。用于解决字节码修改兼容性问题 |

### 步骤三：查看审核结果

应用启动后，SQLE 将自动采集运行过程中的 SQL。进入扫描任务详情查看已采集的 SQL 及审核结果。
