![hero](https://drive.google.com/thumbnail?id=1bsJkRCZiKFkscXavNmBHrdGgymNv1c0O&sz=w1366)

## 前言

爬蟲是什麼?
在筆者大一時還分不清楚一堆名詞的意思，第一次聽到還以為是在講爬蟲類(離題了~)
![/images/emoticon/emoticon01.gif](/images/emoticon/emoticon01.gif)

## 爬蟲

爬蟲 = 網路爬蟲（web crawler） = 用程式 call API = 拿一坨文字做資料處理
上面的 API 是廣義的(透過網址拿資料的意思)

舉例:
今天我去逛台中市消防局
https://www.fire.taichung.gov.tw/caselist/index.asp?Parser=99,8,226

人類看到的:
![fire-web](https://drive.google.com/thumbnail?id=1OtggTYSzoHeX9tUXjq7flJVf51X3JPNI&sz=w1366)

瀏覽器看到的:
![fire-source](https://drive.google.com/thumbnail?id=1jgoceZzVkkVp7trQVY51YroyYg830U7d&sz=w1366)
其實就是 html 文字

我寫了程式碼去撈文字並處理成我要的格式

```json
{
  "result": true,
  "message": "ok",
  "data": [
    {
      "受理時間": "2024/09/23 20:25:30",
      "案類": "其他",
      "案別": "其他",
      "發生地點": "台中市豐原區直興街",
      "派遣分隊": "豐南分隊",
      "執行狀況": "已出動"
    }
    //...etc
  ]
}
```

![demo](https://drive.google.com/thumbnail?id=1sdtIX1oOIdVpqg2Yp25CtxJw3gbULQK5&sz=w1366)

讓電腦爬文字,圖片蒐集資料再依照需求做各種處理~
ex: 發 lineNotify 訊息, 寄信通知, 存到 Notion 筆記 ...etc

到這邊相信讀者對`爬蟲`有概念了~

接著說明一下怎麼在本地開發流程:

1. 安裝 Node.js 18 以上
2. 開個資料夾，產生一個 index.js 檔案
3. `npm init` 一路 Enter 到底
4. `npm cheerio`
5. 撰寫程式碼~
6. `node .\index.js`

---

## cheerio

推薦的套件:
https://github.com/cheeriojs/cheerio

`cheerio` 讓 nodejs 能愉快地使出瀏覽器在用的 Selector(選擇器語法)

```js
//!! Node.js 18 LTS or later !!
//import * as cheerio from "cheerio";
const cheerio = require("cheerio");
//body就是拿到的那陀html文字
const $ = cheerio.load(body);
```

### 重要語法

這邊整理出很常用到的語法，可優先學習~

- .find(selector)
- .text()
- .attr('class')
- .each()
- .get( [i] )

語法文件(列的很詳細)
https://github.com/cheeriojs/cheerio/wiki/Chinese-README

趕緊寫出你的第一套爬蟲程式吧~~

---

### 本日程式碼
