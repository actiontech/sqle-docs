---
title: 源码安装
---
# 源码安装
## 环境准备
* CentOS 7
* MySQL 5.7
* Docker
* Docker Compose（可选）

## 获取源码
SQLE 前端与后端代码分两个仓库维护，所以想要通过源码安装，需要构建前后端代码。

首先选择一个源码安装的工作目录，例如 ~/sqle-build/。

获取后端源码：

```sh
cd ~/sqle-build/
git clone https://github.com/actiontech/sqle.git
cd sqle && git checkout -b release-3.2310.x

cd ~/sqle-build/
git clone https://github.com/actiontech/dms.git
cd dms && git checkout -b release-3.2310.x
```

获取前端源码：

```sh
cd ~/sqle-build/
git clone https://github.com/actiontech/dms-ui.git
```

## 编译源码
编译前端代码，并将前端代码拷贝至后端代码目录：
```sh
cd ~/sqle-build/dms-ui
docker run --rm -v $PWD:/app -w /app gplane/pnpm:8.3.1 sh -c "git config --global --add safe.directory /app && pnpm config set registry https://registry.npm.taobao.org && pnpm install --no-frozen-lockfile && pnpm build"
rm -rf ~/sqle-build/sqle/static && cp -r ~/sqle-build/dms-ui/packages/base/dist ~/sqle-build/sqle/static
```

编译后端代码并打包：
```sh
cd ~/sqle-build/dms
make docker_install
cp -r ~/sqle-build/dms/bin ~/sqle-build/sqle/bin
cd ~/sqle-build/sqle
make docker_rpm_with_dms
```

打包完成后会在当前目录下生成一个 SQLE 的 RPM 包，后续的步骤参考：[RPM 部署](./rpm)。
