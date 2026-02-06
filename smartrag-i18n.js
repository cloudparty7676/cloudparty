const i18n = {
  "zh-Hant": {
    meta: {
      title: "SmartRAG | 私有文件智慧搜尋",
      desc: "RAG 技術打造的智慧文件搜尋系統，支援多語言且完全私有化部署。"
    },
    nav: {
      homeAria: "SmartRAG 首頁",
      aria: "主要導覽",
      mobileAria: "行動導覽",
      langAria: "語言切換",
      menuAria: "開啟選單",
      menu: "選單",
      subtitle: "RAG-powered knowledge",
      advantage: "優勢",
      why: "為什麼",
      contact: "聯絡"
    },
    hero: {
      pill: "智慧文件搜尋",
      title: "智慧文件搜尋系統<br/>讓您的私有文件管理更高效",
      lead: {
        line1: "是否厭倦在海量文件中翻找資料，導致錯誤頻發？",
        line2: "我們的私有 RAG 引擎以自然語言回答，並將所有資料保留在企業邊界內。"
      },
      actions: {
        advantage: "探索優勢",
        contact: "立即試用"
      },
      cardAria: "RAG 系統摘要卡片",
      cardTag: "RAG 實戰",
      cardCopy: "即時檢索、私有部署與洞察生成，適用法律、金融與醫療團隊。",
      cardList1: "支援多語言文件"
    },
    advantage: {
      title: "RAG 技術的核心優勢",
      desc: "結合檢索與生成的智慧搜尋，從私有文件中找出答案、總結洞見，並以 AI 輔助決策。",
      card1: {
        title: "即時精準檢索",
        desc: "輸入自然語言問題，系統即刻從所有私有文件中找出相關內容並生成摘要，節省 80% 搜尋時間。"
      },
      card2: {
        title: "資料完全私有",
        desc: "部署於內部或私有雲端，RAG 僅在企業邊界內運作，符合 GDPR 與其他隱私法規。"
      },
      card3: {
        title: "智能生成洞見",
        desc: "自動摘要合約條款、提煉報告重點或生成策略建議，協助團隊迅速決策。"
      },
      card4: {
        title: "成本效益高",
        desc: "一次部署後長期降低人力成本，適合從中小企業到大型產業的誰都能用。"
      }
    },
    why: {
      title: "為什麼選擇我們？",
      desc: "將您的團隊從文件堆中解放出來，專注在核心業務，進一步提升創新與成長速度。",
      bullet1: "採用類似系統，生產力提升 30% 以上。",
      bullet2: "提供 AI 驅動的洞見，讓決策更有依據。",
      bullet3: "多語言支援讓跨國團隊能即時協作。"
    },
    cta: {
      title: "立即行動",
      desc: "聯絡我們，讓智慧文件搜尋成為您公司的競爭優勢，感受 RAG 帶來的轉變。",
      contact: "聯絡資訊：email@yourcompany.com | 電話：+886-2-12345678",
      action: "聯絡我們",
      back: "了解優勢"
    },
    footer: {
      tagline: "RAG 智慧搜尋 · 私有資料 · AI 洞見",
      copyright: "© <span id=\"y\"></span> SmartRAG. Powered by CloudParty."
    }
  },
  en: {
    meta: {
      title: "SmartRAG | RAG-powered private search",
      desc: "SmartRAG combines retrieval-augmented generation with private deployment to power intelligent document search."
    },
    nav: {
      homeAria: "SmartRAG home",
      aria: "Primary navigation",
      mobileAria: "Mobile navigation",
      langAria: "Language switch",
      menuAria: "Open menu",
      menu: "Menu",
      subtitle: "RAG-powered knowledge",
      advantage: "Advantages",
      why: "Why us",
      contact: "Contact"
    },
    hero: {
      pill: "Intelligent Document Search",
      title: "Intelligent Document Search System<br/>Make private knowledge faster",
      lead: {
        line1: "Are you tired of hunting through piles of files and making mistakes?",
        line2: "Our private RAG engine answers natural language questions while keeping every document inside your perimeter."
      },
      actions: {
        advantage: "See advantages",
        contact: "Start trial"
      },
      cardAria: "RAG summary card",
      cardTag: "RAG in practice",
      cardCopy: "Instant retrieval, private deployment, and insight generation for legal, finance, and healthcare teams.",
      cardList1: "Multi-language documents supported"
    },
    advantage: {
      title: "Core RAG advantages",
      desc: "Retrieval-augmented generation that finds answers, summarizes insights, and helps teams act faster.",
      card1: {
        title: "Instant precise retrieval",
        desc: "Ask in natural language and get snippets from your private corpus that cut search time by 80%."
      },
      card2: {
        title: "Data stay private",
        desc: "Runs inside your network or private cloud so nothing leaks to third parties and GDPR stays satisfied."
      },
      card3: {
        title: "Insightful generation",
        desc: "Automatically summarize contracts, extract clauses, or surface ideas from reports."
      },
      card4: {
        title: "Cost-effective",
        desc: "One-time deployment lowers headcount cost and scales from SMBs to global enterprises."
      }
    },
    why: {
      title: "Why choose us?",
      desc: "Free teams from searching so they focus on core work and drive faster innovation.",
      bullet1: "Similar systems and report 30%+ productivity boosts.",
      bullet2: "AI-powered insights give decision makers clear context.",
      bullet3: "Multi-language support keeps global teams in sync."
    },
    cta: {
      title: "Act now",
      desc: "Contact us and let intelligent document search become your competitive advantage.",
      contact: "Contact info: email@yourcompany.com | Phone: +886-2-12345678",
      action: "Contact us",
      back: "Back to advantages"
    },
    footer: {
      tagline: "RAG search · Private data · AI insights",
      copyright: "© <span id=\"y\"></span> SmartRAG. Powered by CloudParty."
    }
  }
};

const setText = (el, value) => {
  if (el.dataset.i18nHtml) {
    el.innerHTML = value;
  } else {
    el.textContent = value;
  }
};

const resolveLang = () => {
  const stored = localStorage.getItem("lang");
  if (stored && i18n[stored]) return stored;
  const navLang = (navigator.language || "zh-Hant").toLowerCase();
  if (navLang.startsWith("zh")) return "zh-Hant";
  return "en";
};

const applyLanguage = (lang) => {
  const dict = i18n[lang] || i18n["zh-Hant"];

  document.documentElement.lang = lang === "en" ? "en" : "zh-Hant";
  if (dict.meta && dict.meta.title) document.title = dict.meta.title;
  const metaDesc = document.getElementById("meta-desc");
  if (metaDesc && dict.meta && dict.meta.desc) metaDesc.setAttribute("content", dict.meta.desc);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const value = key.split(".").reduce((acc, cur) => (acc ? acc[cur] : null), dict);
    if (value !== null && value !== undefined) setText(el, value);
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.dataset.i18nHtml;
    const value = key.split(".").reduce((acc, cur) => (acc ? acc[cur] : null), dict);
    if (value !== null && value !== undefined) setText(el, value);
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    const mapping = el.dataset.i18nAttr.split(",").map((pair) => pair.trim());
    mapping.forEach((pair) => {
      const parts = pair.split(":").map((v) => v.trim());
      const attr = parts[0];
      const key = parts[1];
      if (!attr || !key) return;
      const value = key.split(".").reduce((acc, cur) => (acc ? acc[cur] : null), dict);
      if (value !== null && value !== undefined) el.setAttribute(attr, value);
    });
  });

  document.querySelectorAll(".langBtn").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.lang === lang);
  });

  localStorage.setItem("lang", lang);
  document.dispatchEvent(new CustomEvent("language:change", { detail: { lang } }));
};

document.querySelectorAll(".langBtn").forEach((btn) => {
  btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
});

applyLanguage(resolveLang());
