# WAIC翻訳ガイドライン

[ウェブアクセシビリティ基盤委員会 (WAIC) 翻訳ワーキンググループ (WG4)](http://waic.jp/committee/wg4/) が管理する、WAICの翻訳物に関するガイドライン類のレポジトリです。

現在のところ、次のガイドラインが存在します。

- [WAIC-wcag20-trans-guide.md](https://github.com/waic/translation_guidelines/blob/master/WAIC-wcag20-trans-guide.md) WCAG 2.0とその関連文書の翻訳ガイドライン


## Pull Request 等について

Pull Request は、ブランチ `master` にお願いします。疑問等ありましたら issue を立ててもらっても構いません。どちらの方法でも歓迎します。

メールで込み入った質問等をしたい場合は、[WAIC のお問い合わせページ](http://waic.jp/contact/)にお願いします。

### ブランチの運用（参考情報）

基本、GitHub Flow での運用を考えています。以下のようなフローを想定しています。

- `master` ブランチがリリース可能な最新の状態となるようにする (GitHub Pages でも `master` の内容が見えるようにする)
- 作業時にはブランチを切って作業を開始する　ブランチの名前は作業の性質に応じたものとする
- 作業中は適宜ブランチを push する
- 作業が終わったところでプルリクエストを出す
- 作業内容に問題ないことが確認出来たら `master` にマージする