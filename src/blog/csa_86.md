# CSA #86 (div2)
- 全部で5問/2時間でした。復習したので最初の3問について述べます。
# [Penguin Dance](https://csacademy.com/contest/round-86/task/penguin-dance/)
- 本番はこの問題しか解けませんでした。
- 配列に関する問題

::: tip 問題
いくつかのダンスのステップ([リンク先](https://csacademy.com/contest/round-86/task/penguin-dance/) に詳細)があり、それを$N$人の人が$T$回行う。ダンスのステップのうち、前と後ろに進んだ場合は座標が変化するので、$T$回のステップ後に位置$P$に人はいるか、いるならそれは何番目の人か答えよ。
:::

- 素直にシュミレーションする。
- ダンスのステップは9個なので, $\mathrm{floor}(T/9)$と$T$%$9$で$i$番目の人の移動先が決定できる。
- 列の順番が位置$P$から見て1-indexであることに注意。
- 計算量はforを一回回すので$O(N) = 10^3$
- [code](https://csacademy.com/submission/1730587/)

# [Cookie Clicker](https://csacademy.com/contest/round-86/task/cookie-clicker/)
- シュミレーション/全探索(next_permutation)

::: tip 問題
1秒当たり$S$個のクッキーが与えられる。各秒において、手持ちのいくつかのクッキーを対価にクッキー生産工場($N$種類)を手に入れられる。ただし工場は同じものを二度購入することはできない。<br>
$C$個手に入れるためにかかる時間$T$の最小値を求めよ。入力において、購入コスト$A$の工場は毎秒$B$個のクッキーを生産できる能力を持つ。
:::

- 制約が小さいところに注目すると、$N \leq 5$ が目につきます。
- 素直にシュミレーションして、$N$に対して全探索(購入する順番を全列挙)することで解けます
- 計算量は僕には分かりませんでした。$N! = 120$の中でwhileをいくつか回しています。

::: warning 発想
$N$が小さいと計算量$2^N$のビット全探索が思い浮かぶ。同様に、$10! \fallingdotseq 3\times 10^6$ を意識する。[OEIS](https://oeis.org/A000142)<br>
あと、これはどちらかというと実装寄り。
:::

- [code](https://csacademy.com/code/ogkreZOS/)
- 参考: kmjpさんの[code](https://csacademy.com/submission/1728608/)

# [Palindrome Free Strings](https://csacademy.com/contest/round-86/task/palindrome-free-strings/)
- 回文/小さい場合への帰着/Misc(正当性の証明)

::: tip 問題
文字列Sが与えられる。2文字以上の回文をその中に連続部分列として含まないようにするためにいくつかの文字を変更する。変更する文字数の最小数を求めよ。
:::

- $N=300$と制約が小さいので、$N^2$が通りそうという気分になる。
- 考察: 長さ$2L$の回文を含むならば、必ず長さ$2$の回文を含む。同様に、長さ$2L+1$の回文を含むならば、必ず長さ$3$の回文を含む。(回文の真ん中あたりに着目するとわかる)
- したがって、長さ$2$または$3$の回文を含まないよう文字列を変更していけばよい。
- `aaa`のようなものを考えると、`s[i-1]==s[i]`のときは`s[i]`を変更するとよいとわかる。同様に、`axaxa`のようなものを考えると`s[i-2]==s[i]`のときは`s[i]`を変更するとよい。
- これを素直にコードにする(この正当性がよく分かってない…最小性が保証されるのか？)
- [code](https://csacademy.com/code/ZYdUeqxx/)
- 参考: Benqさんの[code](https://csacademy.com/submission/1727743/)