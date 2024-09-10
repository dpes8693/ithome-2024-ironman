![封面](https://drive.google.com/thumbnail?id=1iehOZr-XD0P1rr6-NSRW-vX8SXdhwo_s&sz=w1366)

## 前言
這幾天想要來介紹跟📱應用上比較相關的demo
不知道讀者們有沒有聽過`微信小程序`,`LIFF`,`PWA`
其實上述三個本質都是網頁(都是前端技術)
只是跑在不同的環境上，現在很多手機App都是利用前端技術開發的~

當工程師開發的前端應用跑在手機上要debug就相對麻煩
(當然可以透過接線連接手機去監聽，可是還是不夠便利)

今天來簡單介紹一個好用套件叫做`vConsole`
https://github.com/Tencent/vConsole

---

## 關於vConsole
這邊列出6個特色

### 將console收集起來
如封面圖左上
js常用的console都會被記錄起來~
```js
      //日志
      console.log("foo"); // 白底黑字
      console.info("bar"); // 白底紫字
      console.debug("oh"); // 白底黄字
      console.warn("foo"); // 黄底黄字
      console.error("bar"); // 红底红字
```

### 展開物件{},陣列[]等資料
如封面圖中上
就如同瀏覽器的控制面板，能展開資料做進一步的檢查

### 獨立一區做System Log
如封面圖右上
因為console太多重要資訊會被洗掉，有了這個功能可以把重要log集中在一起

```js
      // 'foo' 輸出到 System 面板
      console.log('[system]', 'foo'); 
```

### 監控Storage
如封面圖左下
瀏覽器儲存區也可以監聽，在多數情況支援儲存區地修改
* Cookie
* LocalStorage
* SessionStorage

### 監控Element
如封面圖中下
如同瀏覽器的檢查，可以查看元素DOM

### 監控Network
如封面圖右下
可以監聽`XMLHttpRequest`, `Fetch`, `sendBeacon`
當前端有能力監聽Request就能減少後端工程師寫一堆LOG找bug的情況發生

sendBeacon 比較少聽到，在之前的文章[PM 說: 要怎麼防止用戶沒存檔手滑關閉網頁?](https://ithelp.ithome.com.tw/articles/10348086)中有提到網頁生命週期

sendBeacon 通常是用在網頁`unload`,`visibilitychange`時發送數據到後端做統計用的
之後有機會再整理一篇文章

參考:
https://juejin.cn/post/7280783758618755108

---

## demo
[vConseol 超簡易demo](https://dpes8693.github.io/ithome-2024-ironman/day13/index.html)

很推薦想使用這個套件的讀者去玩玩[官方的範例](https://wechatfe.github.io/vconsole/demo.html)

## 程式碼


---

## 補充

如果是單純想在 Android 監聽網頁 console
可以安裝 `Kiwi Browser` App
![](https://www.techmarks.com/wp-content/uploads/2022/11/%E6%89%8B%E6%A9%9F%E5%AE%89%E8%A3%9DChrome%E6%93%B4%E5%85%85%E5%A4%96%E6%8E%9B%E6%95%99%E5%AD%B82.png)
最下面有"開發人員工具"

圖片來源:
https://www.techmarks.com/kiwi-browser/

