# Foula Esthetics Academy

Foula Esthetics Academy 公式サイトのJekyllソースです。

## ローカル確認

```bash
bundle install
bundle exec jekyll serve
```

生成されたページは `http://127.0.0.1:4000/` で確認できます。

## ディレクトリ

- `_includes/`: ヘッダー、フッター、会場情報などの共通部品
- `_layouts/`: ページ全体のレイアウト
- `assets/css/`: 共通CSSとセミナー別CSS
- `assets/js/site.js`: 共通の画面動作
- `img/`、`images/`: サイトで使用する画像
- `seminar/`: セミナー詳細ページ
- `_site/`: Jekyllが自動生成する公開ファイル。直接編集しない

## class・idの命名規則

| 種別 | 形式 | 例 |
| --- | --- | --- |
| 共通レイアウト | `site-*` | `site-header`、`site-footer__nav` |
| コンポーネント | BEM形式 | `faq-item__answer`、`instructor-modal__content` |
| ページ識別 | `page-*` | `page-concept`、`page-schedule` |
| 表示ユーティリティ | `u-*` | `u-desktop-only` |
| JavaScript計測 | `js-*` | `js-track-seminar-cta` |
| JavaScript参照 | `data-js` | `data-js="mobile-nav"` |
| 状態 | `is-*`、`has-*` | `is-open`、`has-open-menu` |

idはページ内リンク、ARIAの関連付けなど、一意性が必要な用途に限定します。JavaScriptから要素を取得する目的では `data-js` を使用します。

## 更新時の注意

1. 共通ヘッダー・フッターは `_includes/header.html` と `_includes/footer.html` を更新します。
2. セミナー会場は `_includes/location.html` を更新します。
3. JavaScriptのDOM参照は `assets/js/site.js` 冒頭の `SELECTORS` に集約します。
4. `_site/` と `.jekyll-cache/` はコミットしません。

### Contact

Information Systems Division <it@kateoftokyo.com>

&copy; Kate of Tokyo, Co. Ltd.  
Do not distribute. Unauthorized use is punishable by law.
