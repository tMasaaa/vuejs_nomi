# Vuepressの導入

# やること
- ルーティングの自動化(docs以下を取得してnavbarに反映させる)
- build自動化

# 注意
- config.jsは`npm run dev`中に変更しても反映されない？
- ルーティングの自動化の記事が見当たらない…自分でやるか。
- config.jsの`console.log`は`npm run dev`のときに出てくるのでデバッグに使える
- config.jsはnode.jsで動いている(`reqire('fs')`できた)
- a.jsで配列が取得できた。これをJSON整形してexportして.vuepress以下config.jsに渡せばOK