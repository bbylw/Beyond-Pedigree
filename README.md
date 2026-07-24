# 血统之外 · Beyond Pedigree

> **生命不是家谱 —— 买宠物，别只看血统。**
> *A Life Is Not a Pedigree — don't shop by bloodline alone.*

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Build](https://img.shields.io/badge/build-none-success)
![Languages](https://img.shields.io/badge/languages-中文%20|%20English-blue)
![Fonts](https://img.shields.io/badge/fonts-SIL%20OFL%201.1-green)

---

## 目录 · Table of Contents

- [中文](#中文)
  - [项目简介](#项目简介)
  - [页面结构](#页面结构)
  - [交互与技术亮点](#交互与技术亮点)
  - [目录结构](#目录结构)
  - [字体（全部免费商用）](#字体全部免费商用)
  - [设计语言](#设计语言)
  - [参考文献](#参考文献)
  - [声明](#声明)
- [English](#english)

---

# 中文

## 项目简介

**血统之外** 是一个围绕《买宠物只看血统，是一种错误的选择》一文构建的**纯静态单页公益网站**。

血统可以证明一只动物从哪里来，却不能证明它会健康、温顺，也不能证明它适合你。本网站沿着循证主线，把「冠军血统」「赛级血线」「稀有毛色」这套营销叙事逐层拆开——从概念偷换到群体遗传学，从审美代价到卖家话术——并提供一整套可操作的工具，帮助你在付款之前做出真正理性的判断。

- **纯静态**：HTML + CSS + 原生 JavaScript，零依赖、零构建、零框架
- **中英双语**：默认中文，导航栏一键切换，语言偏好自动记忆
- **言之有据**：9 篇参考文献，核心论断均可溯源（群体遗传学、犬基因组学、兽医流行病学）

## 页面结构

| # | 版块 | 内容 |
|---|------|------|
| 01 | 迷思 | 五句被故意混淆的销售逻辑，滚动触发红线划除动画 |
| 02 | 证书 | 一张血统证书能证明的 3 件事 vs 不能证明的 4 件事 |
| 03 | 数据 | 25% / 9% / 27,254 / 10-13-1 四组硬数据 + 「热门种公效应」基因贡献连线图 |
| 04 | 实验室 | COI 近交系数体验台：5 种配种关系 → 仪表盘指针动画 + 风险解读 |
| 05 | 话术 | 话术翻译机：6 条高频销售话术，点击逐条翻译成人话 |
| 06 | 红旗 | 卖家红旗扫描仪：9 项勾选实时计数，四级判定（黄牌 / 红旗密布 / 跑） |
| 07 | 代价 | 当「萌」是疾病的包装：审美翻译 + BOAS 与苏格兰折耳猫典型案例 |
| 08 | 风险 | 品种风险速查：8 个品种卡片，按犬 / 猫筛选，每张附「该问什么」 |
| 09 | 五件事 | 看自己 / 看证据 / 看性格 / 看环境 / 看售后 |
| 10 | 测验 | 血统迷信指数测试：6 道判断题，即时解析 + 四级评级 |
| 11 | 清单 | 带它回家之前的 12 项确认：进度条、动态判定、本地保存、打印、复制进度 |
| — | 结语 + 文献 | 核心主张收束 + 9 篇参考文献与免责声明 |

## 交互与技术亮点

**动效**
- 滚动显现（IntersectionObserver + 交错延迟）、数字滚动计数、跑马灯划线词条
- 印章「砸入」动画、证书鼠标 3D 倾斜、SVG 基因贡献线逐条描画
- 仪表盘指针弹性转动、红旗计数抖动反馈

**国际化（i18n）**
- 静态文本：`data-zh` / `data-en` 成对标注，两行 CSS 规则切换显隐
- 动态文本：`I18N` 双语词典 + `applyLang()` 统一重渲染（测验、实验台、判定、工具提示）
- 测验的答题进度与得分在切换语言后原状保留，解析自动切换语言
- 语言偏好写入 `localStorage`，同步更新 `<html lang>`、`document.title` 与 `meta description`

**持久化与输出**
- 清单勾选状态自动保存到本机浏览器
- 「复制进度」一键导出 ✓/✗ 清单文本；「打印清单」走专用打印样式，只输出清单部分

**无障碍**
- 动态判定区 `aria-live`、`focus-visible` 焦点轮廓、`prefers-reduced-motion` 全面降级

**术语悬浮注释**
- COI、近交衰退、遗传力、有效群体大小、热门种公效应、杂种优势、多基因性状、BOAS 共 8 条，悬停 / 聚焦即出释义（双语）

## 目录结构

```
net/
├── index.html                          页面结构与全部双语文案
├── favicon.svg                         印章风格爪印图标
├── css/
│   └── style.css                       全部样式（含打印样式与降级规则）
├── js/
│   └── main.js                         全部交互逻辑 + I18N 词典
├── 买宠物只看血统是一种错误选择.md     内容来源文章
└── README.md
```

## 字体（全部免费商用）

全部字体基于 **SIL Open Font License 1.1**，可免费商用，经由 Google Fonts 加载：

| 字体 | 角色 |
|------|------|
| Noto Serif SC（900） | 中文/英文标题，黑宋体的社论力量感 |
| Noto Sans SC | 正文 |
| Long Cang（龙藏） | 证书红笔手写批注 |
| Anton | 统计数字、编号、印章式拉丁字 |

## 设计语言

宣传海报式的「证据档案」风格：纸感底色 + 油墨绿 + 印章红 + 警示黄，硬阴影、双线印章、警戒胶带分隔线——让每一份数据看起来像被审查过的呈堂证供，而不是又一张营销页。

| 令牌 | 色值 | 用途 |
|------|------|------|
| `--paper` | `#F4EFE3` | 纸感底色 |
| `--ink` | `#1C2820` | 油墨 / 描边 |
| `--green` | `#1E5B3C` | 证书绿 / 通过态 |
| `--deep` | `#0F3223` | 深色章节底 |
| `--red` | `#CE3A22` | 印章红 / 警示 |
| `--yellow` | `#F2BE2B` | 荧光笔高亮 |

## 参考文献

1. Calboli FCF, et al. *Genetics*. 2008;179(1):593–601 — 纯种犬家谱近交分析
2. Bellumori TP, et al. *JAVMA*. 2013;242(11):1549–1555 — 27,254 例纯种/混种遗传病比较
3. OFA — Canine Health Information Center (CHIC) Program
4. Morrill K, et al. *Science*. 2022;376(6592):eabk0639 — 犬基因组学与行为刻板印象
5. Salonen M, et al. *iScience*. 2023;26(5):106691 — 犬性格与社会环境关联
6. O'Neill DG, et al. *Canine Genetics and Epidemiology*. 2015;2:10 — 短吻与上呼吸道疾病
7. Liu N-C, et al. *JVIM*. 2016;30(3):853–865 — 短头犬气道阻塞体积描记
8. Gandolfi B, et al. *Osteoarthritis and Cartilage*. 2016;24(8):1441–1450 — 折耳猫 TRPV4 变异
9. Rorden C, et al. *Human Genetics*. 2021;140(11):1525–1534 — 折耳猫骨软骨发育不良影像调查

## 声明

群体研究描述的是统计风险，不能替代对单只动物的临床诊断，也不能把某一研究人群的结果机械套用到所有地区和所有品种。本网站不反对负责任的纯种繁育，反对的是把血统当成压倒一切的标准。

---

# English

## Overview

**Beyond Pedigree** is a fully static, single-page advocacy site built on the essay *"Choosing a pet by pedigree alone is a mistaken choice."*

A pedigree proves where an animal came from — not whether it will be healthy, gentle, or right for you. Following an evidence-based thread, the site tears down the "champion bloodline / show line / rare color" marketing narrative layer by layer — from bait-and-switch logic to population genetics, from the cost of extreme aesthetics to seller spin — and hands you a working toolkit for making a rational decision before you pay.

- **Fully static**: HTML + CSS + vanilla JavaScript. Zero dependencies, zero build, zero frameworks.
- **Bilingual**: Chinese by default, one-click English toggle in the nav, preference remembered.
- **Sourced**: 9 references; every core claim is traceable (population genetics, canine genomics, veterinary epidemiology).

## Sections

| # | Section | What it does |
|---|---------|--------------|
| 01 | Myths | Five deliberately blurred sales claims, struck through on scroll |
| 02 | The Cert | What a pedigree proves (3 things) vs. what it doesn't (4 things) |
| 03 | The Data | 25% / 9% / 27,254 / 10-13-1 + animated "popular sire" contribution diagram |
| 04 | The Lab | COI bench: 5 mating types → gauge needle + risk reading |
| 05 | The Spin | Sales-pitch translator: 6 buzzwords decoded on click |
| 06 | Red Flags | Seller scanner: 9 checks, live count, four-tier verdict |
| 07 | The Cost | When "cute" packages disease: BOAS & Scottish Fold case files |
| 08 | Risk Index | 8 breed cards, dog/cat filter, each with questions to ask |
| 09 | What to Look At | Yourself / evidence / temperament / environment / aftercare |
| 10 | The Quiz | 6 true/false questions, instant explanations, four-tier score |
| 11 | Final Gate | 12-point checklist: progress bar, verdicts, local save, print, copy |
| — | Closing + Refs | Core thesis + 9 references and disclaimer |

## Technical Highlights

- **Motion**: scroll reveals, count-up stats, marquee, stamp slams, 3D certificate tilt, SVG line drawing, springy gauge needle
- **i18n**: `data-zh`/`data-en` pairs for static copy; an `I18N` dictionary + `applyLang()` for dynamic strings — quiz progress and scores survive language switches
- **Persistence**: checklist state and language preference in `localStorage`; dedicated print stylesheet for the checklist
- **Accessibility**: `aria-live` verdicts, `focus-visible` outlines, full `prefers-reduced-motion` fallback
- **Glossary tooltips**: 8 bilingual terms (COI, inbreeding depression, heritability, effective population size, popular sire effect, hybrid vigor, polygenic traits, BOAS)

## Fonts (all commercially free)

All typefaces are **SIL Open Font License 1.1**, served by Google Fonts: Noto Serif SC 900 (display), Noto Sans SC (body), Long Cang (handwritten annotations), Anton (numerals).

## Note

Population studies describe statistical risk — they are no substitute for clinical diagnosis of an individual animal. This site does not oppose responsible purebred breeding; it opposes making pedigree the one factor that overrides everything else.
