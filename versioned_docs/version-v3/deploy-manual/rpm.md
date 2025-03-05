---
title: RPM 安装
---
# RPM安装

## 环境准备
* CentOS 7
* MySQL 5.7

## 下载安装包

下载 SQLE 的 RPM 安装包，下载连接点击[这里](https://github.com/actiontech/sqle/releases)。

## 安装 SQLE

执行 RPM 的安装命令：
```sh
rpm -ivh /path/to/sqle-ce-${version}.qa.el7.x86_64.rpm --prefix=/opt/sqle
```

## 创建数据库
准备一台 MySQL5.7 作为 SQLE 的后端存储数据库。执行下面命令创建 SQLE 需要的 schema：
```sql
CREATE DATABASE IF NOT EXISTS sqle default character set utf8mb4 collate utf8mb4_unicode_ci;
CREATE DATABASE IF NOT EXISTS dms default character set utf8mb4 collate utf8mb4_unicode_ci;
```
:::tip
创建好的 Schema 将在下面修改SQLE配置时使用到。
:::

## 修改 SQLE 配置文件
安装完 SQLE 后，需要根据实际情况修改SQLE的配置，参考：[配置文件说明](./config.md)。SQLE安装完成后提供一个配置模版可直接修改。
```sh
cd /opt/sqle/etc
vim config.yaml
```
:::tip
确保 config.yaml 的文件 owner 为 actiontech-universe:actiontech
:::

## 启动 SQLE
SQLE 进程通过 Systemd 管理。在成功安装 RPM 后，执行启动命令：
```sh
cd /opt/sqle
chmod +x scripts/init_start.sh
./scripts/init_start.sh
```

## 访问SQLE
SQLE 对外提供 web 服务，在程序部署完成后，即可通过 SQLE UI 访问：http://127.0.0.1:10000, 地址和端口为配置文件内 dms.api 配置项。

## 启动失败问题诊断
参考：https://github.com/actiontech/sqle/discussions/1239
