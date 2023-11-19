---
title: RPM 安装
---
# RPM安装

## 环境准备
* CentOS 7
* MySQL 5.7

## 下载安装包

* 下载 DMS 的 RPM 安装包: wget ftp://ftpadmin:KFQsB9g0aut7@10.186.18.90/actiontech-dms/ee/qa/main/dms-ee-main.qa.el7.x86_64.rpm
* 下载 SQLE 的 RPM 安装包: wget ftp://ftpadmin:KFQsB9g0aut7@10.186.18.90/actiontech-sqle/ee/qa/main/sqle-ee-main.qa.el7.x86_64.rpm
* 下载 Provision 的 RPM 安装包: wget ftp://ftpadmin:KFQsB9g0aut7@10.186.18.90/actiontech-provision/qa/main/provision-main.qa.el7.x86_64.rpm

## 创建后台数据库
```sh
CREATE DATABASE IF NOT EXISTS sqle default character set utf8mb4 collate utf8mb4_unicode_ci;
CREATE DATABASE IF NOT EXISTS dms default character set utf8mb4 collate utf8mb4_unicode_ci;
```
:::tip
创建好的 Schema 将在下面修改SQLE配置时使用到。
:::

### 安装DMS

1. 执行 RPM 的安装命令
```sh
rpm -ivh --prefix=/opt/dms dms-ee-main.qa.el7.x86_64.rpm
```
2. 配置更新
```sh
vi config.yaml
```
参考[配置文件](./config.md)

3. 启动DMS
```sh
systemctl start dms.service
```

### 安装SQLE

1. 执行 RPM 的安装命令：
```sh
rpm-ivh --prefix=/opt/sqle sqle-ee-main.qa.el7.x86_64.rpm
```
2. 配置跟新
```sh
vi config.yaml
```
参考[配置文件](./config.md)

3. 启动SQLE
```sh
systemctl start sqled.service
```

### 安装Provision
1. 执行 RPM 的安装命令：
```sh
rpm -ivh --prefix=/opt/provision provision-main.qa.el7.x86_64.rpm
```
2. 配置跟新
```sh
vi config.yaml
```
```sh
默认配置如下
provision:
  id: 1
  dms_server_address: http://127.0.0.1:7601
  api:
    addr: 10.186.56.59
    port: 7602
  service:
    auth_database:
      username: neo4j
      password: 123
      host: 10.186.60.167
      port: 27687        
    audit_database:
      db_file_path: ./audit.db
      recycle_time_day: 365
    is_audit_enabled: true  
    is_unit_test: false          
  secret_key:

```
参考[配置文件](./config.md)

3. 启动SQLE
```sh
sh ./init_start.sh
```



## 启动失败问题诊断
参考：https://github.com/actiontech/sqle/discussions/1239
