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
      link: {
        type: 'doc',
        id: 'user-manual/intro',
      },
      items: [
        {
          type: 'category',
          label: '平台管理',
          link: {
            type: 'doc',
            id: 'user-manual/platform/intro',
          },
          items: [
            "user-manual/Dashboard",
            "user-manual/resource-overview",
            "user-manual/allinstance",
            {
              type: 'category',
              label: '用户与权限',
              items: [
                "user-manual/user-manager/user",
                "user-manual/user-manager/role",
                "user-manual/user-manager/account",
              ],
            },
            {
              type: 'category',
              label: '系统设置',
              items: [
                "user-manual/sys-configuration/login_syn",
                "user-manual/sys-configuration/message_syn",
                "user-manual/sys-configuration/process_syn",
                "user-manual/sys-configuration/webhook",
                "user-manual/sys-configuration/MFA",
                "user-manual/sys-configuration/configuration",
                "user-manual/sys-configuration/customize",
                "user-manual/sys-configuration/zone",
              ],
            },
          ],
        },
        {
          type: 'category',
          label: '项目空间',
          link: {
            type: 'doc',
            id: 'user-manual/project/intro',
          },
          items: [
            "user-manual/project/project_create",
            "user-manual/project/datasource",
            "user-manual/project/group_member",
            "user-manual/project/rule-template-manager",
            "user-manual/project/workflow-template-manager",
            "user-manual/project/whitelist-manager",
            "user-manual/project/blacklist-manager",
            "user-manual/project/push-rule",
            "user-manual/project/operation_records",
          ],
        },
        {
          type: 'category',
          label: 'SQL 开发',
          link: {
            type: 'doc',
            id: 'user-manual/sql-dev/intro',
          },
          items: [
            "user-manual/project/quick_audit",
            "user-manual/project/dataexport",
            {
              type: 'category',
              label: 'SQL 工作台',
              link: {
                type: 'doc',
                id: 'user-manual/sql-workbench/introduction',
              },
              items: [
                "user-manual/sql-workbench/cloudbeaver/intro",
                "user-manual/sql-workbench/cloudbeaver/customize",
                "user-manual/sql-workbench/odc/deploy",
              ],
            },
            "user-manual/project/Structure-Comparison",
            "user-manual/project/IDEaudit",
            "user-manual/project/CICDintegration",
          ],
        },
        {
          type: 'category',
          label: 'SQL 上线',
          link: {
            type: 'doc',
            id: 'user-manual/sql-deploy/intro',
          },
          items: [
            "user-manual/project/workflow/intro",
            "user-manual/project/workflow/create-workflow",
            "user-manual/project/workflow/audit-workflow",
            "user-manual/project/workflow/exec-workflow",
            "user-manual/project/workflow/rollback",
            "user-manual/project/workflow/version-management",
          ],
        },
        {
          type: 'category',
          label: 'SQL 管控',
          link: {
            type: 'doc',
            id: 'user-manual/sql-management/intro',
          },
          items: [
            "user-manual/project/audit_task/intro",
            "user-manual/project/audit_task/sqlmanage",
            "user-manual/project/audit_task/performance-insight",
            "user-manual/project/audit_task/SQLdrilldown",
            {
              type: 'category',
              label: '智能扫描任务',
              items: [
                "user-manual/project/audit_task/metadata_audit",
                "user-manual/project/audit_task/slowlog_audit",
                "user-manual/project/audit_task/processlist_audit",
                "user-manual/project/audit_task/topsql",
                "user-manual/project/audit_task/mybatis",
                "user-manual/project/audit_task/SQLfile_audit",
                "user-manual/project/audit_task/java_application_audit",
                "user-manual/project/audit_task/java_agent_audit",
                "user-manual/project/audit_task/baiduyunrds",
                "user-manual/project/audit_task/huaweiyunrds",
                "user-manual/project/audit_task/lockinfo",
              ],
            },
          ],
        },
        {
          type: 'category',
          label: '数据安全',
          link: {
            type: 'doc',
            id: 'user-manual/data-security/intro',
          },
          items: [
            "user-manual/project/data_masking",
            {
              type: 'category',
              label: '账号安全',
              link: {
                type: 'doc',
                id: 'user-manual/project/data_access_control/intro',
              },
              items: [
                "user-manual/project/data_access_control/permission_template",
                "user-manual/project/data_access_control/authorization_list",
                "user-manual/project/data_access_control/expiring_password",
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'SQL 优化',
          link: {
            type: 'doc',
            id: 'user-manual/sql-optimization/intro',
          },
          items: [
            "user-manual/project/sql-improve/sqlrewrite",
            "user-manual/project/sql-improve/sqltune",
          ],
        },
        {
          type: 'category',
          label: '知识与规则',
          link: {
            type: 'doc',
            id: 'user-manual/knowledge/intro',
          },
          items: [
            "user-manual/customrule",
            "user-manual/knowledgebase",
          ],
        },
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
