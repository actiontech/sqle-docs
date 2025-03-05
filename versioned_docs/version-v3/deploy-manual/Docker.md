---
title: Docker部署
---
# Docker部署

## Docker hub 地址
[actiontech/sqle-ce](https://hub.docker.com/r/actiontech/sqle-ce)

:::tip
推荐配置国内镜像源，参考[镜像推荐](/docs/FAQ/mirror.md)
:::

## Docker 参考命令
```sh
docker run -d -it \
--name sqle-server \
-p 10000:10000 \
-p 10001:10001 \
-e MYSQL_HOST="10.10.10.10" \
-e MYSQL_PORT=3306 \
-e MYSQL_USER="root" \
-e MYSQL_PASSWORD="123456" \
-e MYSQL_DMS_SCHEMA="dms" \
-e MYSQL_SQLE_SCHEMA="sqle" \
actiontech/sqle-ce:latest   
```

:::tip
默认提供最新版本的下载镜像，如果需要使用其他版本的镜像，可以访问SQLE的DockerHub选用想要的版本。
:::


### 参数说明
使用环境变量传递参数，这些指定的配置会映射到 /opt/sqle/etc/config.yaml 配置内，指定数据库的配置等。

|变量|说明|
|-|-|
|MYSQL_HOST| 访问地址|
|MYSQL_PORT| 访问端口|
|MYSQL_USER| 数据库用户|
|MYSQL_PASSWORD| 数据库密码|
|MYSQL_DMS_SCHEMA| DMS 服务使用的指定的 schema|
|MYSQL_SQLE_SCHEMA| SQLE 服务使用的指定的 schema|
|DEBUG| 是否输出 debug 日志，默认为false|
|AUTO_MIGRATE_TABLE| 是否自动创建表格和初始化数据，默认为true|

## 注意点
:::tip
使用 docker 命令运行容器需要提前准备 MySQL 服务并且创建对应的数据库 schema，创建数据库的SQL可参考：[RPM 部署](./rpm.md)。
:::
:::tip
如果 SQLE 容器启动失败可以使用`docker logs sqle-server`查看启用日志，其中`sqle-server`是容器名称。
:::
