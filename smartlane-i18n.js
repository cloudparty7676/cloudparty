const i18n = {
  "zh-Hant": {
    meta: {
      title: "SmartLane｜左右速速看 即時車流分析與車道建議",
      desc: "SmartLane｜左右速速看 即時車流分析與車道建議。"
    },
    nav: {
      homeAria: "SmartLane 首頁",
      aria: "主要導覽",
      mobileAria: "手機導覽",
      langAria: "語言切換",
      menuAria: "開啟選單",
      menu: "選單 ☰",
      subtitle: "Realtime Traffic Insight",
      features: "功能",
      how: "怎麼運作",
      usecases: "適用場景",
      api: "API 串接",
      contact: "聯絡"
    },
    hero: {
      pill: "即時車流分析｜車道建議｜告警與報表",
      title: "用影像即時看懂車流<br/>把塞車變成可預測",
      lead: {
        line1: "SmartLane 以雲端即時分析道路影像，輸出「速度 / 密度 / 車流量 / 壅塞趨勢」等指標，",
        line2: "並提供車道級別的建議與事件告警，支援 Dashboard 與 API 串接。"
      },
      actions: {
        features: "看功能",
        how: "看架構"
      },
      cardAria: "即時狀態卡（範例）",
      cardTag: "Live Status（示意）",
      cardRoute: "目前路段：示範路段 A",
      cardUpdate: "更新：",
      cardStatusLabel: "狀態：",
      cardScoreLabel: "壅塞指數（0～100）",
      cardSpeedLabel: "平均速度：",
      cardSpeedUnit: "km/h",
      cardVolumeLabel: "車流量：",
      cardVolumeUnit: "/h",
      cardQueueLabel: "預估回堵：",
      cardLaneTitle: "車道建議（示意）",
      cardLane1: "Lane 1",
      cardLane2: "Lane 2",
      cardLane3: "Lane 3",
      cardLaneKeep: "建議：保持",
      cardLanePrefer: "建議：優先",
      cardLaneAvoid: "建議：避免",
      cardNote: "※ 以上為 UI 示意，可改為你的真實路段、攝影機、指標與建議邏輯。",
      status: {
        good: "順暢",
        slow: "偏慢",
        bad: "壅塞"
      },
      queue: {
        short: "短",
        medium: "中",
        long: "長"
      }
    },
    features: {
      title: "核心功能",
      desc: "以「車道級」即時指標為中心，搭配預測與告警，讓使用者在最短時間做出最佳路線/調度決策。",
      card1: {
        tag: "Realtime",
        title: "即時車流指標",
        desc: "速度、密度、車流量、壅塞指數與趨勢，支援多路段/多攝影機。",
        list1: "秒級更新（可配置）",
        list2: "歷史回放與趨勢",
        list3: "異常波動偵測"
      },
      card2: {
        tag: "Recommendation",
        title: "車道建議",
        desc: "以車道層級計算通行效率，輸出「優先 / 保持 / 避免」與原因。",
        list1: "車道級別建議",
        list2: "路段/時段最佳化",
        list3: "可串接導引顯示"
      },
      card3: {
        tag: "Alert",
        title: "事件告警",
        desc: "事故、回堵、突發壅塞等事件即時推播到群組/系統。",
        list1: "門檻與規則可調",
        list2: "Webhook / Email / IM",
        list3: "告警追蹤與回報"
      }
    },
    how: {
      title: "怎麼運作",
      desc: "從影像到指標到決策：邊緣或雲端皆可，並提供 API 與 Dashboard 快速落地。",
      card1: {
        tag: "Pipeline",
        title: "影像 → 偵測 → 指標 → 告警",
        desc: "把攝影機影像轉為可用的車流資料與事件，並持續監控品質與效能。",
        list1: "車輛偵測 / 追蹤 / 計數",
        list2: "速度與密度估計",
        list3: "壅塞指數與趨勢"
      },
      card2: {
        tag: "Deployment",
        title: "雲端原生架構",
        desc: "可隨需求擴充：更多攝影機、更多路段、更長歷史資料與更高併發。",
        list1: "多租戶與權限控管",
        list2: "可觀測性（監控/日誌）",
        list3: "高可用與自動擴縮"
      }
    },
    usecases: {
      title: "適用場景",
      desc: "交通管理、隧道/快速道路、活動人潮疏運、施工與車道管制…只要有影像就能導入。",
      card1: {
        tag: "Gov / ITS",
        title: "交通管理與疏運",
        desc: "用即時指標與告警，縮短反應時間，提升通行效率。"
      },
      card2: {
        tag: "Tunnel",
        title: "隧道與瓶頸路段",
        desc: "車道級建議與趨勢預測，避免回堵擴散。"
      },
      card3: {
        tag: "Enterprise",
        title: "園區/停車/物流",
        desc: "把出入口車流變成可量化 KPI，支援調度與規劃。"
      }
    },
    cta: {
      title: "想把路況做到「即時可用」？",
      desc: "讓我們用 Demo 與 PoC 先把一個代表路段跑起來，再逐步擴到更多路段與攝影機。",
      note: "（此處可改成表單、Email、Line、或聯絡資訊）",
      demo: "預約 Demo",
      back: "回到功能"
    },
    footer: {
      copyright: "© <span id=\"y\"></span> SmartLane. Powered by CloudParty.",
      tagline: "Realtime Traffic Analytics · Lane Recommendation · Alerts · API"
    }
  },
  en: {
    meta: {
      title: "SmartLane | Real-time traffic analytics",
      desc: "SmartLane provides lane-level traffic metrics, lane guidance, alerts, and API integration."
    },
    nav: {
      homeAria: "SmartLane home",
      aria: "Primary navigation",
      mobileAria: "Mobile navigation",
      langAria: "Language switch",
      menuAria: "Open menu",
      menu: "Menu ☰",
      subtitle: "Realtime Traffic Insight",
      features: "Features",
      how: "How it works",
      usecases: "Use cases",
      api: "API",
      contact: "Contact"
    },
    hero: {
      pill: "Real-time traffic analytics | Lane guidance | Alerts & reports",
      title: "Understand traffic in real time<br/>Make congestion predictable",
      lead: {
        line1: "SmartLane analyzes road video in the cloud and outputs speed, density, volume, and congestion trends, ",
        line2: "with lane-level guidance and event alerts for dashboards and APIs."
      },
      actions: {
        features: "See features",
        how: "See architecture"
      },
      cardAria: "Live status card (sample)",
      cardTag: "Live Status (demo)",
      cardRoute: "Current segment: Demo Segment A",
      cardUpdate: "Updated: ",
      cardStatusLabel: "Status: ",
      cardScoreLabel: "Congestion score (0–100)",
      cardSpeedLabel: "Avg speed: ",
      cardSpeedUnit: "km/h",
      cardVolumeLabel: "Volume: ",
      cardVolumeUnit: "/h",
      cardQueueLabel: "Estimated queue: ",
      cardLaneTitle: "Lane guidance (demo)",
      cardLane1: "Lane 1",
      cardLane2: "Lane 2",
      cardLane3: "Lane 3",
      cardLaneKeep: "Advice: keep",
      cardLanePrefer: "Advice: prefer",
      cardLaneAvoid: "Advice: avoid",
      cardNote: "* Demo UI only. Replace with your real segments, cameras, metrics, and guidance logic.",
      status: {
        good: "Clear",
        slow: "Slowing",
        bad: "Congested"
      },
      queue: {
        short: "Short",
        medium: "Medium",
        long: "Long"
      }
    },
    features: {
      title: "Core features",
      desc: "Centered on lane-level metrics with predictions and alerts so users can decide faster.",
      card1: {
        tag: "Realtime",
        title: "Real-time traffic metrics",
        desc: "Speed, density, volume, congestion score, and trends across multiple segments and cameras.",
        list1: "Second-level updates (configurable)",
        list2: "History replay and trends",
        list3: "Anomaly detection"
      },
      card2: {
        tag: "Recommendation",
        title: "Lane guidance",
        desc: "Compute lane efficiency and output prefer/keep/avoid with reasons.",
        list1: "Lane-level recommendations",
        list2: "Segment / time optimization",
        list3: "Integrate with guidance displays"
      },
      card3: {
        tag: "Alert",
        title: "Event alerts",
        desc: "Push incidents, backlogs, and sudden congestion to your groups and systems.",
        list1: "Adjustable thresholds and rules",
        list2: "Webhook / Email / IM",
        list3: "Alert tracking and feedback"
      }
    },
    how: {
      title: "How it works",
      desc: "From video to metrics to decisions—edge or cloud, plus APIs and dashboards.",
      card1: {
        tag: "Pipeline",
        title: "Video → Detection → Metrics → Alerts",
        desc: "Turn camera feeds into traffic data and events with ongoing quality and performance monitoring.",
        list1: "Vehicle detection / tracking / counting",
        list2: "Speed and density estimation",
        list3: "Congestion score and trends"
      },
      card2: {
        tag: "Deployment",
        title: "Cloud-native architecture",
        desc: "Scale with demand: more cameras, segments, longer history, higher concurrency.",
        list1: "Multi-tenant access control",
        list2: "Observability (metrics/logs)",
        list3: "High availability and autoscaling"
      }
    },
    usecases: {
      title: "Use cases",
      desc: "Traffic management, tunnels, events, construction, and lane control—anywhere with video.",
      card1: {
        tag: "Gov / ITS",
        title: "Traffic management",
        desc: "Use live metrics and alerts to reduce response time and improve throughput."
      },
      card2: {
        tag: "Tunnel",
        title: "Tunnels & bottlenecks",
        desc: "Lane guidance and trend prediction to prevent queue spillbacks."
      },
      card3: {
        tag: "Enterprise",
        title: "Campus / parking / logistics",
        desc: "Turn entry traffic into KPIs for dispatch and planning."
      }
    },
    cta: {
      title: "Make road status truly real-time?",
      desc: "Start with a demo segment and PoC, then scale to more roads and cameras.",
      note: "(Replace with a form, email, Line, or contact info.)",
      demo: "Book a Demo",
      back: "Back to features"
    },
    footer: {
      copyright: "© <span id=\"y\"></span> SmartLane. Powered by CloudParty.",
      tagline: "Realtime Traffic Analytics · Lane Recommendation · Alerts · API"
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
