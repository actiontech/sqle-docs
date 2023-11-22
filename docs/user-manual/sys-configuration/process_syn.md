---
title: 流程对接
---

# 流程对接
使用流程对接，可将DMS平台的工单审批操作对接到指定平台，用户在该平台上即可完成工单审核、上线操作，避免在多平台之间切换，当前支持钉钉审批。


## 使用场景
当用户日常使用钉钉作为办公协作软件时，可配置钉钉审批。配置成功后，即可通过钉钉进行移动端的工单审批操作。


## 操作步骤

### 1.创建钉钉应用
打开[钉钉开发者后台](https://open-dev.dingtalk.com/fe/app#/corp/app)，点击右上角的`创建应用`按钮；
![dingding-createproject](img/dingding-createproject.png)

创建成功后，页面会跳转到应用信息页面，可以获取该应用的AppKey和AppSecret；
![dingding-info](img/dingding-info.png)

### 2.配置应用权限
点击该应用的`权限管理`标签，点击`通讯管理`，开通 `企业员工手机号信息`，`成员信息权限`，`根据手机号姓名获取成员信息`的接口访问权限；
![dingding-privilege](img/dingding-privilege.png)

点击 `OA审批`，开通 `工作流实例写权限`，`工作流模版写权限`，`工作流实例读权限`；
![dingding-oaprivilege](img/dingding-oaprivilege.png)

### 3.配置DMS
管理员账号，进入`系统设置`页面，点击`流程对接`，点击`编辑`按钮，选择启用，并填写应用的AppKey和AppSecret信息；
![dingding-sqleinfo](img/dingding-sqleinfo.png)

配置项目成员的手机号，手机号必须与钉钉账户的手机号相同；
![dingding-telconfig](img/dingding-telconfig.png)

打开全局配置，配置DMS的URL地址，配置URL地址后，用户可从钉钉跳转访问DMS工单详情页面；
![globalurl](img/globalurl.png)

### 4.利用钉钉进行审批
当发生工单变化时，工单关联成员可在对应钉钉账号中收到通知，并进行相应的审批操作；
![dingding-flow](img/dingding-flow.png)




