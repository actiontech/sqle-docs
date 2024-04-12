---
title: 数据库审核插件使用
---

## 配置插件
### 创建插件二进制目录

通常创建在 SQLE 的工作目录

```jsx title="插件目录"
bash-4.2$ ls -l
drwxr-x--- 2 actiontech-universe actiontech     46 12月  8 03:19 bin
-rw-r----- 1 actiontech-universe actiontech      5 12月 25 02:48 dms.pid
drwxrwx--- 2 actiontech-universe actiontech     43 12月 22 07:57 etc
drwxr-x--- 2 actiontech-universe actiontech     53 12月  8 03:25 logs
drwxr-x--- 2 actiontech-universe actiontech     33 12月 25 02:43 plugins
drwxr-x--- 2 actiontech-universe actiontech    126 12月  8 03:19 scripts
-rw-r--r-- 1 actiontech-universe actiontech      4 12月 25 05:43 sqled.pid
drwxr-x--- 4 actiontech-universe actiontech    112 12月  8 03:19 static
-rw-r--r-- 1 actiontech-universe actiontech 180270 12月 25 05:52 std.log
```
### 修改配置文件config.yaml
:::tip
配置插件时，主要注意两个方面的配置
* dms组件中，需要在database_driver_options部分配置数据库logo存储路径、变量信息，详细配置信息请参考[配置文件说明](/docs/deploy-manual/config.md)
* sqle组件中，根据数据源类型的不同，目前有两种不同的配置文件书写方式。用户应根据实际情况选择相应的配置方式进行填写。
:::
```jsx title="config.yaml "
dms:
  id: 1
  api:
    addr: 0.0.0.0
    port: 7601
  service:
    database:
      username: root
      password: 
      host: 127.0.0.1
      port: 3306
      database: dms
      debug: true
    log:
      level: DEBUG
      path: logs
      max_size_mb: 100
      max_backup_number: 10
  cloudbeaver:
    enable_https: false
    host: 172.41.134.5
    port: 8978
    admin_user: administrator
    admin_password: 123456
  secret_key:
  database_driver_options: ## 需要配置数据库logo存储路径、变量信息
    - db_type: MySQL
      logo_path: "/logo/mysql.png"
      params:
    - db_type: PostgreSQL
      logo_path: "/logo/postgres_sql.png"
      params:
sqle:
  id: 1
  dms_server_address: http://127.0.0.1:7601
  api:
    addr: 127.0.0.1
    port: 10000
    enable_https: false
    cert_file_path: './etc/cert.pem'
    key_file_path: './etc/key.pem'
  secret_key:
  service:
    auto_migrate_table: true
    debug_log: false
    log_path: './logs'
    log_max_size_mb: 1024
    log_max_backup_number: 2
    plugin_path: './plugins'   ## 插件所在路径，也可以填写绝对路径
    enable_cluster_mode:
    database:
      mysql_host: '127.0.0.1'
      mysql_port: '3306'
      mysql_user: 'root'
      mysql_password: ''
      mysql_schema: 'sqle'
```

:::tip
1. 针对Oracle和DB2类型的数据源，须先在SQLE环境中安装JDK
yum install java-1.8.0-openjdk* -y
1. 针对Sql-Server类型的数据源，需要安装 .net 6.0 版本
* unbuntu
  * apt-get install -y dotnet-sdk-6.0
* centos
  * rpm -Uvh https://packages.microsoft.com/config/rhel/7/packages-microsoft-prod.rpm
  * yum install -y dotnet-runtime-6.0
  * yum install -y aspnetcore-runtime-6.0
:::

## 集成插件
将插件的二进制文件放在[配置插件](#配置插件)中创建的 plugins/目录内，其中插件可以由第三方提供或者自行编译，参考：[sqle-pg-plugin](https://github.com/actiontech/sqle-pg-plugin)

ps：在重启 SQLE 前，需要确保 SQLE 的运行用户拥有对二进制文件的执行权限，如果没有，可以通过以下命令来设置：
```
chmod +x /opt/sqle/plugins/sqle-pg-plugin
```

## 重启服务
```jsx title="rpm方式安装"
systemctl restart sqled
systemctl restart dms

```
```jsx title="docker方式安装"
docker restart containername
```

## 确认插件生效

### 方式一：通过日志
重启后，若成功加载插件，日志中会打印当前加载的审核插件：
```
time="2021-10-12T14:06:42+08:00" level=info msg="starting sqled server"
time="2021-10-12T14:06:42+08:00" level=info msg="plugin inited" plugin_name=PostgreSQL
...
time="2021-10-12T14:06:43+08:00" level=info msg="starting http server on :10000"
```

### 方式二：通过页面
验证是否已加载插件规则：查看 SQLE 规则页面，PostgreSQL 插件支持的审核规则已经加载到 SQLE Server：
![pluginrules](img/pluginrules.png)
验证能否添加插件类型的数据源：添加数据源，显示已经可以添加 PostgreSQL 类型的数据源。
![plugintype](img/plugintype.png)


