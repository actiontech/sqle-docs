---
title: Docker Compose 部署
---
# Docker Compose 部署

## 配置文件
下载地址：[docker-compose.yaml](https://github.com/actiontech/sqle/blob/release-3.2310.x/docker-images/sqle/docker-compose.yaml)

下载地址：[init](https://github.com/actiontech/sqle-ee/tree/release-3.2310.x/docker-images/sqle/init)

## 使用方法
将 docker-compose.yaml 文件和init 文件夹下载到本地目录，并进入目录内，通过环境变量SQLE_IMAGE指定不同版本的 SQLE 镜像，默认是 latest。