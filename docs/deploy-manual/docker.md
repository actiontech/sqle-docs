---
title: Docker 部署
---
# Docker 部署
## Docker hub 地址
[actiontech/sqle-ce](https://hub.docker.com/r/actiontech/sqle-ce)
## Docker 参考命令
```bash
docker run -d -it \
--name sqle-server \
-p 10000:10000 \
-e MYSQL_HOST="10.10.10.10" \
-e MYSQL_PORT=3306 \
-e MYSQL_USER="username" \
-e MYSQL_PASSWORD="password" \
-e MYSQL_SCHEMA="sqle" \
actiontech/sqle-ce:latest
```
## 参数说明
使用环境变量传递参数，这些指定的配置会映射到 sqled.yml 配置内，指定数据库的配置等。

|变量|说明|
|-|-|
|MYSQL_HOST| 数据库地址|
|MYSQL_PORT| 数据库端口|
|MYSQL_USER| 数据库用户|
|MYSQL_PASSWORD| 数据库密码|
|MYSQL_SCHEMA| SQLE 服务使用的指定的 schema|
|DEBUG| 是否输出 debug 日志，默认为false|
|AUTO_MIGRATE_TABLE| 是否自动创建表格和初始化数据，默认为true|

## 注意点
:::tip
使用 docker 命令运行容器需要提前准备 MySQL 服务并且创建对应的数据库 schema，创建数据库的SQL可参考：[RPM 部署](./rpm)。
:::
:::tip
如果 SQLE 容器启动失败可以使用 `docker logs sqle-server` 查看启用日志，其中 `sqle-server`是容器名称。
:::


