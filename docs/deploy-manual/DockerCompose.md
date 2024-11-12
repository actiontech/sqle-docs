---
title: Docker Compose 部署
---
# Docker Compose 部署

## 配置文件
下载地址：[docker-compose.yaml](https://github.com/actiontech/sqle/blob/release-3.2310.x/docker-images/sqle/docker-compose.yaml)

下载地址：[init](https://github.com/actiontech/sqle/tree/release-3.2311.x/docker-images/sqle/init)

## 使用方法
将 docker-compose.yaml 文件和init 文件夹下载到本地目录，并进入目录内，通过环境变量SQLE_IMAGE指定不同版本的 SQLE 镜像，默认是 latest
```
SQLE_IMAGE=actiontech/sqle-ce:latest docker-compose up -d
```

:::tip
自2024年10月起，平台为docker-compose集成了CloudBeaver部署功能。现在，当用户选择使用docker-compose进行部署时，系统将自动处理CloudBeaver的部署工作，用户无需进行任何额外的手动操作。
:::