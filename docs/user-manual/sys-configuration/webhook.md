---
title: webhook配置
---
# webhook配置
Webhooks是您定义的自定义HTTP回调。它们通常由事件触发，例如SQLE中存在工单状态的变化，则会自动向用户配置的webhook URL发送HTTP请求。

### 使用场景
当用户配置了自定义API服务，想要在API服务中实时获取工单执行状态时，可在系统设置中配置webhook服务。在SQLE中配置回调地址后，工单状态一旦发生变更，即可在API服务中获取状态通知信息，无需定时登录SQLE平台以查询结果。

:::tip
当前会触发通知的事件有：

* 有新工单被创建
* 工单审核被通过
* 工单审核被驳回
* 工单被成功上线
* 工单上线失败
:::

### 前置操作
用户需在使用的API服务中生成用于接收回调通知的webhook url。

### 操作步骤
1. 以平台管理员账号登录， 进入系统设置-消息推送，选择webhook配置，并点击修改;
2. 选择启用webhook;
3. 填写webhook url：用于工单消息推送的 API 地址;
4. 填写最大重试次数：默认3次，取值范围0-5。如果推送存在失败，每一个事件请求将最多连续3次执行推送，如3次都失败，则不再推送本次事件;
5. 填写重试间隔：默认1秒，取值范围1-5。如果推送存在失败，重试时将以1s的时间间隔进行重试;
6. 填写Token：用于标识推送方，如可填写sqle用以标识是从SQLE推送的通知;
7. 提交保存配置;

### 后续步骤
用户点击“测试”，如配置正确，能在API服务端收到正确的调用测试信息：
"This is a SQLE test notification\nIf you receive this message, it only means that the message can be pushed".