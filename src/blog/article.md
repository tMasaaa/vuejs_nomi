# テスト記事
- markdown中で使えるものを列挙していきます。
- vueなので、
```
{{ 1+2 }}
```
は{{ 1+2 }}と表示されます。

- なにかよく使う部品があれば、test.vueを書いて`<test/>`とすれば
<test/>
のように表示されます。

- また、

```
::: tip
なんかいい感じに[HOME](/index.md)にリンクを
:::
```
は
::: tip
なんかいい感じに[HOME](/index.md)にリンクを
:::
と表示されます。

- 数式(inline表示)は`$a = \{1, 2, 3\}$`のように`$`記法で$a = \{1, 2, 3\}$という風にできます。
- 数式一行表示も、`$$ a = 1 $$`で
$$ a = 1 $$
と表示されます
- katexなのであまり複雑すぎるとMathjaxと違って困ることがあるかもしれませんが
$$ J \left( \theta_0, \theta_1 \right) = \frac{1}{2m}\sum\limits_{i=1}^m \left( h_{\theta}(x^{(i)})-y^{(i)} \right)^{2} $$
このくらいなら平気なのでおそらく大丈夫でしょう。

- コードも通常通り
```ruby
puts 'The best way to log and share programmers knowledge.'
```
と表示されます。4行目だけハイライトしたい場合は、`js{4}`とすると
``` js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
このようにハイライトされます。

- タイトル付きのリンクは、`[GitHub](https://github.com/nomikura "のみさんのGitHub!!!")`が [GitHub](https://github.com/nomikura "のみさんのGitHub!!!") となります。

- [x] aaaaaa
- [ ] aaaaa
- [ ] bbbb
- checkboxはないみたいです。

- :tada: :octopus: :fish: これは絵文字です。
- `nomi` は**プロ** これは強調です。

> これは引用です。
---------
- 水平線です。

- これだけあればおそらく困らないはず…特にvueのコンポーネントを使えるのはかなり強力です。
- https://vuepress.vuejs.org/guide/markdown.html や https://vuepress.vuejs.org/guide/using-vue.html#browser-api-access-restrictions を参考にしてみてください。