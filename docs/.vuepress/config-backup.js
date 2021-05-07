module.exports = {
    title: 'DokiMod',
    description: '为 Mod 创作赋能。',
    plugins: {
      "vuepress-plugin-auto-sidebar": {
        titleMap: {
          "moddev": "Mod 开发",
          "player": "玩家指引",
          "mods": "精选 Mod",
          "releases": "版本更新历史",
          "downloads": "下载",
          "extensions": "素材 / 补丁插件",
          "excel2mod": "Excel2DDLCMod"
        }
      },
    },
    theme: "vdoing",
    head: [
      ['meta', { name: 'theme-color', content: '#fa4694' }],
      ['link', { rel: 'icon', href: '/logo_128x128.png' }],
      ['meta', { name: 'keywords', content: 'ddlc,ddlc mod,ddlcmod,doki doki literature club,doki doki literature club mods,dokimod,文学部,文学部mod,游戏mod开发,心跳文学部,心跳文学部mod,mod开发,心跳文学部mod开发' }]
    ],
    base: "/",
    themeConfig: {
      smoothScroll: true,
      lastUpdated: '上次更新于',
      logo: '/logo_128x128.png',
      category: false,
      tag: false,
      archive: false,
      titleBadge: false,
      updateBar: { // 最近更新栏
        showToArticle: false
      },
      social:{
        icons: [
          {
            iconClass: 'icon-github',
            title: 'GitHub',
            link: 'https://github.com/DokiMod'
          }
        ]
      },
      footer:{
        createYear: 2021,
        copyrightInfo: 'DokiMod Team | 本网站是粉丝作品，与 Team Salvato 无关 | hosted by <a href="https://vercel.com">Vercel</a> | powered by VuePress',
      },
      nav: [
        { text: '主页', link: '/' },
        { text: '产品', link: '/products/',
          items: [
            { text: '产品', link: '/products/' },
            { text: 'DDLC 中文 Mod 模板', link: '/products/cnmodtemp' },
            { text: '蜜茶 Bot', link: '/products/mitana' },
            { text: 'DokiMod 插件', link: '/products/extensions' }
          ]
        },
        { text: '文档', link: '/doc/',
          items: [
            { text: 'DDLC 中文 Mod 模板 / Mod 开发', link: '/doc/moddev' },
            { text: '蜜茶 Bot', link: '/doc/mitana' },
            { text: 'DokiMod 插件开发', link: '/doc/extdev' },
            { text: '玩家帮助', link: '/doc/player' }
          ]
        },
        { text: '下载', link: '/downloads/' },
        { text: '返回原版文档', link: 'https://dokimod.cn' },
        {
          text: 'GitHub',
          items: [
            { text: 'Mod 模板', link: 'https://github.com/imgradeone/DDLCModTemplate-Chinese' },
            { text: '文档', link: 'https://github.com/imgradeone/DDMTCN-Docs' }
          ]
        },
      ],
    }
    
  }