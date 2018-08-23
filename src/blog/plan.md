# 開発メモ
# plan
- Qiitaとかhatenablogからog:descriptionなどを取得してプレビュー(Twitter Card)みたいなことをするページ -> WORKSに入れる
- aboutページ -> 小さめのアニメーション
- 長いCSS Animationページ(aboutの拡張版) -> これもWORKS
- docsにmdをまとめて、そこをルートにする→たぶん、package.jsonのscriptsはターゲットフォルダに.vuepressがないといけないっぽい
- たぶんvue-router入れてるからルーティングの変更できるんだろうけど、自分にはできなかった
- 各ページの作りこみをしていく
- cardが重要なので、それをコンポーネント化する
- テーマカラーが他と同じではださいので、overrideする

# 分かったこと
- 拡張に入っているので、https://github.com/sakokazuki/vuepress-test これがとても役に立つ
- vueファイル名`test`とかにすると、`<test></test>`で記述が可能
- https://vuepress.vuejs.org/default-theme-config/#simple-css-override このへんCSSのoverrideに触れてる
- div.page, div.contentのm0,p0をしたい
- `.vuepress/override.styl`でオーバーライドできた
- themeフォルダ作ったらそこをfetchする仕様なので、Layout.vueを置くか、置かないならthemeフォルダ作ってはいけない
- test.htmlを作って書いてみたけど、うまくいかない
- 特定のページだけCSSをまっさらにする or htmlをmdと共存させるってできないのかなー
- https://vuepress.vuejs.org/guide/custom-themes.html#using-theme-from-a-dependency これだ！！！
- `<icon></icon>`ではなく、`<icon/>`だけでよかった。(前者だとpタグの中に入ることになる)
- `Layout.vue`は、大きく全体のテーマを変えたい場合で、小さい変更で上書きしたいときはoverrideとcomponents/Home.vueとかで足りる説あるな
- components/about と、YAML theme:aboutでいけた(headerを取り除かないとだけど)
- やったできた！！！

# vuepressで、特定のページだけcssから外れてhtml(もしくはvue)で独自のページにしたい場合
- `theme`フォルダを作って`Layout.vue`は全体を変更するとき。
- ここでは、`components/about.vue`に
```
<template>
    <icon/>
</template>

<style scoped>

</style>
```
- `about.md`に
```
---
layout: about
navbar: false
---
```
- と書けばOK
- 出力は
```
#app > theme-container > custom-layout > (templateの中身)
```
- https://github.com/vuejs/vuepress/issues/146
- これ見てsass-loaderとnode-sass入れた
- sassでかけるようになった(lang="scss")

# navbar
- 以下のように書けば子要素含めいい感じになる
```js
    themeConfig: {
        search: false,
        nav: [
            { text: 'HOME', link: '/' },
            { text: 'ABOUT', link: '/about.html' },
            { text: 'BLOG', items: [
                { text: 'blog', link: '/blog.html' },
                { text: 'article', link: '/blog/article.html' },
                { text: 'plan', link: '/blog/plan.html' }
            ] },
            { text: 'WORKS', link: '/works.html' }
        ]
    }
```
- aboutでnavbarを最初表示せずに、最後に表示したい問題
- これ、たぶんNavbar.vue的なのがあるからそれ引っ張ってくればいいのではと思ったら当たりっぽ
- あー`<navbar></navbar>`は効かないからvueから引っ張ってくるか→jsのimportで無理そう
- 仕組みはわかってきたけどなーくやしい
- <Navbar/> これも無理
- つらい
- 時間がもったいないので解決策としては、
    - navbarを付けた状態でアニメーションする(どうせ小さいアニメーションだし、本気のは別でやればよいという考え)
    - navbarなしのページでアニメーションを行い、終わったらnavbarありページに強制的にリダイレクトさせる