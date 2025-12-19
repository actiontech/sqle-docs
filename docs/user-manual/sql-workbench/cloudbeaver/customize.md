---
title: 定制包使用
---

# 定制包使用

SQLE在原有CloudBeaver release_25.2.1 分支的基础上拓展, 用户无需再手动配置环境，可直接使用SQL工作台功能。

![cb](../img/appear.png)

## 定制分支特性

定制分支与原分支区别详情：
* 支持并默认启用 OceanBase 驱动
* 支持并默认启用 TiDB 驱动
* 默认访问路由调整为 /sql_query, 便于与SQLE集成
* 默认会话超时时间调整为12小时(之前是30分钟)
* 移除了默认创建的 PG 演示实例和 SQLite 演示实例
* docker镜像名调整为 actiontech/sqle-cloudbeaver:22_2_0
* 优化打包方式, 大幅提高打包效率
* 默认主题改为暗色

## 项目地址

* Release: https://github.com/actiontech/cloudbeaver/releases
* 定制CloudBeaver分支: https://github.com/actiontech/cloudbeaver/tree/sqle_22_2_0
* 定制DBeaver分支: https://github.com/actiontech/dbeaver/tree/sqle_22_2_0

## 使用说明

### 方式一 使用定制包启动

以23-2-2版本为例：

#### 下载定制包

定制包下载地址 https://github.com/actiontech/cloudbeaver/releases/tag/v23.2.2

#### 安装与启动

```bash
unzip cloudbeaver-23-2-2-sqlev3.zip
cd cloudbeaver
./run-server.sh
```

### 方式二 使用定制Docker镜像启动（推荐）

```bash
docker run -d --restart unless-stopped --name cloudbeaver --privileged -it -p 8978:8978 actiontech/cloudbeaver:latest
```

