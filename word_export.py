#!/usr/bin/env python3
"""
Read SUMMARY.md, concat all referenced markdown files in order,
then call pandoc to produce a Word document with TOC.
"""

import re
import os
import subprocess
import sys

SUMMARY = "SUMMARY.md"
OUTPUT_MD = "_combined.md"
OUTPUT_DOCX = "DMS用户手册.docx"


def extract_links(summary_path):
    """Extract markdown file paths from SUMMARY.md in order."""
    links = []
    seen = set()
    with open(summary_path, "r", encoding="utf-8") as f:
        for line in f:
            m = re.search(r'\]\(([^)]+\.md)\)', line)
            if m:
                path = m.group(1)
                if path not in seen:
                    seen.add(path)
                    links.append(path)
    return links


def read_and_clean(filepath):
    """Read a markdown file, strip frontmatter and import statements."""
    if not os.path.isfile(filepath):
        return f"\n<!-- MISSING: {filepath} -->\n"

    with open(filepath, "r", encoding="utf-8") as f:
        lines = f.readlines()

    out = []
    in_frontmatter = False
    fm_count = 0

    for line in lines:
        if fm_count < 2 and line.strip() == "---":
            fm_count += 1
            in_frontmatter = fm_count == 1
            if fm_count == 2:
                in_frontmatter = False
            continue
        if in_frontmatter:
            continue
        if line.startswith("import "):
            continue
        if re.match(r'^\s*<Edition\b', line):
            continue
        if line.startswith(":::"):
            continue
        out.append(line)

    return "".join(out)


def main():
    if not os.path.isfile(SUMMARY):
        print(f"ERROR: {SUMMARY} not found in {os.getcwd()}", file=sys.stderr)
        sys.exit(1)

    links = extract_links(SUMMARY)
    print(f"Found {len(links)} files in SUMMARY.md")

    combined = "# DMS 用户手册\n\n"
    combined += "> 数据全生命周期管理平台\n\n"
    combined += "---\n\n"

    for path in links:
        content = read_and_clean(path)
        combined += content.rstrip() + "\n\n---\n\n"
        print(f"  + {path}")

    with open(OUTPUT_MD, "w", encoding="utf-8") as f:
        f.write(combined)

    print(f"\nCombined markdown: {OUTPUT_MD} ({len(combined)} chars)")
    print("Running pandoc...")

    cmd = [
        "pandoc", OUTPUT_MD,
        "-o", OUTPUT_DOCX,
        "--toc", "--toc-depth=3",
        "-f", "markdown",
        "-t", "docx",
        "--metadata", "title=DMS 用户手册",
        "--metadata", "author=ActionTech",
    ]

    result = subprocess.run(cmd, capture_output=True, text=True)
    if result.returncode != 0:
        print(f"pandoc error: {result.stderr}", file=sys.stderr)
        sys.exit(1)

    size_mb = os.path.getsize(OUTPUT_DOCX) / (1024 * 1024)
    print(f"Word export done: {OUTPUT_DOCX} ({size_mb:.1f} MB)")

    os.remove(OUTPUT_MD)


if __name__ == "__main__":
    main()
