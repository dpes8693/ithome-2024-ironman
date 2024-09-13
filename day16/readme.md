## 前言

不知道讀者們有沒有需要在網頁開啟自家 App 的需求
如果是自己開發的 App 問題應該不大，ios 以及 android 都設定一樣的開啟連結即可
開啟連結有個專有名詞叫做 `URL Schemes`

如果希望在 line 分享連結的話，建議是跳去瀏覽器開比較容易成功
`引導頁.html?openExternalBrowser=1`
=> 在引導頁做個按鈕來開啟自家 App

還有另一種方式是透過 Firebase 跳轉
ex: https://maps.app.goo.gl

---

為什麼開頭會說網頁開啟 App 其實很麻煩?
因為隨著軟體不斷改版,作業系統不斷更新，連結不一定都可以一直使用
以前可以使用`youtube://`開啟 YT 但是現在不行了

不同作業系統`URL Schemes`也可能不同，看各廠商自己定義

## 成果

[這邊放上做出來的 demo](https://dpes8693.github.io/ithome-2024-ironman/day16/index.html)

```html
data-url="comgooglemaps://" data-name="Google Maps"
data-website="http://maps.google.com/maps"
```

重點 1: 透過 button 上的參數控制開啟的連結
重點 2: 透過昨天學的`visibilitychange`判斷網頁是否跳轉成功

## 程式碼
