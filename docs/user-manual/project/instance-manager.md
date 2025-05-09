---
title: 数据源管理
---

# 数据源管理

数据源管理是SQLE平台的核心功能之一，用于统一管理和维护各类数据库连接。它是工单处理和扫描任务的基础，为SQL审核和执行提供必要的连接信息。

### 适用对象
- 项目管理员：负责数据源的添加、配置和维护
- 数据库管理员：协助配置正确的连接信息

### 核心价值
- 集中化管理：统一管理所有数据库连接
- 安全性：统一的权限控制和审计
- 标准化：规范化的数据源配置和管理流程


### 添加单个数据源


#### 前置操作
项目管理员进入指定的项目

#### 添加数据源
1. 进入项目后，点击左侧导航栏的`数据源`菜单
2. 点击`添加数据源`按钮
3. 填写数据源信息


#### 操作步骤
点击左侧导航栏的`数据源`菜单，进入数据源管理页面后，点击`添加数据源`，填写数据源相关信息

##### 基本信息配置

| 配置项 | 说明 | 是否必填 | 示例 |
|--------|------|----------|------|
| 数据源名称 | 具有识别性的唯一名称 | 是 | prod-mysql-01 |
| 数据源描述 | 补充说明信息 | 否 | 生产环境主库 |
| 数据库类型 | 选择对应的数据库类型 | 是 | MySQL |
| 数据库地址 | IP地址或域名 | 是 | 127.0.0.1 |
| 数据库端口 | 默认将根据数据库类型自动填充 | 是 | 3306 |
| 连接用户 | 具有所需操作权限的用户 | 是 | sqle_user |
| 密码 | 连接用户的密码 | 是 | - |
| 环境属性 | 用于标记数据源的环境信息 | 是 | 生产 |
| 运维时间 | 允许执行工单的时间段 | 否 | 23:00-06:00 |

##### 高级配置

| 配置项 | 说明 | 是否必填 | 示例 |
|--------|------|--------|------|
| 审核规则模板 | 用于SQL审核的规则集合 |是| Default_MySQL |
| SQL查询审核 | 是否开启查询语句审核 | 否 | 开启 |
| SQL工作台运行查询的最高审核等级 | 允许执行的最高风险等级 | 否 | error |
| 开启数据源上的SQL备份能力 | 数据源是否需要备份 | 否 | 开启 |
| 回滚行数限制 |当预计影响行数超过指定值则不回滚  | 是 | 10000 |
 
:::tip
* SQL查询是否需要审核：默认不审核；如用户选择开启该功能，则用户在SQL工作台中提交的SQL语句，将匹配审核规则模板进行SQL审核操作；
* 运行查询的最高审核等级：只有开启 SQL查询的审核功能才生效；支持四种审核等级：normal、notice、warn、error，如设置运行查询的最高审核等级为warn，则触发了warn等级规则以上的SQL语句将报错，并不予执行；未触发warn等级规则以上的SQL语句将被执行；
:::

#### 执行结果
数据源添加成功后，可在数据源列表查看新增的数据源信息。

![数据源列表](./img/instance-manage.png)


### 批量添加数据源
为提高平台初始化效率，用户可通过上传CSV文件，快速批量导入多个数据源，减少手动添加工作量。

#### 使用场景
* 平台初始化时需导入大量数据源。
* 定期批量更新或添加数据源。
* 多项目数据源的集中管理和批量操作。

#### 前置操作
* 项目管理员进入指定的项目。
* 项目管理员/平台管理员进入项目列表。

#### 操作步骤

1. 点击`批量导入数据源`按钮
2. 下载导入模板
3. 填写数据源信息，参考[添加单个数据源](#添加单个数据源)
4. 上传文件并等待验证
5. 确认导入

:::tip
导入后，SQLE平台将校验字段是否填写有误：
* 如导入文件没有问题，将在文件下方提示文件校验成功；
* 如导入文件有问题，将在文件下方提示文件校验失败，并自动下载标注了校验问题的文件，用户可以直接在文件中结合报错信息进行修改。
:::


## 管理功能
### 编辑数据源
* 可修改项：除数据源名称和类型外的所有信息 
* 生效时间：保存后立即生效

### 删除数据源
* 前置检查：系统将检查是否存在未完成的工单
* 删除限制：有未完成工单的数据源不可删除
* 影响范围：删除后相关的配置和历史记录将保留

### 连通性测试
* 测试内容：验证连接信息的正确性
* 执行时机：
  * 添加数据源时测试连通性/添加数据源后，验证数据源连接效果

## 最佳实践
### 安全配置
* 使用最小权限账号
* 定期更新连接密码
* 及时删除未使用的数据源

### 运维建议
* 配置合理的运维时间窗口
* 定期验证连通性
* 及时更新审核规则模板