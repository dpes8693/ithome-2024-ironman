## 實現重點

加上`contextmenu`事件監聽，並且阻止預設瀏覽器行為`event.preventDefault()`
* 當監聽到右鍵觸發將選單顯示出來
* 當`click`時再把選單隱藏

請參考:
https://developer.mozilla.org/en-US/docs/Web/API/Element/contextmenu_event

## Claude Demo
https://claude.site/artifacts/7f9d5ffe-a2b9-4442-8d25-d988ab5c0bd6

上面的範例是: 對 `<h1>` `<img>` 標籤右鍵就出現 客製化選單
P.S 在手機上沒有滑鼠右鍵，是長按觸發

## 程式碼

附上改寫後的程式碼

## 生活中的例子
google地圖 對地點圖標右鍵會發現出現選單
![](https://drive.google.com/thumbnail?id=1wgbfMJvkVRMS5C3j4ss2jrEeFzuCqJbJ&sz=w1366)

## 語法學習
https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode