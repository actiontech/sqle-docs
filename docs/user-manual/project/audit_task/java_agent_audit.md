---
title: Java探针版应用程序SQL抓取【企业版】
---
本节介绍如何利用SQLE平台抓取java应用中的SQL，选取的例子是一个[开源的问卷调查java应用](https://gitee.com/surveyking/surveyking)，架构简单，上手相对容易。

## 支持的数据源类型
* MySQL

## 前置准备

### 环境准备

准备一台 linux 服务器，ubuntu即可，架构版本暂无要求

1. 安装JAVA
```
sudo apt install default-jdk
```
2. 部署并启动MySQL服务

### 部署java应用

* 准备Java应用
* 准备Java应用SQL初始化文件
* 准备SQLE定制的JAVA agent JAR包
:::tip
JAVA agent JAR包为企业版功能，如有使用需求，请联系[SQLE商业支持](../../../support/community-support.md)。
:::

### Java应用前置步骤
1、初始化Java应用
```
mysql -h127.0.0.1 -P3306 -uroot -p -e "CREATE DATABASE IF NOT EXISTS jw default character set utf8mb4 collate utf8mb4_unicode_ci"
mysql -h127.0.0.1 -P3306 -uroot -D jw -p < init-mysql.sql
```
2、将Java应用Jar包，定制jdbc上传服务器指定目录下，可以放在 /opt/surveyking 目录下，示例：
```
root@ubuntu:/opt/surveyking# pwd
/opt/surveyking
root@ubuntu:/opt/surveyking# ls -l
total 55652
-rw-r--r-- 1 root root  2932784 Feb 24 08:38 sql-agent-1.0-SNAPSHOT.jar
-rw-r--r-- 1 root root 54508748 Feb 24 08:37 surveyking-v0.3.0-beta.4.jar
```

## 使用方式
### 创建扫描任务
在SQL管控配置中为数据源开启智能扫描，扫描类型选择“应用程序SQL抓取”，并填写以下字段信息：
* 审核规则模板：选择对应的审核规则模板；

点击`提交`，完成数据源上的应用程序SQL抓取扫描任务配置。

### 启动Java应用
:::tip
以下命令需要在本地编辑替换完参数后，一次性拷贝到环境内执行 
:::
```
SQLE_COLLECT_ENABLE=true \
SQLE_BASE_URL=http://10.186.62.16:10000 \
SQLE_TASK_NAME=jw_app \
SQLE_TASK_TOKEN=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcG4iOiJqd19hcHAiLCJleHAiOjE2NzcyMjYxNzcsIm5hbWUiOiJhZG1pbiJ9.3d0pA1hiVnFEWJokSFBwCT8d1pKOYV6SViENj4GFqgI \
SQLE_EXCLUDE_JAVA_FILE=UserServiceImpl.java \
SQLE_LOG_FILE=/tmp/collect.log \
java -javaagent:sql-agent-1.0-SNAPSHOT.jar \
-jar surveyking-v0.3.0-beta.4.sqle.jar \
--server.port=1991 \
--spring.datasource.url=jdbc:mysql://10.186.62.18:3306/jw \
--spring.datasource.username=root \
--spring.datasource.password=mysqlpass \
& >>/opt/surveyking/std.log
```

#### 参数说明（环境变量）
* SQLE_COLLECT_ENABLE=true ：是否开启SQL采集，默认不推送到SQLE只输出本地日志
* SQLE_BASE_URL：SQLE 服务地址，格式“http://ip:port”
* SQLE_TASK_NAME：SQLE 审核任务的名称
* SQLE_TASK_TOKEN：审核任务的token，从SQLE页面复制
* SQLE_PROJECT_NAME：SQLE JDBC配置：项目名
* SQLE_LOG_FILE：指定SQLE 采集日志文件，不指定则代表输出到标准输出
* SQLE_EXCLUDE_JAVA_FILE：忽略部分JAVA文件不插桩，主要是兼容性问题，当修改字节码失败时为了保障能运行抓取。文件按逗号分隔
#### 参数说明（java 参数）
* server.port：web服务启用端口
* spring.datasource.url：jdbc url
* spring.datasource.username：jdbc user name
* spring.datasource.password：jdbc password

### 访问Java应用
* 访问地址：如果配置的网页端口是1991则通过网页访问http://xx.xx.xx.xx:1991
* 用户名：admin
* 密码：123456




