# 證據邊界與宣稱稽核

[English](evidence-boundaries.md)

本文件將歷史 production 成果，與公開 repository 能直接證明的內容分開呈現。

| 宣稱                  | Scope                                                | 個人角色                                          | Baseline                                 | Result                                                                           | 公開證明                                                   | 不宣稱                                                     |
| --------------------- | ---------------------------------------------------- | ------------------------------------------------- | ---------------------------------------- | -------------------------------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| Config 驅動多主題架構 | 支援 100+ 主題與多版型的 production Nx／Angular 平台 | 架構負責人與 migration lead                       | 客製邏輯分散於大型 theme implementations | 具代表性的完整 theme leaf 精簡至 23 行                                           | 原創三主題實作、typed config、分層邊界、completeness tests | 所有 production leaf 都是 23 行；公開程式複製自 production |
| 架構 rollout          | 同一 production migration                            | 定義邊界、順序與 review criteria                  | Legacy 職責互相耦合                      | 70 個新架構模組：24 facades、10 data services、10 theme configs、26 shared views | Repository map 以 synthetic scale 呈現同類別               | 模組數是效能成果                                           |
| 主題 CSS 按需載入     | Production theme-loading path                        | 架構與效能負責人                                  | 136 份 stylesheet；單次約 2.4 MB         | Active theme 約 17 KB；約降低 99%                                                | 單一 runtime stylesheet 與測試                             | 公開 CSS 重現歷史位元組數                                  |
| Lighthouse 品質專案   | 關鍵 production 實測頁面                             | 主導效能與品質優化                                | Performance 50+                          | Performance 90+；並改善 accessibility、best practices、SEO                       | 公開案例只呈現架構與載入機制                               | 所有頁面或分類皆為 90+；CSS 單獨造成完整提升               |
| 工程領導              | 跨職能交付團隊                                       | 帶領 6 人，負責面試、架構、review、分工與交付規劃 | 團隊交付情境                             | 在多個交付週期完成領導職責                                                       | 案例中的決策紀錄與 review 邊界                             | 團隊產出全為個人工作                                       |
| 產品成長貢獻          | 一年期客戶產品                                       | 參與產品與工程交付                                | 0 名會員                                 | 20,000 名會員                                                                    | 無公開重現                                                 | 業務成長完全由個人單獨造成                                 |

## 去識別化控制

- Repository 內所有名稱、文案、visual tokens、素材與 theme identifiers 均為虛構。
- 實作是為此公開案例重新撰寫。
- 不含 production repository path、commit identifier、內部網域、客戶名稱、產品規則或私人素材。
- Production 數據皆以 scope、role、baseline、result 與 `not claimed` 邊界呈現。
- Synthetic Demo 是架構能力證據，不是 benchmark reproduction。

## Review checklist

- [x] 可執行 Angular／Nx 實作
- [x] 三個虛構主題
- [x] Typed theme-family contracts
- [x] Core 不相依於 theme、routing、API DTO 或品牌素材
- [x] Config、selector 與 leaf completeness tests
- [x] CSS 按需載入測試
- [x] 英文與繁體中文文件
- [x] 明確區分 production 與 Demo 證據
- [x] MIT License
- [x] Formatting、lint、test、build CI
