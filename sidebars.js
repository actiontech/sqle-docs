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
    "community-support",
    "commercial-support",
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
      ],
    },
    {
      type: 'category',
      label: '用户手册',
      items: [
        {
          type: 'category',
          label: '项目',
          items: [
            "user-manual/project/intro",
            "user-manual/project/project_create",
            "user-manual/project/instance-manager",
            "user-manual/project/rule-template-manager",
            "user-manual/project/workflow-template-manager",
            "user-manual/project/whitelist-manager",
             {
               type: 'category',
               label: '成员',
               items: [
                 "user-manual/project/member-manager/user",
                 "user-manual/project/member-manager/user-group",
               ],
             },
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
                "user-manual/project/audit_task/create-workflow",
                "user-manual/project/audit_task/audit-workflow",
                "user-manual/project/audit_task/exec-workflow",
                "user-manual/project/audit_task/others",
              ],
             }
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '开发手册',
      items: [
        "dev-manual/intro",
      ],
    },
  ],
};

module.exports = sidebars;
