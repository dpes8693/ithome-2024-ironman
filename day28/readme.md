## 前言

試想一個情境
如果是在手機網路訊號不好的地方，使用者剛好在操作網頁
而網頁是 SPA(Single Page Application)，只會 call API 不會有網址切換的行為

有什麼方式能快速提醒使用者呢?
總不能都靠請求設定的 timeout 吧>>這樣還要等超時候才知道是網路問題
我們需要更直接的方式

看看 Youtube App 的範例:
![yt](https://drive.google.com/thumbnail?id=1QbcJlWKzCAJihci-bjFf8lpuz8z5Vdc3&sz=w1366)

今天來實現類似的範例 MVP

---

## 重點

- online 事件
- offline 事件
- navigator.onLine

我們需要事件監聽`online` `offline` 來觸發我們定義的 function
並判斷`navigator.onLine` true/false 去改變 UI 就能完成目標

```js
function updateOnlineStatus() {
  clearTimeout(offlineTimer);
  clearTimeout(onlineTimer);
  // Online
  if (navigator.onLine) {
    statusBar.classList.remove("offline");
    statusBar.classList.add("online");
    statusBar.style.opacity = "1";
    onlineTimer = setTimeout(() => {
      statusBar.style.opacity = "0";
    }, 3000);
    return;
  }

  // Offline
  offlineTimer = setTimeout(() => {
    statusBar.classList.remove("online");
    statusBar.classList.add("offline");
    statusBar.style.opacity = "1";
  }, 2000);
}

window.addEventListener("online", updateOnlineStatus);
window.addEventListener("offline", updateOnlineStatus);
```

值得注意的是:

- online 出現的綠色 bar 不能一直出現會影響體驗
- offline 則是超過一定時間才會出現(防止瞬間斷線又馬上連線的情況)

因此透過 `setTimeout` 來解決這 2 個優化的議題

---

## 成果

可以嘗試中斷網路測試看看
補充: [電腦版模擬斷線的開發小技巧](https://developer.chrome.com/docs/devtools/network/reference?hl=zh-tw#offline)

[監聽網路斷線\_demo](https://dpes8693.github.io/ithome-2024-ironman/day28/web-navigator-online.html)

![demo](https://drive.google.com/thumbnail?id=1-BMrzSRm0BnMZUM9nVOhtC-MHh6c4iVN&sz=w1366)

## 程式碼
