## 前言

今天分享 lineNotify

到官網產生

https://notify-bot.line.me/my/

### DOC

https://notify-bot.line.me/doc/en/

### API Rate Limit

一個 token

- 一小時最多 1000 個請求
- 一小時最多 傳 50 張圖片(非貼圖)

要有 token

call line notify 限制

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

```js
new Date(1727021670 * 1000); //Mon Sep 23 2024 00:14:30 GMT+0800 (台北標準時間)
```

| **Header name**            | value        | **Description**                                                                                              |
| -------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------ |
| X-RateLimit-Limit          | 1000         | The limit of API calls per hour                                                                              |
| X-RateLimit-Remaining      | 1000-use     | The number of possible remaining API calls                                                                   |
| X-RateLimit-ImageLimit     | 50           | The limit of Uploading image per hour                                                                        |
| X-RateLimit-ImageRemaining | 50-use       | The number of possible remaining Uploading image                                                             |
| X-RateLimit-Reset          | [reset time] | The time when the limit is reset ([UTC epoch seconds](http://en.wikipedia.org/wiki/Unix_time)) ex:1472195604 |
