
#!/usr/bin/env python
# _*_ coding:utf-8 _*_

import os
import io

folder_path = "./build"
  
def fix_alert_tag(file_name):
    with io.open(file_name, "r", encoding="utf-8") as f1:
        in_alert_body = False
        has_alert = False
        content = ""
        lines = f1.readlines()
        for line in lines: 
            if line.startswith(":::"):
                in_alert_body = not in_alert_body
                has_alert = True
                continue
            if in_alert_body:
                content = content + "> " + line
            else:
                content = content + line

        if has_alert:
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
            fix_alert_tag(file_path)