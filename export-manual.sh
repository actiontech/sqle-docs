#!/bin/bash
# Export DMS user manual as a single Markdown file
# Follows sidebar order, includes all content (community + enterprise + DMS)

DOCS="/opt/sqle-docs/docs"
OUT="/opt/sqle-docs/DMS用户手册.md"

strip_frontmatter() {
  awk 'BEGIN{skip=0; started=0}
    /^---$/ && !started {skip=1; started=1; next}
    /^---$/ && skip {skip=0; next}
    !skip {print}' "$1"
}

strip_import() {
  grep -v "^import Edition" | grep -v "^import "
}

echo "# DMS 用户手册" > "$OUT"
echo "" >> "$OUT"
echo "> 版本：v4 | 导出时间：$(date '+%Y-%m-%d %H:%M')" >> "$OUT"
echo "" >> "$OUT"
echo "---" >> "$OUT"
echo "" >> "$OUT"

FILES=(
  "user-manual/intro.md"

  "user-manual/platform/intro.md"
  "user-manual/Dashboard.md"
  "user-manual/resource-overview.md"
  "user-manual/allinstance.md"
  "user-manual/user-manager/user.md"
  "user-manual/user-manager/role.md"
  "user-manual/user-manager/account.md"
  "user-manual/sys-configuration/login_syn.md"
  "user-manual/sys-configuration/message_syn.md"
  "user-manual/sys-configuration/process_syn.md"
  "user-manual/sys-configuration/webhook.md"
  "user-manual/sys-configuration/MFA.md"
  "user-manual/sys-configuration/configuration.md"
  "user-manual/sys-configuration/customize.md"
  "user-manual/sys-configuration/zone.md"

  "user-manual/project/intro.md"
  "user-manual/project/project_create.md"
  "user-manual/project/datasource.md"
  "user-manual/project/group_member.md"
  "user-manual/project/rule-template-manager.md"
  "user-manual/project/workflow-template-manager.md"
  "user-manual/project/whitelist-manager.md"
  "user-manual/project/blacklist-manager.md"
  "user-manual/project/push-rule.md"
  "user-manual/project/operation_records.md"

  "user-manual/sql-dev/intro.md"
  "user-manual/project/quick_audit.md"
  "user-manual/project/dataexport.md"
  "user-manual/sql-workbench/introduction.md"
  "user-manual/project/Structure-Comparison.md"
  "user-manual/project/IDEaudit.md"
  "user-manual/project/CICDintegration.md"

  "user-manual/sql-deploy/intro.md"
  "user-manual/project/workflow/intro.md"
  "user-manual/project/workflow/create-workflow.md"
  "user-manual/project/workflow/audit-workflow.md"
  "user-manual/project/workflow/exec-workflow.md"
  "user-manual/project/workflow/rollback.md"
  "user-manual/project/workflow/version-management.md"

  "user-manual/sql-management/intro.md"
  "user-manual/project/audit_task/intro.md"
  "user-manual/project/audit_task/sqlmanage.md"
  "user-manual/project/audit_task/performance-insight.md"
  "user-manual/project/audit_task/SQLdrilldown.md"
  "user-manual/project/audit_task/metadata_audit.md"
  "user-manual/project/audit_task/slowlog_audit.md"
  "user-manual/project/audit_task/processlist_audit.md"
  "user-manual/project/audit_task/topsql.md"
  "user-manual/project/audit_task/mybatis.md"
  "user-manual/project/audit_task/SQLfile_audit.md"
  "user-manual/project/audit_task/java_application_audit.md"
  "user-manual/project/audit_task/java_agent_audit.md"
  "user-manual/project/audit_task/baiduyunrds.md"
  "user-manual/project/audit_task/huaweiyunrds.md"
  "user-manual/project/audit_task/lockinfo.md"

  "user-manual/data-security/intro.md"
  "user-manual/project/data_masking.md"
  "user-manual/project/data_access_control/intro.md"
  "user-manual/project/data_access_control/permission_template.md"
  "user-manual/project/data_access_control/authorization_list.md"
  "user-manual/project/data_access_control/expiring_password.md"

  "user-manual/sql-optimization/intro.md"
  "user-manual/project/sql-improve/sqlrewrite.md"
  "user-manual/project/sql-improve/sqltune.md"

  "user-manual/knowledge/intro.md"
  "user-manual/customrule.md"
  "user-manual/knowledgebase.md"
)

for f in "${FILES[@]}"; do
  filepath="$DOCS/$f"
  if [ -f "$filepath" ]; then
    strip_frontmatter "$filepath" | strip_import >> "$OUT"
    echo "" >> "$OUT"
    echo "---" >> "$OUT"
    echo "" >> "$OUT"
  else
    echo "<!-- MISSING: $f -->" >> "$OUT"
    echo "" >> "$OUT"
  fi
done

echo "Export complete: $OUT"
wc -l "$OUT"
