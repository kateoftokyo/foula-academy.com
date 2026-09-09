# リファクタリング内容

## 共通class

| 変更前 | 変更後 |
| --- | --- |
| `.header` | `.site-header` |
| `.logo` | `.site-header__logo` / `.mobile-header__logo` |
| `.sp-header` | `.mobile-header` |
| `.modal-menu__*` | `.mobile-nav*` |
| `.footer` | `.site-footer` |
| `.faq-section-index` | `.faq-item` |
| `.question` / `.answer` | `.faq-item__question` / `.faq-item__answer` |
| `.person*` | `.instructor-card*` |
| `.popup*` | `.instructor-modal*` |
| `.pc-show` / `.sp-show` | `.u-desktop-only` / `.u-mobile-only` |
| `.consept-section` | `.concept-section` |

## 構造

- 5種類のレイアウトで重複していたHTMLを `_includes/page-shell.html` に集約
- 4ページで重複していた会場情報を `_includes/location.html` に集約
- レイアウト内のJavaScriptを `assets/js/site.js` に集約
- JavaScript専用IDを `data-js` に変更
- ページ内の `<style>` を削除し、ページ識別classによるCSSへ集約
- `assets` 内に重複していた旧サイト一式と生成物を成果物から除外
- 旧ページから参照されていた共通JavaScriptも `assets/js/site.js` に統一
