---
title: Docker Compose 部署
---
# Docker Compose 部署
使用 docker-compose 部署不需要提前准备 MySQL 环境，可以一键生成 SQLE 环境
## 配置文件
下载地址：[docker-compose.yaml](https://github.com/actiontech/sqle/blob/main/docker-images/sqle/docker-compose.yaml)
## 使用说明
将 docker-compose.yaml 文件下载到本地目录，并进入目录内，通过环境变量`SQLE_IMAGE`指定不同版本的 SQLE 镜像，默认是 latest。
```bash
SQLE_IMAGE=actiontech/sqle-ce:latest docker-compose up -d
```
## 访问
http://127.0.0.1:10000