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
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
  {
      type: 'doc',
      id: 'intro',
  },
  {
    type: 'category',
    label: 'Панельные сервера',
    items: [
      {
        type: 'category',
        label: 'Привязка домена',
        items: [
          {
            type: 'doc',
            id: 'pterodactyl/domain/webproxy',
          },
          {
            type: 'doc',
            id: 'pterodactyl/domain/cloudflare',
          }
        ]
      }
    ]
  },
  {
    type: 'category',
    label: 'Виртуальные сервера',
    items: [
      {
        type: 'doc',
        id: 'vm/faq',
      },
      {
        type: 'doc',
        id: 'vm/ssh',
      },
      {
        type: 'doc',
        id: 'vm/warp',
      },
      {
        type: 'doc',
        id: 'vm/fsresize',
      },
      {
        type: 'category',
        label: 'Туториалы',
        items: [
          {
            type: 'doc',
            id: 'vm/tutorials/pterodactyl',
          },
          {
            type: 'doc',
            id: 'vm/tutorials/pteronode',
          },
        ],
      },
    ],
  },
  ],
};

export default sidebars;
