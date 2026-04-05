---
layout: splash
permalink: /
header:
  overlay_color: "#000"
  overlay_filter: "0.5" # 画像を少し暗くして文字を読みやすくする(0.0〜1.0)
  overlay_image: /assets/images/toppage.jpg

# ここから下の3列カード（Feature Row）の設定
# image_path に外部の画像生成サービス(placehold.co)を使います
feature_row:
  - image_path: https://placehold.co/600x400/00adb5/ffffff/png?text=Daily+AlpacaHack+Writeups
    alt: "Daily AlpacaHack Writeups"
    title: "Daily AlpacaHack Writeups"
    excerpt: "Daily AlpacaHackのWriteups"
    url: "/categories/Daily_AlpacaHack_Writeups/" # リンク先（まだページがなくてもOK）
    btn_label: "記事一覧へ"
    btn_class: "btn--primary"
  - image_path: https://placehold.co/600x400/393e46/ffffff/png?text=Dev+Logs
    alt: "開発記録"
    title: "開発記録"
    excerpt: "開発の記録です。"
    url: "/categories/development/"
    btn_label: "記事一覧へ"
    btn_class: "btn--info"
  - image_path: https://placehold.co/600x400/eeeeee/393e46/png?text=Badminton
    alt: "バドミントン"
    title: "バドミントン"
    excerpt: "バドミントン"
    url: "/categories/badminton/"
    btn_label: "記事一覧へ"
    btn_class: "btn--success"
---

# Welcome to My Blog

{% include feature_row %}