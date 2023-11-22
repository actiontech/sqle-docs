---
title: MyBatis扫描
---
# MyBatis扫描

本节介绍MyBatis扫描的应用场景及配置方法。

## 支持的数据源类型
* MySQL
* OceanBase For MySQL

## 使用场景
应用开发阶段可以通过MyBatis扫描任务对应用代码中SQL做实时审核，MyBatis扫描任务需要通过DMS提供的Scannerd进行SQL采集并推送到DMS进行SQL审核。

当前支持用户直接执行Scannerd进行扫描，也支持用户利用CI/CD平台进行持续集成，例如 Jenkins ，GoCD ，git平台的 CI/CD 等，以此实现标准化开发流程，及时发现SQL问题。


## 基础使用方式

### 新建智能扫描任务
进入智能扫描任务列表，点击新建，选择MyBatis扫描任务类型。

### 直接执行scannerd文件 

#### 1.在后端环境中准备MyBatis的XML文件

#### 2.执行Scannerd文件
:::tip
注意：使用rpm或docker部署的情况下，scannerd通常在DMS的bin目录下。
::: 

示例如下：

```
./scannerd mybatis -H10.186.64.175 -N"mybatis1" -P"10000" -J"default" -D/tmp/xml -A"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcG4iOiJteWJhdGlzMSIsImV4cCI6MTcyMTE4Mzc3OSwibmFtZSI6ImFkbWluIn0.Mx8G0Vttxt4hdLxn-odW_WopcMH4ANadNvX6fmp-Yqs"
```

参数解释如下：

* -J, --project：说明扫描任务所在项目，例如“default”；
* -H, --host string：指定DMS主机所在地址；
* -P, --port string：指定DMS所在端口；
* -N, --name string：指定扫描任务名称，scannerd会将获得的SQL传至指定的任务池中审核；
* -D, --dir string：指定要扫描的XML文件路径
* -A, --token string：输入扫描任务凭证token；

### 平台查看执行结果
* 用户进入扫描任务详情，可以查看已采集到的XML文件中的SQL信息；
* 用户点击`立即审核`，可以在扫描任务报告中获取当前SQL的审核结果；

## 在腾讯云CODING上集成SQL审核

### 新建智能扫描任务
进入智能扫描任务列表，点击新建，选择MyBatis扫描任务类型。

### 部署CODING平台
#### 1.创建项目
![coding-createproject](img/coding-createproject.png)
#### 2.创建代码仓库，此处放置XML文件
![coding-createcodebase](img/coding-createcodebase.png)
![coding-codebaseexample](img/coding-codebaseexample.png)
#### 3.上传DMS插件，插件将用于扫描MyBatis文件

左边栏进入"团队设置中心"->"功能设置" ；
![coding-pluginroute](img/coding-pluginroute.png)

点击"新建构建插件"，选择DMS-scannerd.zip，发布插件；
![coding-pluginupload](img/coding-pluginupload.png)

配置关联项目；
![coding-pluginwithproject](img/coding-pluginwithproject.png)

完成插件上传。

#### 4.创建构建计划 
进入项目 -> 持续集成 -> 构建计划，点击创建构建计划；
![coding-createstructure](img/coding-createstructure.png)

选择一个合适的构建模板，这里使用"自定义构建过程"；
![coding-choosestructure](img/coding-choosestructure.png)

选择要做SQL审核的代码仓库；
![coding-choosedatabase](img/coding-choosedatabase.png)

添加一个SQL审核节点，点击加号，选择 其他 -> 团队插件 -> SQL扫描插件； 
![coding-chooseplugin](img/coding-chooseplugin.png)

填写DMS相关参数，点击参数名右边的问号可以查看参数说明，此处以DMS社区演示环境的信息为例；
![coding-editinfo](img/coding-editinfo.png)

编辑后点击保存，完成构建计划。

### 触发构建，获得审核结果

在构建计划中点击立即构建按钮；
![coding-do](img/coding-do.png)

可以在在构建过程中查看构建结果，也可以在DMS平台的扫描任务中查看审核结果。
![coding-result](img/coding-result.png)

