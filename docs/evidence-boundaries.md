# Evidence boundaries and claim audit

[繁體中文](evidence-boundaries.zh-TW.md)

This document separates historical production outcomes from what the public repository directly proves.

| Claim                                  | Scope                                                            | Personal role                                                                       | Baseline                                                     | Result                                                                                           | Public proof                                                                            | Not claimed                                                              |
| -------------------------------------- | ---------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| Config-driven multi-theme architecture | Production Nx/Angular platform, 100+ themes and multiple layouts | Architecture owner and migration lead                                               | Custom logic distributed through large theme implementations | Representative complete theme leaf reduced to 23 lines                                           | Original three-theme implementation, typed config, layer boundaries, completeness tests | Every production leaf is 23 lines; public code is copied from production |
| Architecture rollout                   | Same production migration                                        | Defined boundaries, sequencing, and review criteria                                 | Legacy responsibilities were coupled                         | 70 new purpose-specific modules: 24 facades, 10 data services, 10 theme configs, 26 shared views | Repository map demonstrates the same categories at synthetic scale                      | Module count is a performance outcome                                    |
| On-demand theme CSS                    | Production theme-loading path                                    | Architecture and performance lead                                                   | 136 stylesheets; about 2.4 MB per theme request              | Active theme about 17 KB; about 99% lower                                                        | One managed runtime stylesheet and tests                                                | Public CSS reproduces historical bytes                                   |
| Lighthouse quality initiative          | Key measured production pages                                    | Led performance and quality optimization                                            | Performance 50+                                              | Performance 90+; accessibility, best practices, and SEO also improved                            | Architecture and loading mechanism only                                                 | All pages or categories scored 90+; CSS alone caused the full gain       |
| Engineering leadership                 | Cross-functional delivery team                                   | Led six people; interviews, architecture, review, allocation, and delivery planning | Team delivery context                                        | Leadership scope completed across delivery cycles                                                | Case-study decision records and review boundaries                                       | Team output was individual work                                          |
| Product growth contribution            | Customer product over one year                                   | Participated in product and engineering delivery                                    | 0 members                                                    | 20,000 members                                                                                   | No public reproduction                                                                  | Sole personal causation for business growth                              |

## Sanitization controls

- All names, copy, visual tokens, assets, and theme identifiers in this repository are fictional.
- The implementation was written for this public case study.
- No production repository path, commit identifier, internal domain, customer name, product rule, or private asset is included.
- Production figures are presented as historical results with scope, role, baseline, result, and `not claimed` boundaries.
- The synthetic demo is evidence of architectural capability, not a benchmark reproduction.

## Review checklist

- [x] Runnable Angular/Nx implementation
- [x] Three fictional themes
- [x] Typed theme-family contracts
- [x] Core has no theme, routing, API DTO, or brand-asset dependency
- [x] Config, selector, and leaf completeness tests
- [x] On-demand CSS test
- [x] English and Traditional Chinese documentation
- [x] Explicit production-versus-demo boundary
- [x] MIT license
- [x] CI for formatting, lint, test, and build
