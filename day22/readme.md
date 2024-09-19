![hero](https://drive.google.com/thumbnail?id=1EPzQq_KmTBUZw_-65y-1YjQZdyM0oN0W&sz=w1366)

## 前言

不知道讀者們有沒有用過筆記軟體 Notion
其中有個功能叫做 Embed => 可以嵌入 pdf 檔案

今天來做一個在網頁上嵌入 pdf 的 MVP

我們會用到一個平常比較少看到的標籤叫做 `<object>`
它很神奇可以透過`data`屬性來引入

1. 圖片 [example](https://www.w3schools.com/TAgs/tryit.asp?filename=tryhtml_object_video)
2. html [example](https://www.w3schools.com/TAgs/tryit.asp?filename=tryhtml_object_html)
3. 影片 or 聲音 [example](https://www.w3schools.com/TAgs/tryit.asp?filename=tryhtml_object)
4. 外部資源

建議:

- 圖片還是要用 `<img>`
- html 還是要用 `<iframe>`
- video 還是要用 `<video>`
- audio 還是要用 `<audio>`  
  語意上比較清楚

## 成果

[網頁上嵌入 pdf_demo](https://dpes8693.github.io/ithome-2024-ironman/day22/pdf.html)

---

## 補充

1. 不是所有網址的 pdf 都能被嵌入
   ex: https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10380712
   像上面這個網址是先經過 java 寫的後端再返回 pdf 檔案
   如果用 postman GET 會被阻擋
   ![day-22-postman](https://drive.google.com/thumbnail?id=13sywQfwCKIsnmVZeqbxEsS6jMWVXCujf&sz=w1366)

2.文件有寫 usemap 屬性但是實際測試沒效果
拿昨天的影像地圖來改寫成 obeject 但沒作用
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object#usemap
https://www.w3schools.com/TAgs/tag_object.asp

3.若想要透過 html 按鈕控制 pdf 內容
ex: 跳頁
需要用其他套件才能實現

推薦套件:[pdfjs](https://github.com/mozilla/pdf.js/)

[PDF.js Previous/Next example](https://mozilla.github.io/pdf.js/examples/index.html#interactive-examples)

## 程式碼
