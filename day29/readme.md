## 前言

Vercel 是一間雲服務廠商，我們可以透過它免費部署我們的程式碼
這樣就能有 domain 讓其他人訪問
不用自己租一台伺服器(還要處理域名綁定等相對複雜的事情)
很適合用在專題發表~

更方便的是它能和 github 綁定，只要授權 repo 後就能自動部署! (git push => 網站自動部署)

假設今天單純想要練習後端程式甚至沒有要連接 DB
那我們要怎麼設定變數呢?
畢竟有些私密的金鑰不想上傳到 github 上面

今天來學習怎麼在 Vercel 設定環境變數~ 圖多!

## 說明

### 第一次部署

![](https://drive.google.com/thumbnail?id=1c9ydCTZqSNdyDpK66sVkUQ3fy38UxT0H&sz=w1366)
選要匯入的 github
![](https://drive.google.com/thumbnail?id=1eMr6RkV8Tvf2WWKe8g9cbRUeSvS86iEM&sz=w1366)
可以先不設定環境變數直接點 deploy
![](https://drive.google.com/thumbnail?id=1H5-UNwZzExPLWidgwcYrCVBe8zawt_fQ&sz=w1366)
沒錯就是這麼簡單，等幾秒就好了
![](https://drive.google.com/thumbnail?id=12ZW8ZwJrP72jIPHHeF-wr5qlB_cy5grw&sz=w1366)
這是預覽，這邊很重要，位置要記好 ✨ ⇒ 最右邊有個 Settings

---

![](https://drive.google.com/thumbnail?id=1ri11wwlsp-1YnQY5DML-Egn5HoNjQ_V5&sz=w1366)
這是 detail >> 點 visit
![](https://drive.google.com/thumbnail?id=1qQmJGXKSKlNRZK98L8nDBFPXos4Ly5TW&sz=w1366)
看到成果囉(因為沒設定環境變數，所以是預設值)
![](https://drive.google.com/thumbnail?id=18t9Wb0ly9wBS4PlCxze_TDz390X81Q70&sz=w1366)

---

### 修改變數

✨ 首先回到剛剛的預覽>>Settings
看到環境變數
複製你的 VScode .env 貼到這邊 >> 按下儲存 (不會馬上生效)
![](https://drive.google.com/thumbnail?id=1OzzaM9ZwqcoE8dKJKHoQuJ5Zcs5Vw33E&sz=w1366)
到 detail >> 重新部署 (Redeploy)
![](https://drive.google.com/thumbnail?id=1BSxsGxDIQQoIo3yPuHKygfQSaWj-fJvC&sz=w1366)
部署完成~設定檔案生效了
![](https://drive.google.com/thumbnail?id=1WrvNldwOizbr6ItaB0ahRihaPxrCnsHn&sz=w1366)

---

## 附上範例 repo

https://github.com/dpes8693/vercel-deploy-express-example

只要看 4 個檔案

#### .env 設定檔(空值即可)

```md
APP_VARIABLE_1=""
APP_VARIABLE_2=""
APP_VARIABLE_3=""
```

#### config/index.js 程式環境變數

```js
import dotenv from "dotenv";

const { env } = process;
dotenv.config({
  path: ".env",
});

//凍結變數並設定預設值
const config = Object.freeze({
  APP_VARIABLE_1: env.APP_VARIABLE_1 === "true" || false,
  APP_VARIABLE_2: Number(env.APP_VARIABLE_2) || 1,
  APP_VARIABLE_3: env.APP_VARIABLE_3 || "",
});

export default config;
```

#### api/index.js

簡易 api 方便測試我們變數是否有設定成功

```js
import express from "express";
import globalConfig from "../config/index.js";

const app = express();
app.get("/", (req, res) =>
  res.send(`Hello World! ${JSON.stringify(globalConfig)}`)
);

// node ./api/index.js
app.listen(3001, () => console.log("http://localhost:3001/"));
```

#### vercel.json 部署設定

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/api" }]
}
```

上面是將網址重指向
原本: https://vercel-deploy-express-example.vercel.app/api 才能訪問
現在: https://vercel-deploy-express-example.vercel.app/ 就能訪問

---

## 小結

希望幫助到想要部署動態網站的朋友們~

採坑: 在 Vercel 設定檔加上 CORS 無效
https://vercel.com/guides/how-to-enable-cors#enabling-cors-in-a-next.js-app
