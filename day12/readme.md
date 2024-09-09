## 前言

以前有些網頁一進去會播放背景音樂，現在都看不到了

昨天學了透過youtube_iframe_api，今天來聊聊為什麼
`為什麼網頁不能一開啟就自動播放聲音?`

原因是 Google Chrome 在 2018 年宣布 Autoplay policy
* Improved user experience
* minimized incentives to install ad blockers 
* reduced data consumption

想做到:
改進使用者體驗，降低使用者安裝廣告攔截器的誘因，並減少數據消耗

來源:
https://developer.chrome.com/blog/autoplay/

---

## 實驗
來寫一個實驗測試自動播放 (youtube, mp4, mp3)

`注意音量`
讀者們可以開啟[demo](https://dpes8693.github.io/ithome-2024-ironman/day12/index.html)
點"切換"按鈕

```md
autoplay=1 mute=0
autoplay=1 mute=1
autoplay=1 mute=0
...loop
```

如果第一次進入網頁沒有觸發自動播放，代表瀏覽器自動播放政策是正常的(被攔截)

---

## 什麼時候能自動播放?

記住知道3點：

* 使用者與網域有互動（點擊、觸摸等）。
* 在電腦版，使用者的媒體參與度指數（Media Engagement Index，MEI）達到門檻，表示使用者之前已經播放過帶有聲音的影片。
* 使用者已將該網站添加到其手機主頁，或在桌面上安裝了 PWA。

今天學到一個新名詞

### Media Engagement Index

在網頁開啟以下連結

| chrome      | edge     |
| ------------- | ------------- |
| about://media-engagement | edge://media-engagement/ |

![](https://drive.google.com/thumbnail?id=1a_CBq9GVTEL8PzXONQOlA2ztZCitaEw4&sz=w1366)

會看到一個評分表
上面有寫 `Lower Threshold	0.2`
若大於0.2就算高分，符合剛剛說的第三點自動播放政策(可以自動播放)

## 最後

有沒有可能其實是 Google 團隊太多人被網頁自動播放嚇到所以才推這個政策
![/images/emoticon/emoticon01.gif](/images/emoticon/emoticon01.gif)

