---
title: Webhook 配置
---

Webhook 用于在工单状态变更时，自动向用户配置的 URL 发送 HTTP 回调通知，实现与自定义 API 服务的集成。

## 触发事件

| 事件 | action 值 |
|------|-----------|
| 工单创建 | create |
| 审核通过 | approve |
| 审核驳回 | reject |
| 上线成功 | exec_success |
| 上线失败 | exec_failed |

## 功能入口

管理员账号 → 系统设置 → 消息推送 → **Webhook 配置**。

## 配置项

| 配置项 | 说明 | 默认值 |
|--------|------|--------|
| Webhook URL | 接收回调通知的 API 地址（仅支持 HTTP） | — |
| 最大重试次数 | 推送失败时的最大重试次数（0-5） | 3 |
| 重试间隔 | 失败重试的时间间隔（1-5 秒） | 1 秒 |
| Token | 访问令牌，放置在请求 Header 的 Authorization 字段 | — |

## 请求格式

```json
{
  "event": "workflow",
  "action": "create",
  "timestamp": "2023-05-18T15:45:25+08:00",
  "payload": {
    "workflow": {
      "project_name": "test_project",
      "workflow_id": "1658637666259832832",
      "workflow_subject": "test_workflow",
      "workflow_status": "wait_for_audit"
    }
  }
}
```

:::tip
- 接收端收到请求后需返回 HTTP 200，否则 SQLE 会记录返回的错误信息
- Token 以 Bearer Token 格式放置在请求 Header 中，参考 [RFC 6750](https://datatracker.ietf.org/doc/html/rfc6750)
:::
