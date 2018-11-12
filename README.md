## hn-client
hacker-news client app implement in React+Redux

## demo
https://yonedaco.github.io/hn-client/

## how to use
 install  
`npm install`  
run  
`npm run start`  

## thanks
https://github.com/HackerNews/API

## メモ
* Reactコンポーネントはstate持たない、stateはすべてreduxで扱うという方針で
* ReactコンポーネントはすべてStateless Functional Componentで
* `<table>`タグを使ったが、`<table>`タグとReact は相性が悪いということがわかった。`<table>`タグは要素を内包したがる(`<tr>`, `<td>`など)が、Reactはできるだけ要素を分割したがるため
* react-thunk　を使わなくても非同期処理が扱えた。大規模になってきたらreact-thunk, react-saga が必要
* 同期処理をするために無理に配列のreduce()関数をつかった箇所がある。本来の使い方ではないけど便利
* create-react-app は本当に便利
