
#!/usr/bin/env python
# _*_ coding:utf-8 _*_

import os
import io
import re

folder_path = "./build"

def fix_file(file_name):
    with io.open(file_name, "r", encoding="utf-8") as f1:
        lines = f1.readlines()

    modified = False
    content = ""
    in_alert_body = False
    in_frontmatter = False
    frontmatter_count = 0

    for line in lines:
        # Strip Docusaurus frontmatter (--- block at file start)
        if frontmatter_count < 2 and line.strip() == "---":
            frontmatter_count += 1
            in_frontmatter = frontmatter_count == 1
            if frontmatter_count == 2:
                in_frontmatter = False
                modified = True
            continue
        if in_frontmatter:
            modified = True
            continue

        # Strip import statements (MDX)
        if line.startswith("import "):
            modified = True
            continue

        # Strip MDX components like <Edition type="enterprise" />
        if re.match(r'^\s*<Edition\b', line):
            modified = True
            continue

        # Strip custom admonitions :::edition-enterprise, :::caution, etc.
        if line.startswith(":::"):
            in_alert_body = not in_alert_body
            modified = True
            continue

        if in_alert_body:
            content = content + "> " + line
        else:
            content = content + line

    if modified:
        print("fix file " + file_name)
        new_file = file_name + ".replace"
        with io.open(new_file, "w", encoding="utf-8") as f2:
            f2.write(content)
            os.remove(file_name)
            os.rename(new_file, file_name)


def findAllFile(base):
    for root, ds, fs in os.walk(base):
        for f in fs:
            fullname = os.path.join(root, f)
            yield fullname


if __name__ == '__main__':
    for file_path in findAllFile(folder_path):
        if file_path.startswith(os.path.join(folder_path, "node_modules")):
            continue
        if file_path.lower().endswith(".md"):
            fix_file(file_path)
