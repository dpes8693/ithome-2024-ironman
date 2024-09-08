## 前言

PM: RD大大，客戶又有一個神奇的需求
我: (`・ω・´) 
PM: 就是希望在前台嵌入Youtube影片，影片播放完畢要做統計
我: ┳━┳ノ( OωOノ) 好...我來研究

## 拆解問題

我們都知道Youtube可以用iframe嵌入影片，那問題是怎麼知道他已經撥放完畢了?
經爬文後才知道，只能使用youtube_iframe_api 透過載入script來實現，普通的iframe做不到(就算用`MutationObserver`監聽屬性也無效)

文件: https://developers.google.com/youtube/player_parameters?hl=zh-tw

當前端能實現`監聽YT影片撥放完畢`之後就是靠API統計資料了~(就看客戶想統計規則和頻率)

## 成果

讀者們可以撥放 "進階" 的影片，看看撥放完畢後的效果
[demo網頁](https://dpes8693.github.io/ithome-2024-ironman/day11/youtube-watch-playstate-end.html)
![demo](https://drive.google.com/thumbnail?id=1FCwK1YsrMV6c9g4MGsgzyV1DHcqOY-zW&sz=w1366)

## 程式碼

---

## 重點
載入 YT iframe_api 後要知道幾件事情

### 1. 產生影片
```js
new window.YT.Player(`$標籤id字串`, `$參數`)
```
`$參數`重點講解我認為重要的`playerVars`

- 如果想要自動撥放
    - autoplay:1
        - 使用者要和網頁先互動過才生效，否則無作用(這個瀏覽器機制會在明天補充)
- 如果想要關閉推薦影片
    - rel: 0
        - 影片撥放完畢會列出推薦影片影響體驗
- 如果想禁用全螢幕功能
    - fs: 0
        - 如果希望影片撥放完畢後彈出model，這個要記的加上，否則fullscreen看不到model
- 如果想要顯示播放器控制項
    - controls: 1
        - 若為0則無法控制進度條&齒輪,字幕等底部功能
            
### 2. onYouTubeIframeAPIReady

若全域宣告一個方法`window.onYouTubeIframeAPIReady`
在`iframe_api`載入完成後會馬上被呼叫
適合時機: 載入網站時馬上要動態生成嵌入的影片

不然其實點縮圖的時候再靠 click 事件產生就好
縮圖範例:
![yt-img](https://i.ytimg.com/vi/lg5WKsVnEA4/default.jpg)



### 3. onStateChange(event)

`event.data`會拿到影片狀態數字

這邊列出不同狀態的意思

```js
YT.PlayerState = {
    "UNSTARTED": -1, //未開始
    "ENDED": 0, //撥放完畢
    "PLAYING": 1, //撥放中
    "PAUSED": 2, //暫停
    "BUFFERING": 3, //載入中
    "CUED": 5 //影片被指派或載入後，尚未開始播放
}
```


### 4. onReady(event)
影片載入好觸發
如果希望在影片載入好，馬上關閉聲音可以這樣寫:

```js
      function onPlayerReady(event) {
        event.target.mute();
      }
```

## 補充

影片縮圖可以使用 <https://i.ytimg.com>

參考:
https://electrify.tw/archives/355/youtube-thumbnail-downloader/