---
title: 关于 DokiMod Revolution 计划
permalink: /other/dokimod-revolution
sidebar: false
date: 2021-04-28 13:42:53
---

# 关于 DokiMod Revolution 计划

这是 DokiMod 的又一次“重生”计划。

上一次 DokiMod Next 重置计划还没完成，这次的 Revolution 计划其实也挺突然。不过，Revolution 计划可能会让 DokiMod 走向另一种路线。

## 起因

2021 年 4 月 24 日，我刚刚得知国际 DDLC 社区知名的两个 Mod 收录站均已关闭，一个是 DokiMods.com（前身为 DDLCMods.com，与 DokiMod 无关系），另一个是 DokiDokiModClub.com，前者是全球最大的 DDLC Mod 收录站，拥有海量 Mod 资源，但它也容许了一部分含未经授权素材的 Mod，因此曾与后者相关的 Reddit r/DDLCMods 团队展开过骂战。后者则为 [Reddit r/DDLCMods](https://www.reddit.com/r/DDLCMods) 内收录 Mod 的集合站，审核会更加严格，[对于无授权素材零容忍](https://www.reddit.com/r/DDLCMods/comments/cd9blm/regarding_copyright/)，因此像 Summertime 和 Exit Music 这些 Mod 就被除名了。当然，他们还会开展年度 Mod 评选。可惜，两个站点都因为各种问题而停止运营，其中 DokiMods.com 更是为了结束其“骂名”而关站，当然他们的管理组也很混乱，连 Discord 服务器都莫名其妙重置了。而 DokiDokiModClub.com 则是资金问题。

而在中国大陆，由于某种原因，DDLC 相关贴吧早已在去年受到大清理，虽然现在还有稳定的社区，但大部分人已经找不到“组织”了。

DDLC 社区的不稳定，使我突然明白：只有做一个稳定的综合性网站才能拯救这一切。

## 一直做 DDLC 行不通
DDLC 被禁的事实我也改变不了，继续往 DDLC 这条路死磕，那就是一条路走到死，当然也有随时“过气”的风险。DokiMod 的初衷是为了让更多人了解、参与 DDLC Mod 的开发、制作，而现在，我可能需要考虑多介绍 DDLC 背后的 Ren'Py 视觉小说引擎了。之前我在 [旧文档](https://dokimod.cn/moddev/) 里说过：

> DDLC Mod 开发流程和从零开发 Ren'Py 游戏的流程（基本）一致，等你心血来潮想自制一个视觉小说时，迁移成本更低。

在这里，也希望 DokiMod Revolution 计划能让未来的 DDLC Mod 创作者尝试一下从零开始制作视觉小说，继续我们的冒险。

## 新站内容布局

DokiMod Revolution 计划将把网站分为以下几个部分：

- **DDLC 中文 Mod 模板**：一如既往的 DDLC Mod 开发文档
- **Ren'Py 7 实践（暂定）**：做足准备，迎接更新、更好的 Ren'Py，当然 DDLC Mod 也会有迁移手段
- **Mod 仓库**：收录 DDLC Mod，做 Mod 爱好者的新家
- **DokiMod Works**：来自 DokiMod 社区成员的优秀作品，包括 Mod 和独立视觉小说
- **DDLC 相关网站**：收录 DDLC 相关网站，帮助 DDLC 粉丝找到“组织”
- 即将准备的 **社区**
- **DokiMod 插件**：让你的 Mod 更出彩
- **Not Mod-Related Fan Work**

当然这一块在日后会有变更，届时再谈。

## 网站技术栈

DokiMod 新站点将不再使用 GitHub Pages 托管，取而代之的是 [Vercel](https://vercel.com)。我很喜欢 Vercel 对于个人完全免费的服务方案，其部署功能体验也十分舒适。网站将仍然使用 VuePress 1.x，但将改为使用 Vdoing 主题。之前的 AntDocs 主题的 2.0 版本一直没有音讯，虽然颜值在线，但很难受。现在 Revolution 站的 Vdoing 拓展性更强，可以胜任知识库、文档、博客等用途，略微遗憾的是，由于习惯问题，我无法使用它的结构式目录功能，但也能接受。

## DDLC 中文 Mod 模板 2.0 计划
在 Ren'Py 7 的大环境下，继续使用 Ren'Py 6 未免会有些过时，但 DDLC 发布时使用的 Ren'Py SDK 为 6.99 版本，虽然是 SDK 7 的过渡版本，但使用 Ren'Py SDK 7 导出的 Mod 是不能在 DDLC 里运行的。

目前，[GanstaKingofSA](https://github.com/GanstaKingofSA) 的 [DDLC Mod 模板](https://github.com/GanstaKingofSA/DDLCModTemplate2.0) 已经支持了 Android Mod 移植、Ren'Py SDK 7、使用 Xcode 开发、NVl 模式，以及追加了许多新功能，而接下来，我将准备基于此模板进行一些修改，完善汉化配置，推出 2.0 版本的中文 Mod 模板。你将可以体验 Ren'Py 7 带来的许多新特性，包括 Live2D Cubism SDK 支持，而 Mod 也将更有生命力，同时在制作独立视觉小说时的压力也会更小。

现行 1.x 版本的中文 Mod 模板也将继续维护，并将同步部分 2.0 模板的功能，而目前我也将 2.0 模板的 `rhide` 类转场效果加入了 1.x 模板的开发版本，角色可以从右侧进场 / 出场了。

现在您可以查看新 Mod 模板的 [GitHub 仓库](https://github.com/imgradeone/DDLCModTemplate-Chinese-next)。