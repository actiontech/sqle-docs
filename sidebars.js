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
    "guide",
    "online-demo",
    "support",
    {
      type: 'category',
      label: '安装部署',
      items: [
        "deploy-manual/intro",
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
