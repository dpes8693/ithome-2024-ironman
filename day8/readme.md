![gmail](https://drive.google.com/thumbnail?id=1f_gP6mgDhh18xRBYwAJQvyqsaQn_X8dc&sz=w1366)

## 前言

封面圖是 **gmail 寫信寫到一半手滑關閉網頁** 彈出的提示

試想一個情境:
你正在後台編輯很長的表單，打到一半去處理其他事情，要回來繼續編輯表單
因為分頁太~~~多所以手滑點到叉叉....此時網頁就沒存檔
![/images/emoticon/emoticon17.gif](/images/emoticon/emoticon17.gif)

今天會介紹最簡單的作法避免上述情況

## 網頁生命週期

首先要先簡單知道網頁分成 5 個階段

1. loading (載入中)
2. interactive == DOMContentLoaded (文件已經完成讀取。可以使用 DOM 元素)
3. complete == load (頁面所有資源已經完成讀取。)
4. beforeunload (離開網頁前)
5. unload (已關閉網頁 or 已重新整理網頁)

![meme](https://memes.tw/user-tmp/1725541401119.png)

我們要達成目標需要在 `4. beforeunload` 階段做事件監聽

## 成果

讀者們可以親自試試:[網頁生命週期 demo](https://dpes8693.github.io/ithome-2024-ironman/day8/web-life-cycle.html)
![demo](https://drive.google.com/thumbnail?id=1W5WDROgL051DAl9yPuGxnxAKGXk8IoFo&sz=w1366)

細心的讀者會發現 demo 故意將比較早印出的 EventListener 放比較後面
這樣比較能理解順序的差異

可以嘗試操作幾個流程:

1. 開啟網頁>>不做任何事情>>關閉
2. 開啟網頁>>滑鼠點一下>>關閉/重新整理
3. 開啟網頁>>鍵盤按一下>>關閉/重新整理

補充幾個重點:

1. 要彈出提示需要先跟網頁有互動過(和瀏覽器播放音效機制類似)
2. 提示文字無法客製化，alert()也無法生效
   [詳見](https://developer.chrome.com/blog/chrome-51-deprecations/?hl=en#remove_custom_messages_in_onbeforeunload_dialogs)

## 程式碼

## 後記

研究後才知道原來可以在關閉網頁後做事情
至於[手機不會觸發哪些事件還需要繼續研究](https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator/sendBeacon#%E9%81%BF%E5%85%8D%E4%BD%BF%E7%94%A8_unload_%E5%92%8C_beforeunload)

## 值得閱讀的好文章

[Sure you want to leave?—browser beforeunload event](https://dev.to/chromiumdev/sure-you-want-to-leavebrowser-beforeunload-event-4eg5)

[重新認識 JavaScript 番外篇 (6) - 網頁的生命週期](https://ithelp.ithome.com.tw/articles/10197335)
