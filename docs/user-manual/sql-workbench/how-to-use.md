---
title: 使用定制包快速搭建环境
---


## 项目地址
* 定制CloudBeaver分支: https://github.com/actiontech/cloudbeaver/tree/release_23_2_2_sqle


## 定制包下载地址
https://github.com/actiontech/cloudbeaver/releases/tag/v23.2.2

## 使用说明
### 定制包启动
#### 定制包下载地址

[Release v23.2.2 · actiontech/cloudbeaver](Release v23.2.2 · actiontech/cloudbeaver)

#### 安装与启动

```bash
unzip cloudbeaver-23-2-2-sqlev3.zip
cd cloudbeaver
./run-server.sh
```

### 定制Docker镜像启动（推荐）

```bash
docker run -d --restart unless-stopped --name cloudbeaver --privileged -it -p 8978:8978 actiontech/cloudbeaver:latest
```


## 升级现有CloudBeaver环境至定制环境

确保CloudBeaver程序目录下包含以下文件：

- `conf`目录
- `workspace`目录

将现有CloudBeaver程序目录下的`conf`和`workspace`目录移动到定制CloudBeaver程序目录下（覆盖原目录）。随后停止旧CloudBeaver，运行新的CloudBeaver即可。

