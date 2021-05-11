module.exports = {
    title: 'DokiMod 开发文档',
    description: '为 Mod 创作赋能。',
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
      sidebar: 'structuring',
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
      author: {
        name: 'imgradeone', // 必需
        link: 'https://imgradeone.com/', // 可选的
      },
      footer:{
        createYear: 2021,
        copyrightInfo: 'DokiMod Team | 本网站是粉丝作品，与 Team Salvato 无关 | hosted by <a href="https://vercel.com">▲ Vercel</a> | powered by VuePress',
      },
      nav: [
        { text: '主页', link: '/' },
        { text: 'DDLC 中文 Mod 模板', link: '/modtemplate'},
        { text: '返回主站', link: 'https://revolution.dokimod.cn' },
        {
          text: 'GitHub',
          items: [
            { text: 'Mod 模板', link: 'https://github.com/imgradeone/DDLCModTemplate-Chinese' },
            { text: 'Mod 模板 2.0', link: 'https://github.com/imgradeone/DDLCModTemplate-Chinese-next' },
            { text: '新版文档', link: 'https://github.com/imgradeone/revolution' },
            { text: '新版开发文档', link: 'https://github.com/imgradeone/revolution-doc' }
          ]
        },
      ],
    }
    
  }