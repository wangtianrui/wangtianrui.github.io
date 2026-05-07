/* ============================================================
 * main.js  — 站点行为脚本
 * 1) 中英双语切换：通过 data-i18n-key + I18N 字典完成
 * 2) 论文列表渲染：按年份倒序、可按"一作 / 类别"筛选
 * 3) 杂项：当前年份、平滑滚动等
 *
 * 添加新文案翻译时：
 *   - HTML 元素加 data-i18n-key="some_key"
 *   - 在下方 I18N.zh / I18N.en 中各加 some_key 的中英文
 * ============================================================ */

/* ----------- 1) i18n 字典 ----------- */
const I18N = {
  zh: {
    logo: "王天锐 · Tianrui Wang",
    nav_about: "关于",
    nav_education: "教育背景",
    nav_experience: "科研与实习",
    nav_publications: "论文",
    nav_projects: "开源项目",
    nav_awards: "获奖",
    nav_contact: "联系方式",

    hero_name: "王天锐 · Tianrui Wang",
    hero_title: "天津大学 / 南洋理工大学 联培博士生 · 语音合成 · 语音理解生成统一建模",
    hero_bio: "研究方向聚焦于语音合成中的细粒度情感控制、基于 LLM 的可控语音合成，以及语音理解与生成统一大模型。先后在微软亚洲研究院、中国移动研究院、慧言科技、华为、腾讯等机构进行研究与实习。",
    hero_cv: "📄 下载完整简历 (PDF)",

    sec_about: "关于我",
    about_p1: "我是王天锐，目前是<strong>天津大学</strong>智能与计算学部电子信息专业博士生（学位授予方）；博士阶段由四位导师<strong>联合指导</strong>：<a href=\"https://cic.tju.edu.cn/faculty/wanglongbiao/wang.html\" target=\"_blank\">王龙标 教授（TJU）</a>、党建武 教授（TJU）、<a href=\"https://personal.ntu.edu.sg/aseschng/speechLab_intro.html\" target=\"_blank\">Eng Siong Chng 教授（NTU）</a>、<a href=\"https://chenxie95.github.io/en\" target=\"_blank\">陈谐 副教授（SJTU）</a>。受国家公派留学奖学金资助，目前在<strong>南洋理工大学（NTU）</strong>访学交流；同时长期在<strong>上海交通大学</strong>跨媒体语言智能实验室（X-LANCE）联培研究。",
    about_p2: "研究方向涵盖：语音合成（尤其是细粒度情感与韵律控制）、自监督语音预训练、语音理解与生成统一大模型、语音增强、鲁棒语音识别等。代表工作包括 ProgRE、VioLA、HGCN、Harmonic Attention、NeurIPS 2025 Spotlight 的 WeScon（Word-level Emotion Control）、以及 ACL 2026 Oral (Top 5%) 的 CEAEval（Expressive Appropriateness Evaluation）等。",
    about_p3: "我曾在微软亚洲研究院（自然语言计算组）、中国移动研究院（人工智能与智慧运营部）、慧言科技、华为 2012 实验室、腾讯（语音大模型算法中心）等机构进行研究与实习，并入选中国科协青年科技人才培育工程博士生专项计划、中国移动研究院\"超星计划\"。",

    sec_education: "教育背景",
    edu_tju_school: "天津大学（Tianjin University），天津",
    edu_tju_detail: "电子信息博士，智能与计算学部。博士导师（联合指导）：<a href=\"https://cic.tju.edu.cn/faculty/wanglongbiao/wang.html\" target=\"_blank\">王龙标 教授 (TJU)</a>、党建武 教授 (TJU)、<a href=\"https://personal.ntu.edu.sg/aseschng/speechLab_intro.html\" target=\"_blank\">Eng Siong Chng 教授 (NTU)</a>、<a href=\"https://chenxie95.github.io/en\" target=\"_blank\">陈谐 副教授 (SJTU)</a>。荣誉：中国科协青年科技人才培育工程·博士生专项计划；一等学业奖学金。",
    edu_ntu_school: "南洋理工大学（NTU），新加坡 · 访学交流",
    edu_ntu_detail: "计算与数据科学学院（CCDS），访问博士生（联合指导，不授予学位）。联合指导教师：<a href=\"https://personal.ntu.edu.sg/aseschng/speechLab_intro.html\" target=\"_blank\">Eng Siong Chng 教授</a>。由国家公派留学奖学金资助。",
    edu_sjtu_school: "上海交通大学（SJTU）· 联培研究",
    edu_sjtu_detail: "跨媒体语言智能实验室（X-LANCE），联培研究（联合指导，不授予学位）。联合指导教师：<a href=\"https://chenxie95.github.io/en\" target=\"_blank\">陈谐 副教授</a>。方向：语音自监督预训练、语音合成、鲁棒语音识别、音频理解生成统一。",
    edu_bjtu_school: "北京交通大学（BJTU），北京",
    edu_bjtu_detail: "信息与通信工程硕士，计算机与信息技术学院，导师：朱维彬 教授；方向：语音增强、语音识别、自监督学习；一等学业奖学金；校级优秀毕业论文。",
    edu_nuc_school: "中北大学（NUC），太原",
    edu_nuc_detail: "物联网工程学士，大数据学院；专业排名 1/137；AI+移动互联校级创新实验室负责人（110+ 人规模）；多项计算机赛事国家一等奖。本科实验室开源仓库：<a href=\"https://github.com/android-nuc\" target=\"_blank\">github.com/android-nuc</a>",

    sec_experience: "科研交流与实习",
    exp_tencent_org: "腾讯集团 · 语音大模型算法中心",
    exp_tencent_detail: "实习生，方向：音频理解生成统一相关模型研究",
    exp_huawei_org: "华为 2012 实验室",
    exp_huawei_detail: "校企合作项目学生负责人；方向：细粒度情感可控端到端对话模型研究",
    exp_huiyan_org: "慧言科技有限公司",
    exp_huiyan_detail: "语音合成算法实习生；主导中英双语语音合成系统的研发：数据爬虫、海量数据预处理（15 万小时）、多语言语音合成系统的搭建和训练",
    exp_msra_org: "微软亚洲研究院（MSRA）· 自然语言计算组",
    exp_msra_detail: "语音算法实习生；探索理解生成统一的语音大模型（语音识别、机器翻译、语音到文本翻译、语音合成）",
    exp_cmri_org: "中国移动研究院 · 人工智能与智慧运营部",
    exp_cmri_detail: "语音算法实习生；负责流式语音增强与鲁棒语音识别系统的研发，成功评选\"超星计划\"（实习生人才计划，设立以来首例）",

    sec_publications: "论文成果",
    pub_author_filter: "作者：",
    pub_filter_all: "全部",
    pub_filter_first: "仅一作",
    pub_type_filter: "类型：",
    pub_type_all: "全部",
    pub_type_journal: "期刊",
    pub_type_conference: "会议",
    pub_type_preprint: "预印本",
    pub_note: "论文按发表/收录年份倒序展示；标题前的 ★ 表示王天锐为第一作者；点击标签可筛选。",

    sec_projects: "开源项目参与",
    proj_slamllm: "X-LANCE 团队开源的大型语音语言模型框架（SLAM-LLM），用于构建和训练语音 LLM。",
    proj_wescon: "零样本 TTS 中的词级情感与语速控制框架；多轮推理 + 自训练 + 动态情感注意力偏置。（NeurIPS 2025 Spotlight）",
    proj_progre: "渐进式残差提取的自监督语音预训练；逐步解耦音高 / 说话人 / 内容信息，性能超越 WavLM。（TASLP）",
    proj_hgcn: "谐波门控补偿语音增强网络；ICASSP 2022 DNS Challenge 第 5 名；高分辨率谐波积分谱。",
    proj_ruise: "通用语音增强即插即用的精炼底层信息（RUI）框架开源实现。",
    proj_nutrition: "本科国家一等奖作品\"营养大师 / Nutrition Master\"：基于机器学习的膳食管家。",
    proj_nuc_title: "本科实验室（中北大学）",
    proj_nuc: "AI+移动互联校级创新实验室开源组织，本科期间负责并组织。",

    sec_awards: "专业竞赛 & 获奖",
    award_limmits: "ICASSP 2025 LIMMITS'25 Challenge 低资源语音合成比赛 第 2 名（双赛道均第 2）",
    award_icagc: "ISCSLP 2024 ICAGC Challenge 中文情感可控语音合成比赛 第 2 名",
    award_neurodns: "Inter Neuromorphic DNS Challenge 第 2 名",
    award_dns22: "ICASSP 2022 Deep Noise Suppression Challenge 第 5 名",
    award_chaoxing: "入选中国移动研究院\"超星计划\"（设立以来首例）",
    award_kaggle: "Kaggle 房价预测赛 全球前 10%（本科）",
    award_huabei: "华北五省计算机应用大赛 国家一等奖（\"营养大师\"）",
    award_internetplus: "\"互联网+\"大学生创新创业大赛 国家铜奖（\"吾乡\"）",
    award_compdesign: "全国计算机设计大赛 国家一等奖（\"识菜帮\"）",
    award_chuangqingchun: "\"创青春\"浙大双创杯全国大学生创业大赛 省级金奖",
    award_google_android: "全国大学生 Google Android 挑战赛 优秀奖",

    sec_contact: "联系方式",

    /* publications dynamic */
    pub_first_author_tag: "一作",
    venue_label: "发表/收录："
  },

  en: {
    logo: "Tianrui Wang · 王天锐",
    nav_about: "About",
    nav_education: "Education",
    nav_experience: "Experience",
    nav_publications: "Publications",
    nav_projects: "Projects",
    nav_awards: "Awards",
    nav_contact: "Contact",

    hero_name: "Tianrui Wang · 王天锐",
    hero_title: "Ph.D. Student at Tianjin University · Visiting at NTU · Speech Synthesis · Unified Speech Understanding & Generation",
    hero_bio: "My research focuses on fine-grained emotional control in speech synthesis, LLM-based controllable TTS, and unified large models for speech understanding & generation. I have done research/internships at Microsoft Research Asia, China Mobile Research Institute, Huiyan Tech, Huawei, and Tencent.",
    hero_cv: "📄 Download Full CV (PDF)",

    sec_about: "About Me",
    about_p1: "I am Tianrui Wang, a Ph.D. candidate in Electronic Information at the <strong>College of Intelligence and Computing, Tianjin University</strong> (the degree-granting institution). My Ph.D. is <strong>jointly supervised</strong> by four advisors: <a href=\"https://cic.tju.edu.cn/faculty/wanglongbiao/wang.html\" target=\"_blank\">Prof. Longbiao Wang (TJU)</a>, Prof. Jianwu Dang (TJU), <a href=\"https://personal.ntu.edu.sg/aseschng/speechLab_intro.html\" target=\"_blank\">Prof. Eng Siong Chng (NTU)</a>, and <a href=\"https://chenxie95.github.io/en\" target=\"_blank\">Assoc. Prof. Xie Chen (SJTU)</a>. Supported by the China Scholarship Council, I am currently a visiting Ph.D. student at <strong>Nanyang Technological University (NTU)</strong>; I have also been collaborating long-term with the X-LANCE Lab at <strong>Shanghai Jiao Tong University</strong>.",
    about_p2: "My research covers speech synthesis (especially fine-grained emotion & prosody control), self-supervised speech pre-training, unified speech understanding/generation, speech enhancement, and robust speech recognition. Representative works include ProgRE, VioLA, HGCN, Harmonic Attention, WeScon (Word-level Emotion Control, NeurIPS 2025 Spotlight), and CEAEval (Expressive Appropriateness Evaluation, ACL 2026 Oral / Top 5%).",
    about_p3: "I have done research and internships at Microsoft Research Asia (Natural Language Computing Group), China Mobile Research Institute (AI & Smart Operations), Huiyan Tech, Huawei 2012 Labs, and Tencent (Speech LLM Algorithm Center). I am a recipient of the CAST Young Talent Cultivation Program (Ph.D. Track) and the China Mobile \"Chaoxing\" Internship Program (the first awardee since its founding).",

    sec_education: "Education",
    edu_tju_school: "Tianjin University (TJU), Tianjin, China",
    edu_tju_detail: "Ph.D. in Electronic Information, College of Intelligence and Computing. Jointly supervised by <a href=\"https://cic.tju.edu.cn/faculty/wanglongbiao/wang.html\" target=\"_blank\">Prof. Longbiao Wang (TJU)</a>, Prof. Jianwu Dang (TJU), <a href=\"https://personal.ntu.edu.sg/aseschng/speechLab_intro.html\" target=\"_blank\">Prof. Eng Siong Chng (NTU)</a>, and <a href=\"https://chenxie95.github.io/en\" target=\"_blank\">Assoc. Prof. Xie Chen (SJTU)</a>. Honors: CAST Young Talent Cultivation Program (Ph.D. Track); First-class Academic Scholarship.",
    edu_ntu_school: "Nanyang Technological University (NTU), Singapore · Visiting",
    edu_ntu_detail: "Visiting Ph.D. student at the College of Computing and Data Science (CCDS). Co-supervisor: <a href=\"https://personal.ntu.edu.sg/aseschng/speechLab_intro.html\" target=\"_blank\">Prof. Eng Siong Chng</a>. Research exchange only — no degree conferred by NTU. Funded by the China Scholarship Council.",
    edu_sjtu_school: "Shanghai Jiao Tong University (SJTU) · Joint Research",
    edu_sjtu_detail: "Joint research at the X-LANCE Lab (co-supervision; no SJTU degree). Co-supervisor: <a href=\"https://chenxie95.github.io/en\" target=\"_blank\">Assoc. Prof. Xie Chen</a>. Topics: SSL speech pre-training, TTS, robust ASR, unified audio understanding & generation.",
    edu_bjtu_school: "Beijing Jiaotong University (BJTU), Beijing, China",
    edu_bjtu_detail: "M.Eng. in Information & Communication Engineering, School of Computer & Information Tech. Advisor: Prof. Weibin Zhu. Topics: speech enhancement, ASR, SSL. First-class Scholarship; Outstanding M.S. Thesis Award.",
    edu_nuc_school: "North University of China (NUC), Taiyuan, China",
    edu_nuc_detail: "B.Eng. in Internet of Things, School of Big Data. GPA Rank 1/137. Director of the AI+Mobile-Internet Innovation Lab (110+ members). Multiple national-level competition awards. Lab GitHub: <a href=\"https://github.com/android-nuc\" target=\"_blank\">github.com/android-nuc</a>",

    sec_experience: "Experience",
    exp_tencent_org: "Tencent Inc. · Speech LLM Algorithm Center",
    exp_tencent_detail: "Research Intern. Topic: unified models for audio understanding and generation.",
    exp_huawei_org: "Huawei 2012 Labs",
    exp_huawei_detail: "Student Lead, university-industry collaboration project. Topic: fine-grained emotion-controllable end-to-end conversational models.",
    exp_huiyan_org: "Huiyan Tech",
    exp_huiyan_detail: "TTS Algorithm Intern. Led the development of a Chinese-English bilingual TTS system: data crawling, large-scale preprocessing (~150K hours), and multi-lingual TTS training.",
    exp_msra_org: "Microsoft Research Asia (MSRA) · Natural Language Computing Group",
    exp_msra_detail: "Speech Algorithm Intern. Researched unified speech LLMs covering ASR, MT, S2T translation, and TTS.",
    exp_cmri_org: "China Mobile Research Institute · AI & Smart Operations Department",
    exp_cmri_detail: "Speech Algorithm Intern. Built streaming speech enhancement and robust ASR systems. Selected for the \"Chaoxing\" Internship Program (the first awardee since its founding).",

    sec_publications: "Publications",
    pub_author_filter: "Author:",
    pub_filter_all: "All",
    pub_filter_first: "First Author Only",
    pub_type_filter: "Type:",
    pub_type_all: "All",
    pub_type_journal: "Journal",
    pub_type_conference: "Conference",
    pub_type_preprint: "Preprint",
    pub_note: "Publications are listed in reverse chronological order. Items prefixed with ★ are first-authored by Tianrui Wang. Use the chips above to filter.",

    sec_projects: "Open-Source Project Contributions",
    proj_slamllm: "SLAM-LLM — an open-source large speech-language model framework from X-LANCE for building and training speech LLMs.",
    proj_wescon: "Word-level emotion & speed control framework for zero-shot TTS; multi-round inference + self-training + dynamic emotional attention bias. (NeurIPS 2025 Spotlight)",
    proj_progre: "Progressive Residual Extraction for SSL speech pre-training; gradually disentangles pitch / speaker / content, surpassing WavLM. (TASLP)",
    proj_hgcn: "Harmonic Gated Compensation Network for speech enhancement; 5th place at ICASSP 2022 DNS Challenge; high-resolution harmonic integral spectrum.",
    proj_ruise: "Open-source implementation of a Refining Underlying Information (RUI) plug-and-play framework for speech enhancement.",
    proj_nutrition: "\"Nutrition Master\" — undergraduate national-first-prize project; an ML-powered dietary assistant.",
    proj_nuc_title: "Undergraduate Lab (North University of China)",
    proj_nuc: "AI+Mobile-Internet Innovation Lab open-source organization; led during undergraduate study.",

    sec_awards: "Competitions & Awards",
    award_limmits: "ICASSP 2025 LIMMITS'25 Challenge (Low-resource TTS): 2nd place on both tracks",
    award_icagc: "ISCSLP 2024 ICAGC Challenge (Chinese Emotional Controllable TTS): 2nd place",
    award_neurodns: "Inter Neuromorphic DNS Challenge: 2nd place",
    award_dns22: "ICASSP 2022 Deep Noise Suppression Challenge: 5th place",
    award_chaoxing: "Selected for the \"Chaoxing\" Internship Program at China Mobile Research Institute (the first awardee since its founding)",
    award_kaggle: "Kaggle House Price Prediction: Top 10% globally (during undergraduate)",
    award_huabei: "North China Five-Province Computer Application Competition: National First Prize (\"Nutrition Master\")",
    award_internetplus: "\"Internet+\" Innovation & Entrepreneurship Competition: National Bronze Award (\"Wuxiang\")",
    award_compdesign: "National Computer Design Contest: National First Prize (\"ShiCaiBang\")",
    award_chuangqingchun: "\"Chuangqingchun\" Zhejiang Univ. Cup Entrepreneurship Contest: Provincial Gold Award",
    award_google_android: "National Google Android Challenge for College Students: Honorable Mention",

    sec_contact: "Contact",

    /* publications dynamic */
    pub_first_author_tag: "1st Author",
    venue_label: "Venue: "
  }
};

/* ----------- 2) 当前语言 + 应用语言 ----------- */
function getInitialLang() {
  // 默认英文；用户手动切换过会把选择保存到 localStorage，之后优先使用用户选择。
  // 如果想默认随浏览器语言，把下面的 return 'en' 改为原先的浏览器检测逻辑即可。
  const saved = localStorage.getItem('site_lang');
  if (saved === 'zh' || saved === 'en') return saved;
  return 'en';
}

let CURRENT_LANG = getInitialLang();

function applyLang(lang) {
  CURRENT_LANG = lang;
  localStorage.setItem('site_lang', lang);
  document.documentElement.setAttribute('lang', lang === 'zh' ? 'zh-CN' : 'en');

  // 翻译所有 data-i18n-key
  // 注：字典值中可能包含 HTML（如导师主页链接），因此统一使用 innerHTML；
  //    字典中的所有字符串由我们自己维护，不存在 XSS 风险。
  document.querySelectorAll('[data-i18n-key]').forEach(el => {
    const key = el.getAttribute('data-i18n-key');
    const dict = I18N[lang] || {};
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  // 切换按钮显示对侧语言
  const btn = document.getElementById('lang-toggle');
  if (btn) btn.textContent = (lang === 'zh') ? 'EN' : '中文';

  // 重新渲染论文（venue 是中英文不同字段）
  renderPublications();
}

/* ----------- 3) 论文渲染与筛选 ----------- */
const filterState = {
  author: 'all',  // 'all' | 'first'
  type:   'all'   // 'all' | 'journal' | 'conference' | 'preprint'
};

function getTypeBadgeText(t, lang) {
  const dict = I18N[lang] || {};
  if (t === 'journal')    return dict.pub_type_journal    || 'Journal';
  if (t === 'conference') return dict.pub_type_conference || 'Conference';
  if (t === 'preprint')   return dict.pub_type_preprint   || 'Preprint';
  return t;
}

/* 每篇论文都应该能点进去："标题" = 论文正式页面；
 * 顶级链接优先级：paper_url (手填) > doi > arxiv > Scholar 搜索（兜底）。
 * 额外按钮：
 *   - Abstract : 若 p.abstract 存在则展开/收起摘要
 *   - Demo     : 若 p.demo_url 存在
 *   - Code     : 若 p.code_url 存在
 *   - arXiv    : 若 p.arxiv 存在，且 primaryUrl 不是 arxiv
 *   - DOI      : 若 p.doi   存在，且 primaryUrl 不是 doi
 */
function getPrimaryUrl(p) {
  if (p.paper_url) return p.paper_url;
  if (p.doi)       return 'https://doi.org/' + p.doi;
  if (p.arxiv)     return 'https://arxiv.org/abs/' + p.arxiv;
  // 兜底：Scholar 搜索
  return 'https://scholar.google.com/scholar?q=' + encodeURIComponent(p.title || '');
}

function buildPaperButtons(p, primaryUrl) {
  const btns = [];

  if (p.demo_url) {
    btns.push({ label: 'Demo', url: p.demo_url });
  }
  if (p.code_url) {
    btns.push({ label: 'Code', url: p.code_url });
  }
  // arXiv
  if (p.arxiv) {
    const arxivUrl = 'https://arxiv.org/abs/' + p.arxiv;
    if (arxivUrl !== primaryUrl) btns.push({ label: 'arXiv', url: arxivUrl });
  }
  // DOI
  if (p.doi) {
    const doiUrl = 'https://doi.org/' + p.doi;
    if (doiUrl !== primaryUrl) btns.push({ label: 'DOI', url: doiUrl });
  }
  return btns;
}

function renderPublications() {
  const root = document.getElementById('publications-list');
  if (!root || !window.PUBLICATIONS) return;

  // 筛选
  let pubs = window.PUBLICATIONS.slice();
  if (filterState.author === 'first') pubs = pubs.filter(p => p.first);
  if (filterState.type   !== 'all'  ) pubs = pubs.filter(p => p.type === filterState.type);

  // 按年份分组
  const byYear = {};
  pubs.forEach(p => {
    const y = p.year || 'Unknown';
    if (!byYear[y]) byYear[y] = [];
    byYear[y].push(p);
  });
  const years = Object.keys(byYear).sort((a,b) => Number(b) - Number(a));

  if (pubs.length === 0) {
    root.innerHTML = `<p style="color:#888;padding:24px 0;">${
      CURRENT_LANG === 'zh' ? '没有符合条件的论文。' : 'No publications match the current filter.'
    }</p>`;
    return;
  }

  const lang = CURRENT_LANG;
  const dict = I18N[lang] || {};
  const labelAbstract    = (lang === 'zh') ? '摘要' : 'Abstract';
  const labelNoAbstract  = (lang === 'zh') ? '（未录入摘要；点击"论文链接"查看）' : '(Abstract not available; see paper link)';

  let html = '';
  let idx = 0;
  years.forEach(y => {
    html += `<div class="pub-year-group"><h3>${y}</h3>`;
    byYear[y].forEach(p => {
      const venue = (lang === 'zh' ? p.venue_zh : p.venue_en) || p.venue_en || '';
      const star = p.first ? '<span class="pub-star" title="First author">★</span>' : '';
      const badges = [];
      badges.push(`<span class="pub-badge badge-${p.type}">${getTypeBadgeText(p.type, lang)}</span>`);
      if (p.first)     badges.push(`<span class="pub-badge badge-highlight">${dict.pub_first_author_tag}</span>`);
      if (p.highlight) badges.push(`<span class="pub-badge badge-highlight">${p.highlight}</span>`);

      const primaryUrl = getPrimaryUrl(p);
      const externals  = buildPaperButtons(p, primaryUrl);

      // 标题链接 -> 论文主页
      const titleHtml = `<a class="pub-title-link" href="${primaryUrl}" target="_blank" rel="noopener">${star}${p.title}</a>`;

      // Abstract 按钮（即使无摘要也展示一个禁用态，方便视觉一致）
      const pubKey = 'pub-' + (idx++);
      const hasAbs = !!(p.abstract && p.abstract.trim());
      const abstractBtn = hasAbs
        ? `<button class="pub-linkbtn pub-abstract-btn" data-target="${pubKey}">${labelAbstract} ▾</button>`
        : `<button class="pub-linkbtn pub-abstract-btn is-disabled" title="${labelNoAbstract}" disabled>${labelAbstract}</button>`;

      // 外部链接按钮
      const extHtml = externals.map(l =>
        `<a class="pub-linkbtn" href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`
      ).join('');

      // 摘要区（默认折叠）
      const absHtml = hasAbs
        ? `<div class="pub-abstract" id="${pubKey}" hidden>${p.abstract}</div>`
        : '';

      html += `
        <div class="pub-item${p.first ? ' is-first' : ''}">
          <div class="pub-title">${titleHtml}</div>
          <div class="pub-authors">${p.authors}</div>
          <div class="pub-venue">${venue}</div>
          <div class="pub-badges">${badges.join('')}</div>
          <div class="pub-links">${abstractBtn}${extHtml}</div>
          ${absHtml}
        </div>`;
    });
    html += `</div>`;
  });
  root.innerHTML = html;

  // 绑定 Abstract 展开/收起
  root.querySelectorAll('.pub-abstract-btn:not(.is-disabled)').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-target');
      const box = document.getElementById(id);
      if (!box) return;
      const visible = !box.hasAttribute('hidden');
      if (visible) {
        box.setAttribute('hidden', '');
        btn.innerHTML = btn.innerHTML.replace('▴', '▾');
      } else {
        box.removeAttribute('hidden');
        btn.innerHTML = btn.innerHTML.replace('▾', '▴');
      }
    });
  });
}

/* ----------- 4) 事件绑定 ----------- */
document.addEventListener('DOMContentLoaded', () => {
  // a) 语言切换
  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      applyLang(CURRENT_LANG === 'zh' ? 'en' : 'zh');
    });
  }
  applyLang(CURRENT_LANG);

  // b) 论文筛选
  document.querySelectorAll('.chip[data-author]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.chip[data-author]').forEach(b => b.classList.remove('chip-active'));
      btn.classList.add('chip-active');
      filterState.author = btn.getAttribute('data-author');
      renderPublications();
    });
  });
  document.querySelectorAll('.chip[data-type]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.chip[data-type]').forEach(b => b.classList.remove('chip-active'));
      btn.classList.add('chip-active');
      filterState.type = btn.getAttribute('data-type');
      renderPublications();
    });
  });

  // c) 当前年份
  const yearSpan = document.getElementById('year');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});
