---
titile: 安装说明
---
# 安装说明
SQLE 提供了多种安装部署的方式，用户可以结合自己的环境和现状选择。初次体验或者测试使用的话建议使用docker-compose 或 docker 快速部署。
## 安装方式
1. [源码安装](./source.md)
2. [RPM 部署](./rpm.md)
3. [Docker 部署](./Docker.md)
4. [Docker Compsoe 部署](./DockerCompose.md)
## 如何访问
SQLE 对外提供 web 服务，在程序部署完成后，即可通过 SQLE UI 访问：http://127.0.0.1:10000, 地址和端口为配置文件内 dms.api 配置项。
:::tip
ps：ip 和端口请根据前面的配置自行替换，默认端口是10000。
:::
## 初始用户
* 用户名：admin
* 密码：admin