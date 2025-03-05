---
title: 升级说明
---

:::tip
注意：若在升级期间SQLE中有正在上线的工单、或者定时执行的SQL，会造成SQL上线失败。

如果安装的是SQLE集群版本，则升级步骤需要在所有节点上进行。
:::


## 升级准备

1. 在开始升级之前，请务必对SQLE和DMS数据库中的数据进行备份。
2. 查看当前SQLE的版本。
3. 获取所需的SQLE升级安装包。
   
## 执行升级   
1. 停止SQLE服务

```
systemctl stop dms
systemctl stop sqled
```

2. 执行RPM文件升级SQLE
```
rpm -Uvh --force {your rpm file} --prefix={your install file}
```
示例：rpm -Uvh --force sqle-ce-main.qa.el7.x86_64.rpm --prefix=/opt/sqle

3. 根据版本变更内容修改数据库结构、配置文件等。
   
   * 请注意，某些版本的升级可能会引入不兼容的更改。您可以在GitHub上查看版本变更的不兼容内容以及变更方案。具体变更请参考[升级方案](https://github.com/actiontech/sqle/discussions/categories/upgrade)。
   * 如果没有元数据或配置变更，则可以跳过此步骤。


4. 启动SQLE服务
```
systemctl start dms
systemctl start sqled
```

5. 清理浏览器缓存后重新打开SQLE。
    * 某些版本的升级可能涉及前端资源的更新，若不清理浏览器缓存可能造成前端资源未刷新，导致部分功能异常，因此建议在升级完成后清理浏览器缓存。
6. 检查SQLE的版本号以确认升级完成。
