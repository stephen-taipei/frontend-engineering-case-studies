import { DemoCopy, DemoLocale } from '../contracts/theme-contracts';

export const DEMO_COPY = {
  en: {
    htmlLang: 'en',
    documentTitle:
      'Config-driven Frontend Architecture · Angular/Nx Case Study',
    metaDescription:
      'An interactive Angular/Nx case study for config-driven themes, explicit ownership boundaries, and on-demand CSS.',
    skipLink: 'Skip to main content',
    homeLabel: 'Back to the top',
    brandLabel: 'Frontend Architecture Case Study',
    sourceLabel: 'View source',
    languageLabel: 'Choose language',
    colorMode: {
      toDark: 'Switch to dark mode',
      toLight: 'Switch to light mode',
    },
    hero: {
      kicker: 'Angular · Nx · Interactive architecture proof',
      title: 'Complex themes,',
      titleHighlight: 'one stable contract.',
      lead: 'A runnable demonstration of how selector, theme leaf, shared view, facade/service, and pure core boundaries turn customization into typed, testable configuration.',
      chips: [
        '3 fictional themes',
        'typed contracts',
        'family completeness',
        'on-demand CSS',
      ],
      chipsLabel: 'Demo highlights',
    },
    themeSection: {
      kicker: '01 · Runtime proof',
      title: 'Switch the theme, keep the contract',
      summary:
        'The same data, behavior, and DOM are reused. Each complete leaf owns only its appearance config and stylesheet.',
      switcherLabel: 'Demo themes',
    },
    themes: {
      default: {
        label: 'Foundation',
        eyebrow: 'default leaf · complete config',
        description:
          'A neutral fallback that uses the same rendering and behavior contracts as every named theme.',
        ctaLabel: 'Clear shared selection',
      },
      aurora: {
        label: 'Aurora',
        eyebrow: 'theme leaf · isolated appearance',
        description:
          'A vivid theme that changes tokens and density without duplicating shared DOM or interaction flow.',
        ctaLabel: 'Reset Aurora selection',
      },
      summit: {
        label: 'Summit',
        eyebrow: 'theme leaf · isolated appearance',
        description:
          'A compact dark theme that demonstrates structural stability across a complete sibling family.',
        ctaLabel: 'Reset Summit selection',
      },
    },
    items: [
      {
        id: 'architecture',
        title: 'Stable rendering contract',
        description:
          'Core receives view-ready typed inputs and emits intent without knowing theme names.',
      },
      {
        id: 'ownership',
        title: 'Explicit ownership',
        description:
          'Leaf themes own complete appearance config and stylesheet selection.',
      },
      {
        id: 'delivery',
        title: 'Predictable delivery',
        description:
          'Views wire shared data and actions while facades isolate side effects.',
      },
    ],
    selection: {
      selectedPrefix: 'Shared action selected:',
      prompt: 'Choose a card to exercise the shared facade.',
    },
    architecture: {
      kicker: '02 · Explicit ownership',
      title: 'One-way rendering, deliberate behavior',
      summary:
        'Rendering dependencies point inward. Data access and side effects remain behind their named service and facade boundaries.',
      mapLabel: 'dependency direction',
      flowLabel: 'runtime flow',
      renderingFlow:
        'Rendering: selector → theme leaf → shared view → pure core',
      behaviorFlow: 'Behavior: view → facade → service / external contract',
      layers: [
        {
          key: 'selector',
          label: 'Selector',
          description: 'Resolves one complete sibling theme without owning UI.',
        },
        {
          key: 'theme leaf',
          label: 'Theme leaf',
          description: 'Owns complete appearance config and stylesheet choice.',
        },
        {
          key: 'shared view',
          label: 'Shared view',
          description: 'Wires shared data, actions, and emitted intent.',
        },
        {
          key: 'pure core',
          label: 'Pure core',
          description:
            'Renders typed inputs without theme, router, or API knowledge.',
        },
      ],
    },
    evidence: {
      kicker: '03 · Evidence boundary',
      title: 'Measured impact, without blurred claims',
      summary:
        'The public implementation proves the mechanism. Historical production outcomes remain clearly labeled and are not presented as reproduced by this synthetic demo.',
      metrics: [
        {
          value: '23',
          label: 'lines in a representative complete production theme leaf',
          context:
            'A complexity-compression result, not every file in the system.',
        },
        {
          value: '136',
          label: 'production theme stylesheets moved to on-demand loading',
          context: 'The public demo uses three small synthetic stylesheets.',
        },
        {
          value: '≈99%',
          label: 'less CSS in one measured production theme request',
          context: 'About 2.4 MB → 17 KB; not reproduced by this demo.',
        },
      ],
      boundaryLabel: 'Public proof boundary',
      boundaryText:
        'Original synthetic implementation only: no private source, company names, business logic, domains, or brand assets.',
    },
    footer:
      'Sanitized Angular/Nx architecture proof · Built for inspection, not decoration.',
  },
  'zh-TW': {
    htmlLang: 'zh-Hant',
    documentTitle: 'Config 驅動前端架構 · Angular／Nx 案例',
    metaDescription:
      '以互動式 Angular／Nx 案例展示 Config 驅動多主題、明確責任邊界與 CSS 按需載入。',
    skipLink: '跳到主要內容',
    homeLabel: '回到頁面頂端',
    brandLabel: '前端架構案例',
    sourceLabel: '查看原始碼',
    languageLabel: '選擇語言',
    colorMode: {
      toDark: '切換深色模式',
      toLight: '切換淺色模式',
    },
    hero: {
      kicker: 'Angular · Nx · 可互動架構證明',
      title: '複雜多主題，',
      titleHighlight: '共用一套穩定契約。',
      lead: '透過可執行 Demo，呈現 selector、theme leaf、shared view、facade／service 與 pure core 的責任邊界，如何將客製需求轉化為型別化、可測試的設定。',
      chips: [
        '3 個虛構主題',
        '型別化契約',
        'family completeness',
        'CSS 按需載入',
      ],
      chipsLabel: 'Demo 重點',
    },
    themeSection: {
      kicker: '01 · 執行期證明',
      title: '切換主題，不改變共用契約',
      summary:
        '資料、行為與 DOM 全部重用；每個完整 leaf 僅擁有自己的 appearance config 與 stylesheet。',
      switcherLabel: 'Demo 主題',
    },
    themes: {
      default: {
        label: 'Foundation',
        eyebrow: 'default leaf · 完整設定',
        description:
          '中性的預設方案，與所有 named theme 共用相同的 rendering 與 behavior contract。',
        ctaLabel: '清除共用選取狀態',
      },
      aurora: {
        label: 'Aurora',
        eyebrow: 'theme leaf · 隔離外觀',
        description:
          '透過 tokens 與 density 呈現鮮明外觀，不複製共用 DOM 或互動流程。',
        ctaLabel: '重設 Aurora 選取狀態',
      },
      summit: {
        label: 'Summit',
        eyebrow: 'theme leaf · 隔離外觀',
        description:
          '以緊湊深色主題證明完整 sibling family 之間仍維持相同結構。',
        ctaLabel: '重設 Summit 選取狀態',
      },
    },
    items: [
      {
        id: 'architecture',
        title: '穩定的 rendering contract',
        description:
          'Core 僅接收可直接呈現的 typed inputs，並輸出 intent，不認識 theme 名稱。',
      },
      {
        id: 'ownership',
        title: '明確的 ownership',
        description:
          'Theme leaf 擁有完整 appearance config 與 stylesheet 選擇。',
      },
      {
        id: 'delivery',
        title: '可預期的交付',
        description: 'View 串接共用資料與 actions；facade 隔離 side effects。',
      },
    ],
    selection: {
      selectedPrefix: '共用 action 已選取：',
      prompt: '選擇一張卡片，實際操作共用 facade。',
    },
    architecture: {
      kicker: '02 · 明確 Ownership',
      title: '單向呈現，刻意管理行為',
      summary:
        'Rendering dependency 一律向內；資料存取與 side effects 則由具名的 service 與 facade 邊界管理。',
      mapLabel: 'dependency direction',
      flowLabel: '執行期流程',
      renderingFlow:
        '畫面組裝：selector → theme leaf → shared view → pure core',
      behaviorFlow: '資料與行為：view → facade → service／external contract',
      layers: [
        {
          key: 'selector',
          label: 'Selector',
          description: '選擇一個完整 sibling theme，但不承接 UI。',
        },
        {
          key: 'theme leaf',
          label: 'Theme leaf',
          description: '擁有完整 appearance config 與 stylesheet 選擇。',
        },
        {
          key: 'shared view',
          label: 'Shared view',
          description: '串接共用資料、actions 與 emitted intent。',
        },
        {
          key: 'pure core',
          label: 'Pure core',
          description: '只呈現 typed inputs，不認識 theme、Router 或 API。',
        },
      ],
    },
    evidence: {
      kicker: '03 · 證據邊界',
      title: '量化成果，不模糊宣稱',
      summary:
        '公開實作負責證明機制；歷史 production 成果會清楚標示，不將 synthetic demo 包裝為數據重現。',
      metrics: [
        {
          value: '23',
          label: '行：具代表性的完整 production theme leaf',
          context: '屬於複雜度壓縮成果，不代表系統中的每個檔案。',
        },
        {
          value: '136',
          label: '份 production 主題 CSS 改為按需載入',
          context: '公開 Demo 僅使用三份小型 synthetic stylesheets。',
        },
        {
          value: '≈99%',
          label: '單次 production 主題 CSS 下載量降低',
          context: '約 2.4 MB → 17 KB；公開 Demo 不宣稱重現此數據。',
        },
      ],
      boundaryLabel: '公開證明邊界',
      boundaryText:
        '僅包含原創的 synthetic implementation；不含私人原始碼、公司名稱、商業邏輯、網域或品牌素材。',
    },
    footer: '去識別化 Angular／Nx 架構證明 · 為可檢查性而設計，而非只做裝飾。',
  },
} satisfies Record<DemoLocale, DemoCopy>;
