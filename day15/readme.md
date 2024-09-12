[![Yes](https://img.youtube.com/vi/n2gon_zZTbE/0.jpg)](https://www.youtube.com/watch?v=n2gon_zZTbE)

## 前言

封面圖是電腦版的 ig，影片播放到一半接著切換分頁(ig 退到背景)時，會自動暫停影片

原本今天想寫透過網頁開啟 App 的功能，但會碰到`監聽網頁切換到背景`的議題
因此臨時更改主題~

監聽的方式其實比想像中簡單，透過[visibilitychange](https://developer.mozilla.org/en-US/docs/Web/API/Document/visibilitychange_event)

可以從文件看到觸發時機:
when a user

- navigates to a new page
- switches tabs
- closes the tab
- minimizes or closes the browser
- on mobile, switches from the browser to a different app

電腦: 開新頁,切換分頁,關閉分頁,縮小瀏覽器
手機: 切換應用程式

## 成果

[播放聲音檔，當切換到背景時暫停撥放](https://dpes8693.github.io/ithome-2024-ironman/day15/visibility-change.html)

想看貓貓 or 想看 ig 暫停播放影片的下收連結:
https://www.youtube.com/watch?v=n2gon_zZTbE

## 程式碼

## 重點

https://ruanyifeng.com/blog/2018/10/page_visibility_api.html

根據上面文章所說 `document.visibilityState` `document.hidden`
這兩個屬性盡量使用 `visibilityState` 比較好，因為 `hidden` 是以前的用法(歷史遺留)

### document.visibilityState 瀏覽器可見狀態

有三種情況: "hidden", "visible", "prerender"
"unloaded" => 這個被棄用了

prerender =>預渲染很少用
hidden =>隱藏
visible =>可見

只要透過`visibilitychange`事件監聽，再判斷可見狀態就能達成暫停影片的需求囉~
