/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    "intro",
    "online-demo",
    {
      type: 'category',
      label: '产品支持',
      items: [
        "support/compare",
        "support/community-support",
        "support/commercial-support",
      ],
    },
    "quick-usage",
    {
      type: 'category',
      label: '安装部署',
      items: [
        "deploy-manual/intro",
        "deploy-manual/config",
        "deploy-manual/source",
        "deploy-manual/rpm",
        "deploy-manual/docker",
        "deploy-manual/docker-compose",
        "deploy-manual/cluster",
      ],
    },
    {
      type: 'category',
      label: '用户手册',
      items: [
        "user-manual/operation_records",
        {
          type: 'category',
          label: '项目',
          items: [
            "user-manual/project/intro",
            "user-manual/project/project_create",
            "user-manual/project/instance-manager",
            "user-manual/project/group_member",
            "user-manual/project/rule-template-manager",
            "user-manual/project/workflow-template-manager",
            "user-manual/project/whitelist-manager",
             {
               type: 'category',
               label: '工单',
               items: [
                 "user-manual/project/workflow/intro",
                 "user-manual/project/workflow/create-workflow",
                 "user-manual/project/workflow/audit-workflow",
                 "user-manual/project/workflow/exec-workflow",
               ],
             },
             {
              type: 'category',
              label: '扫描任务',
              items: [
                "user-manual/project/audit_task/intro",
                "user-manual/project/audit_task/metadata_audit",
                "user-manual/project/audit_task/slowlog_audit",
              ],
             }
          ],
        },
        {
          type: 'category',
          label: '系统设置',
          items: [
            "user-manual/sys-configuration/intro",
            "user-manual/sys-configuration/login_syn",
            "user-manual/sys-configuration/message_syn",
            "user-manual/sys-configuration/process_syn",
            "user-manual/sys-configuration/webhook",
            "user-manual/sys-configuration/instance_syn",
          ],
        },           
        {
          type: 'category',
          label: '工作台',
          items: [
            "user-manual/sql-workbench/introduction",
            "user-manual/sql-workbench/how-to-configure",
            "user-manual/sql-workbench/how-to-use",
          ],
        },
        {
          type: 'category',
          label: '用户管理',
          items: [
            "user-manual/user-manager/intro",
            "user-manual/user-manager/user",
            "user-manual/user-manager/user-group",
            "user-manual/user-manager/role",
          ],
        },    
      ],
    },
    {
      type: 'category',
      label: '开发手册',
      items: [
        "dev-manual/intro",
        {
          type: 'category',
          label: '数据库审核插件',
          items: [
            "dev-manual/plugins/intro",
            "dev-manual/plugins/howtouse",
            "dev-manual/plugins/howtodev",
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'FAQ',
      items: [
        "FAQ/whichdatabase",
      ],
    },
  ],
};

module.exports = sidebars;
