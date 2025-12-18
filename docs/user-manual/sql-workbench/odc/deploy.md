---
title: 新版工作台部署
---

# 新版工作台部署

新版工作台是新一代SQL工作台组件，提供更强大的数据库可视化管理能力。

## 前置要求

- amd64 架构
- Java 8
- MySQL数据源（版本 >= 8.0）

## 一、部署工作台服务

### 步骤1：在MySQL数据源中创建元数据库

在数据库中创建一个名为 `odc` 的数据库用户以及一个名为 `odc_metadb` 的数据库。将 `<password>` 替换为您的真实密码。

```sql
# 在数据库中中创建一个名为 'odc' 的数据库用户以及一个名为 'odc_metadb' 的数据库。将 <password> 替换为您的真实密码
CREATE USER odc IDENTIFIED BY '<password>';
CREATE DATABASE odc_metadb;
GRANT ALL ON odc_metadb.* TO odc;
```

### 步骤2：下载安装包

安装包名：`sql-workbench-*.rpm`

下载地址：https://github.com/actiontech/odc/releases/tag/v4.3.4_sqle

### 步骤3：安装RPM包

```bash
rpm -ivh --force sql-workbench-*.rpm
```

:::note
可能遇到报错：`/usr/lib64/libncurses.so.5` 已存在。  
可忽略，其实已经安装成功。
:::

### 步骤4：初次启动时需要创建用户

```bash
useradd -r -s /bin/false admin && groupadd -f admin
```

### 步骤5：启动服务

```bash
cd /opt/odc/bin
DATABASE_HOST=<IP> DATABASE_PORT=<PORT> DATABASE_USERNAME=odc DATABASE_PASSWORD=<password> DATABASE_NAME=odc_metadb ODC_ADMIN_INITIAL_PASSWORD=<your_admin_password> \
nohup ./start-odc.sh &
```

**参数说明：**

- 将 `<your_metadb_password>` 替换为您的 MetaDB 的真实密码。如果您按照步骤 1 创建出一个 MetaDB，那么将 `<your_metadb_password>` 替换为您在步骤 1 中设置的密码
- 用户参数 `<your_admin_password>` 为工作台的 admin 账户设置一个初始密码。这个密码在配置 DMS 时将会被用到。密码必须满足以下条件：
  - 至少 2 个数字
  - 至少 2 个小写字母
  - 至少 2 个大写字母
  - 至少 2 个特殊字符，允许的特殊字符的范围是 `.~@#$%`
  - 不包含空格和其他特殊字符
  - 长度为 8~32

:::note
启动服务将花费大约 2 分钟
:::

## 二、配置DMS

### 1. 修改配置文件

需对配置项 `dms.sql_workbench` 进行修改，`<your_admin_password>` 替换成自己配置的值。

:::caution
确保 config.yaml 的文件 owner 为 actiontech-universe:actiontech
:::

```bash
vi /opt/sqle/etc/config.yaml
```

配置文件示例：

```yaml
dms:
  id: 1
api:
  addr: 0.0.0.0
  port: 10000
service:
  database:
    username: root
    password: 123456
    host: 127.0.0.1
    port: 3306
    database: dms
    auto_migrate: true
log:
  level: INFO
  path: logs
  max_size_mb: 100
  max_backup_number: 10
cloudbeaver:
  enable_https: false
  host: 127.0.0.1
  port: 8978
  admin_user: administrator
  admin_password: 123456
sql_workbench:
  enable_https: false
  host: 127.0.0.1
  port: 8989
  admin_user: admin
  admin_password: <your_admin_password>
secret_key:
server_id:
enable_cluster_mode: false
report_host: # the host name or IP address of the cluster node
database_driver_options:
  - db_type: MySQL
    logo_path: "/logo/mysql.png"
    params:
# 其余内容省略
```

### 2. 重启DMS服务

### 3. 进入DMS页面验证工作台功能

:::caution
如果DMS之前安装过工作台，那就需要清空之前的缓存：
```sql
truncate table sql_workbench_user_caches;
truncate table sql_workbench_datasource_caches;
```
:::
