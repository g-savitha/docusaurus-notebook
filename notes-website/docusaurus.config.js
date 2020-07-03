const remarkImages = require("remark-images");
const rehypeTruncate = require("rehype-truncate");

module.exports = {
  title: "Notebook",
  tagline:
    "All my learnings are stored in this website checkout Explore Books section for more",
  url: "https://gsavitha95.github.io",
  baseUrl: "/notebook/",
  favicon: "img/favicon.ico",
  organizationName: "gsavitha95", // Usually your GitHub org/user name.
  projectName: "notebook", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Notebook",
      logo: {
        alt: "My Site Logo",
        src: "img/favicon.ico",
      },
      prism: {
        theme: require("prism-react-renderer/themes/dracula"),
      },
      links: [
        // {
        //   to: "docs/js1",
        //   activeBasePath: "docs",
        //   label: "Docs",
        //   position: "left",
        // },
        { to: "blog", label: "Explore Books", position: "right" },
        {
          href: "https://github.com/gsavitha95",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      // links: [
      //   {
      //     title: "Docs",
      //     items: [
      //       {
      //         label: "Style Guide",
      //         to: "docs/doc1",
      //       },
      //       {
      //         label: "Docusaurus Official",
      //         to: "https://github.com/facebook/docusaurus",
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()}, gsavitha95 @ Notebook, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: "doc1",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/gsavitha95/notebook/tree/master/notes-website/",
          remarkPlugins: [remarkImages],
          rehypePlugins: [rehypeTruncate],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/gsavitha95/notebook/tree/master/notes-website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
