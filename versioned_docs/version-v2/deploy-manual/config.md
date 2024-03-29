---
title: 配置文件说明
---
# 配置文件说明
:::tip
SQLE的配置文件采用yml的格式，默认情况下位于SQLE安装目录下，路径为`./etc/sqled.yml`
:::
## 默认文件参考
```yml
server:
 sqle_config:
  server_port: 10000
  enable_https: false
  cert_file_path: './etc/cert.pem'
  key_file_path: './etc/key.pem'
  auto_migrate_table: true
  debug_log: false
  log_path: './logs'
  log_max_size_mb: 1024
  log_max_backup_number: 2
  secret_key: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' #从 v1.2203.0 版本引入
 db_config:
  mysql_cnf:
   mysql_host: '127.0.0.1'
   mysql_port: 3306
   mysql_user: 'root'
   mysql_password: '123456'
   mysql_schema: 'sqle'
```
## 配置说明
### sqle_config
|参数|说明|
|-|-|
|server_port|sqle 服务的 http 端口，默认10000|
|enable_https|是否开启https，默认不开启|
|cert_file_path|https 证书路径|
|key_file_path|https 私钥路径|
|auto_migrate_table|自动创建表结构，初始化数据|
|debug_log|开启debug模式，打印更多日志，会打印业务SQL，开发环境可开启|
|log_path|日志目录|
|log_max_size_mb|单个日志文件最大大小，单位MB|
|log_max_backup_number|日志文件最大备份数量|
|secret_key|全局AES加密秘钥，影响登录和用户密码等的存储；**生产环境建议配置该值替换掉程序默认值，不然会存在安全风险**；格式是32位随机字符串|

### db_config
|参数|说明|
|-|-|
|mysql_host|SQLE存储库的地址|
|mysql_port|SQLE存储库的端口|
|mysql_user|SQLE存储库的数据库用户|
|mysql_password|SQLE存储库的数据库密码|
|mysql_schema|SQLE存储库的数据库 schema|