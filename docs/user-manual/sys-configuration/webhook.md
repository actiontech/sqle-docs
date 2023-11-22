---
title: webhook配置
---
# webhook配置
Webhook是用户定义的自定义HTTP回调。它们通常由事件触发，例如DMS中存在工单状态的变化，则会自动向用户配置的webhook URL发送HTTP请求。

### 使用场景
当用户配置了自定义API服务，想要在API服务中实时获取工单执行状态时，可在系统设置中配置webhook服务。在DMS中配置回调地址后，工单状态一旦发生变更，即可在API服务中获取状态通知信息，无需定时登录DMS平台以查询结果。

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

:::note
当前webhook url仅支持http格式。
:::

### 操作步骤
1. 以平台管理员账号登录， 进入系统设置-消息推送，选择webhook配置，并点击修改;
2. 选择启用webhook;
3. 填写webhook url：用于工单消息推送的 API 地址;
4. 填写最大重试次数：默认3次，取值范围0-5。如果推送存在失败，每一个事件请求将最多连续3次执行推送，如3次都失败，则不再推送本次事件;
5. 填写重试间隔：默认1秒，取值范围1-5。如果推送存在失败，重试时将以1s的时间间隔进行重试;
6. 填写Token：云服务在发送通知时使用的访问令牌，参考规范：https://datatracker.ietf.org/doc/html/rfc6750；
7. 提交保存配置;

### 后续步骤
用户点击“测试”，如配置正确，能在API服务端收到正确的调用测试信息：
"This is a DMS test notification\nIf you receive this message, it only means that the message can be pushed".

### 接口文档
```
POST / HTTP/1.1
Host: 192.168.21.34:8000
Accept-Encoding: gzip
Authorization: Bearer test123
Content-Length: 239
User-Agent: Go-http-client/1.1
{"event":"workflow","action":"create","timestamp":"2023-05-18T15:45:25+08:00","payload":{"workflow":{"project_name":"test_project","workflow_id":"1658637666259832832","workflow_subject":"test_workflow","workflow_status":"wait_for_audit"}}}
```

* "event"：当前取值恒为 "workflow"（目前DMS只支持工单通知）；
* "action"：可能的取值有 ["create", "approve", "reject", "exec_success", "exec_failed"]。分别对应「工单创建」、「审核通过」、「审核驳回」、「上线成功」、「上线失败」；
* "timestamp"：表示请求发出的时间，RFC3339 格式；
* "payload"：表示该请求的主要业务内容，目前仅支持工单；
* "workflow"：表示该工单的当前信息，与 DMS 后端数据库中记录保持一致；

### 注意事项
* 用户配置的 token 会被放置在请求 Header 中的 Authorization 字段。参考规范：https://datatracker.ietf.org/doc/html/rfc6750 。DMS对token字段没有任何限制。需要接受端根据自身情况决定是否使用 token；
* 接收请求的服务端在收到请求后，需要返回 200 响应。否则 DMS 会打印返回 body 中的文本信息。
* 在发送测试请求时，请确保接收请求的服务端运行正常。否则可能出现如下问题：

```
{
    "code": 0,
    "message": "ok",
    "data": {
        "send_error_message": "Post \"http://192.168.21.34:8000\": dial tcp 192.168.21.34:8000: connect: connection refused"
    }
}
```
