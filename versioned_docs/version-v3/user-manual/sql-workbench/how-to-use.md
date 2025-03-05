---
title: 使用定制包快速搭建环境
---


## 项目地址

Release: https://github.com/actiontech/cloudbeaver/releases

## 使用说明
### 方式一 使用定制包启动

以23-2-2版本为例：

#### 下载定制包

定制包下载地址https://github.com/actiontech/cloudbeaver/releases/tag/v23.2.2

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


## 升级现有CloudBeaver环境至定制环境

确保CloudBeaver程序目录下包含以下文件：

- `conf`目录
- `workspace`目录

将现有CloudBeaver程序目录下的`conf`和`workspace`目录移动到定制CloudBeaver程序目录下（覆盖原目录）。随后停止旧CloudBeaver，运行新的CloudBeaver即可。

