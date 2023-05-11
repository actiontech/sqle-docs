// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SQLE 文档',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/sqle-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'actiontech', // Usually your GitHub org/user name.
  projectName: 'sqle-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/actiontech/sqle-docs/tree/main/packages/', // TODO
          // lastVersion: 'v2',
          versions: {
            current: {
              label: 'v2',
              path: '/',
            },
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'SQLE',
        // style: 'dark',
        logo: {
          alt: 'My Site Logo',
          src: 'img/SQLE_logo.png',
        },
        items: [
          {
            type: 'dropdown',
            label: '文档',
            position: 'left',
            items: [
              {
                type: "doc",
                label: '用户手册',
                docId: 'user-manual/project/intro',
              },
              {
                type: "doc",
                label: '开发手册',
                docId: 'dev-manual/intro',
              },
            ],
          },
          {
            type: "doc",
            label: "在线体验",
            docId: 'online-demo',
          },
          {
            type: "doc",
            label: "安装部署",
            docId: 'deploy-manual/intro',
          },
          {
            type: "doc",
            label: "社区支持",
            docId: 'support/community-support',
          },
          {
            type: "doc",
            label: "商业支持",
            docId: 'support/commercial-support',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownItemsAfter: [
              {
                label: 'v1 版本',
                href: 'https://actiontech.github.io/sqle-docs-cn/',
              }
            ],
            dropdownActiveClassDisabled: true,
          },
          {
            href: 'https://github.com/actiontech/sqle',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
        // hideOnScroll: true,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: '用户手册',
                to: '/docs/user-manual/project/intro',
              },
              {
                label: '部署文档',
                to: '/docs/deploy-manual/intro',
              },
              {
                label: '开发手册',
                to: '/docs/dev-manual/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: '爱可生公司主页',
                href: 'https://www.actionsky.com/',
              },
              {
                label: '爱可生开源社区',
                href: 'https://opensource.actionsky.com/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/actiontech/sqle',
              },
            ],
          },
        ],
        // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
