---
title: 配置文件说明
---
# 配置文件说明
:::tip
SQLE的配置文件采用yml的格式，默认情况下位于SQLE安装目录下，路径为`./etc/config.yml`
:::

## 默认文件参考
```yml
dms:
  id: 1
  api:
    addr: "0.0.0.0"
    port: 7601
    enable_https: false
    cert_file_path: './etc/cert.pem'
    key_file_path: './etc/key.pem'
  secret_key: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
  service:
    database:
      host: "127.0.0.1"
      port: 3306
      username: "root"
      password: "123456"
      database: "dms"
      debug: true
    log:
      level: DEBUG
      path: logs
      max_size_mb: 100
      max_backup_number: 10
  cloudbeaver:
    enable_https: false
    host: "127.0.0.1"
    port: 8978
    admin_user: "cbadmin"
    admin_password: "123456"
  database_driver_options:
    - db_type: MySQL
      logo_path: "/logo/mysql.png"
      params:  
    - db_type: Postgres
      logo_path: "/static/logo/pg.png"
      params:   
    - db_type: Oracle
      logo_path: "/static/logo/oracle.png"
      params: [
       {
        "key":"service_name",
        "value":"XE",
        "desc":"service name",
        "type":"string"
       },    
      ]   
sqle:
  id: 1
  dms_server_address: "http://127.0.0.1:10000"
  api:
    addr: "127.0.0.1"
    port: 10000
    enable_https: false
    cert_file_path: './etc/cert.pem'
    key_file_path: './etc/key.pem'
  secret_key: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
  service:
    auto_migrate_table: true
    debug_log: false
    log_path: './logs'
    log_max_size_mb: 1024
    log_max_backup_number: 2
    plugin_path: './plugins'
    database:
      mysql_host: '127.0.0.1'
      mysql_port: 3306
      mysql_user: 'root'
      mysql_password: '123456'
      mysql_schema: 'sqle'
```
## 配置说明
### 通用配置
|参数|说明|
|-|-|
|id|server id，辨识集群节点，集群内不重复即可|
|api|当前服务的web接口参数|
|secret_key|全局AES加密秘钥，影响登录和用户密码等的存储；**生产环境建议配置该值替换掉程序默认值，不然会存在安全风险**；格式是32位随机字符串|

#### 通用配置.api
|参数|说明|
|-|-|
|addr|访问服务器时需要的网络地址|
|port|当前服务的web接口参数|
|enable_https|是否开启https，默认不开启|
|cert_file_path|https 证书路径|
|key_file_path|https 私钥路径|

### DMS 配置
|参数|说明|
|-|-|
|id|通用配置|
|api|通用配置|
|secret_key|通用配置|
|service|服务|
|cloudbeaver|SQL工作台|

#### DMS.service.database
|参数|说明|
|-|-|
|host|DMS 后端数据库地址|
|port|DMS 后端数据库地址|
|username|DMS 后端数据库用户|
|password|DMS 后端数据库密码|
|database|DMS 后端数据库 schema|
|debug||

#### DMS.service.log
|参数|说明|
|-|-|
|level|DMS日志级别|
|path|DMS日志存在路径|
|max_size_mb|DMS日志文件大小|
|max_backup_number|DMS保留日志文件数|

#### DMS.cloudbeaver
SQL工作台的配置，配置则代表开启SQL工作台。

|参数|说明|
|-|-|
|enable_https|是否是https连接|
|host|cloudbeaver 地址|
|port|cloudbeaver 端口|
|admin_user|cloudbeaver 超级管理员名称|
|admin_password|cloudbeaver 超级管理员密码|

### SQLE 配置
|参数|说明|
|-|-|
|id|通用配置|
|api|通用配置|
|secret_key|通用配置|
|service|服务|

#### SQLE.service
|参数|说明|
|-|-|
|auto_migrate_table|自动创建表结构，初始化数据|
|debug_log|开启debug模式，打印更多日志，会打印业务SQL，开发环境可开启|
|log_path|日志目录|
|log_max_size_mb|单个日志文件最大大小，单位MB|
|log_max_backup_number|日志文件最大备份数量|
|plugin_path|SQL审核插件的加载地址|

#### SQLE.service.database
|参数|说明|
|-|-|
|mysql_host|SQLE存储库的地址|
|mysql_port|SQLE存储库的端口|
|mysql_user|SQLE存储库的数据库用户|
|mysql_password|SQLE存储库的数据库密码|
|mysql_schema|SQLE存储库的数据库 schema|

数据库插件配置请参考：[如何配置数据库审核插件](../dev-manual/plugins/howtouse.md)