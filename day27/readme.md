![hero](https://steam.oxxostudio.tw/image/python/tkinter/line-notify.jpg)

## 前言

今天分享一下 LINE Notify 相關資訊

要怎麼做才能用最快的速度讓Line通知我自訂的消息呢?

### 步驟1 加 LINE Notify 為好友
![friend](https://drive.google.com/thumbnail?id=1dMWm-cHH1NeTSfQSRYtWQpc-IwW0KgNW&sz=w1366)

### 步驟2 到官網產生權杖(Token)
首先進入[官網](https://notify-bot.line.me/zh_TW/)
右上角個人名稱點下去>>個人頁面
滾到最底下會看到按鈕
![token](https://drive.google.com/thumbnail?id=1aXbord7F-f_RUpTWOiz8aOlnjR6x7JIM&sz=w1366)

產生時要先輸入發送訊息的服務名稱，接著選一個聊天室
(注意: 若選擇群組要將LINE Notify邀請過去該群~)

否則發訊息會有問題
![400](https://drive.google.com/thumbnail?id=1upeaTYB7KKVSoIQWnyz7VIZRtNG8QfXn&sz=w1366)

看到line出現[連動完成]訊息，就能開始使用此Token測試囉

### 步驟3 call API 測試

可以使用 Postman 測試
POST https://notify-api.line.me/api/notify?message=test
記得選擇 `Bearer Token` 貼上`Token`

或是寫個程式去發動請求

```js
//...略
const token = "你發行的權杖"
const url = "https://notify-api.line.me/api/notify";
const headers = {
  "Content-Type": "application/x-www-form-urlencoded",
  Authorization: `Bearer ${token}`,
};
const body = new URLSearchParams({ message:"test" });
const response = await fetch(url, { method: "POST", headers, body });
const data = await response.json();
if (data.status !== 200) {
  console.log(title, "通知失敗:", data);
} else {
  console.log(title, "通知成功！");
}
```

---

這樣就用最快的方式能做出作品囉 (當然還有更複雜的方式串接，但超出本系列主軸~)

## 分享案例

ex: 我利用作天的爬蟲程式取得JSON，接著 call API 通知我台中哪邊發生火災

![demo](https://drive.google.com/thumbnail?id=1PzCvz5eRr33YYUnyyR7U_cG0LfR2JWJi&sz=w1366)

回到今天標題~

## 官方文件有寫 API Rate Limit

以下是答案:
一個 token

- 一小時最多 1000 個請求
- 一小時最多 傳 50 張圖片(非貼圖)

如果仔細觀察收到的`Response Headers`其實會看到限制

```md
POST https://notify-api.line.me/api/notify

Response Headers
Server: nginx
Date: Sun, 22 Sep 2024 15:14:30 GMT
Content-Type: application/json
Transfer-Encoding: chunked
Keep-Alive: timeout=9
Vary: Accept-Encoding
X-RateLimit-Limit: 1000
X-RateLimit-ImageLimit: 50
X-RateLimit-Remaining: 999
X-RateLimit-ImageRemaining: 50
X-RateLimit-Reset: 1727021670
X-Robots-Tag: noindex, nofollow, nosnippet, noarchive
Content-Encoding: gzip
```

下面會附上官方網站整理的總表

```js
//X-RateLimit-Reset 單位是秒
new Date(1727021670 * 1000); //Mon Sep 23 2024 00:14:30 GMT+0800 (台北標準時間)
```

| **Header name**            | value        | **Description**                                                                                              |
| -------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------ |
| X-RateLimit-Limit          | 1000         | The limit of API calls per hour                                                                              |
| X-RateLimit-Remaining      | 1000-use     | The number of possible remaining API calls                                                                   |
| X-RateLimit-ImageLimit     | 50           | The limit of Uploading image per hour                                                                        |
| X-RateLimit-ImageRemaining | 50-use       | The number of possible remaining Uploading image                                                             |
| X-RateLimit-Reset          | [reset time] | The time when the limit is reset ([UTC epoch seconds](http://en.wikipedia.org/wiki/Unix_time)) ex:1472195604 |

use 就是你目前call的次數

### 總結

單一 token(其實可當成一個人) 每小時 1000次其實很夠用了，正常使用不會超過
但圖片每小時只能上傳50張這點要特別注意!

message 長度限制為 1000 (正常使用夠用，若要傳送JSON太短)

---

## 來源
[封面圖](https://steam.oxxostudio.tw/category/python/tkinter/line-notify.html)

### DOC
https://notify-bot.line.me/doc/en/
