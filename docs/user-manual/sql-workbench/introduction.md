---
title: 功能说明
---


# 功能说明
CloudBeaver Community 是一个开源的 Web 数据库可视化管理工具，支持 PostgreSQL, MySQL, MariaDB, SQL Server, Oracle, DB2, Firebird, H2, Trino 等数据库。

SQLE通过集成CloudBeaver，使得SQLE具备数据库操作的能力，方便开发或DBA在SQLE中方便地操作数据库
* SQL工作台会自动同步SQLE的用户信息和实例信息, 避免无权限的人进行操作
* 可通过参数配置及SQL查询审核对SQL做限制和审核，有效避免不合规的查询

## 使用场景
当业务人员需要对数据库进行数据检索时，一些查询SQL可能会造成数据库性能问题甚至夯死。但在传统的使用场景中，DBA很难对业务人员的行为进行追踪和管控，无法限制有问题的SQL在生产环境执行。

因而SQLE平台集成CloudBeaver数据库可视化管理工具，满足在线SQL查询需求的同时，进行业务人员的操作权限控制，并对业务人员的SQL进行审计，拒绝不合规的SQL运行。

## 前置条件
安装CloudBeaver并完成配置，参考[SQL工作台配置方法](how-to-configure.md)。

## 操作步骤
### 自主审核场景
#### 步骤一 SQLE平台配置用户
* 创建一个用户A；
* 创建一个有SQL查询权限的角色：SQL查询；

#### 步骤二 SQLE平台配置成员权限
* 在项目内添加数据源实例test；
* 在项目内添加成员A，并设置A在实例test上有SQL查询的角色；

#### 步骤三 登录CloudBeaver
切换成员A账号后，点击SQL工作台跳转CloudBeaver，SQLE将会自动使用当前SQLE用户登录CloudBeaver。 
:::caution
若当前用户无SQL查询权限，则无权登录。
:::

#### 步骤四 下发SQL
选择需要操作的数据源，输入SQL后，点击SQL审核图标，对编写的SQL 进行规则审核；

####  操作结果
获取优化建议；
![error](img/auditsuggestion.png)


### 审核拦截场景
#### 步骤一 SQLE平台配置用户及角色
* 创建一个用户A；
* 创建一个有SQL查询权限的角色：SQL查询；


#### 步骤二 SQLE平台配置数据库实例审核等级
进入项目，创建/修改一个数据源实例A, 在配置中开启SQL查询，并设置运行查询的最高审核等级；

|参数名	| 参数含义|
| -- | -- |
|SQL查询是否需要审核 | 只有开启此项，才会在执行SQL查询时进行审核|
|运行查询的最高审核等级| 如果审核等级低于或等于这个等级将会放行, 高于这个等级将无法执行|

#### 步骤三 SQLE平台配置成员权限
* 在项目内添加成员A，并设置A在实例test上有SQL查询的角色；

#### 步骤四 登录CloudBeaver
切换成员A账号后，点击SQL工作台跳转CloudBeaver，SQLE将会自动使用当前SQLE用户登录CloudBeaver。
:::caution
若当前用户无SQL查询权限，则无权登录。
:::

#### 步骤五 下发SQL
选择需要操作的数据源，并输入SQL语句点击运行，可查看SQL查询结果

####  操作结果
审核失败的SQL将会被拦截, 并报出错误, 可以点击详情查看错误详情
![error](img/error.png)

按要求修改SQL, 再次执行, 如果审核通过将会执行当前SQL
![success](img/success.png)

