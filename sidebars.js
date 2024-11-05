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
        "deploy-manual/Docker",
        "deploy-manual/DockerCompose",
        "deploy-manual/upgrade",
      ],
    },
    {
      type: 'category',
      label: '用户手册',
      items: [
        {
          type: 'category',
          label: '项目配置',
          items: [
            "user-manual/project/intro",
            "user-manual/project/project_create",
            "user-manual/project/instance-manager",
            "user-manual/project/group_member",
            "user-manual/project/rule-template-manager",
            "user-manual/project/workflow-template-manager",
            "user-manual/project/whitelist-manager",
            "user-manual/project/blacklist-manager",
            "user-manual/project/operation_records",
            "user-manual/project/push-rule",
          ],
        },
        {
          type: 'category',
          label: 'SQL开发',
          items: [
            "user-manual/project/dataexport",
            "user-manual/project/Structure-Comparison",
            "user-manual/project/quick_audit",
            "user-manual/project/IDEaudit",
            "user-manual/project/audit_task/mybatis",
            "user-manual/project/audit_task/SQLfile_audit",
          ],
        },
        {
          type: 'category',
          label: 'SQL上线',
          items: [
            "user-manual/project/workflow/intro",
            "user-manual/project/workflow/create-workflow",
            "user-manual/project/workflow/audit-workflow",
            "user-manual/project/workflow/exec-workflow",
            "user-manual/project/workflow/version-management",
          ],
        },
            "user-manual/project/CICDintegration",
        {
          type: 'category',
          label: 'SQL管控',
          items: [
            "user-manual/project/audit_task/intro",
            "user-manual/project/audit_task/sqlmanage",
            "user-manual/project/audit_task/metadata_audit",
            "user-manual/project/audit_task/slowlog_audit",
            "user-manual/project/audit_task/processlist_audit",
            "user-manual/project/audit_task/topsql",
            "user-manual/project/audit_task/baiduyunrds",
            "user-manual/project/audit_task/huaweiyunrds",
            "user-manual/project/audit_task/java_application_audit",
            "user-manual/project/audit_task/java_agent_audit",
          ],
        },
        {
          type: 'category',
          label: 'SQL工作台',
          items: [
            "user-manual/sql-workbench/introduction",
            "user-manual/sql-workbench/how-to-configure",
            "user-manual/sql-workbench/how-to-use",
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
            "user-manual/sys-configuration/configuration",
            "user-manual/sys-configuration/customize",
          ],
        },           
        {
          type: 'category',
          label: '用户管理',
          items: [
            "user-manual/user-manager/intro",
            "user-manual/user-manager/user",
            "user-manual/user-manager/role",
            "user-manual/user-manager/account",
          ],
        }, 
        "user-manual/customrule",
        "user-manual/knowledgebase",   
        "user-manual/allinstance", 
        "user-manual/project/instance_syn",
      ],
    },
    {
      type: 'category',
      label: '开发手册',
      items: [
        {
          type: 'category',
          label: '数据源审核插件',
          items: [
            "dev-manual/plugins/intro",
            "dev-manual/plugins/howtouse",
            "dev-manual/plugins/howtodev",
          ],
        },
        {
          type: 'category',
          label: '开发工具审核插件',
          items: [
            "dev-manual/auditplugins/jetbrains",
            "dev-manual/auditplugins/eclipse",
          ],
        },
        {
          type: 'category',
          label: 'OpenAPI',
          items: [
            "dev-manual/OpenAPI/dmstoken",
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'FAQ',
      items: [
        "FAQ/whichdatabase",
        "FAQ/rollback",
        "FAQ/mirror",
      ],
    },
  ],
};

module.exports = sidebars;
