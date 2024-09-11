![](https://www.guidingtech.com/wp-content/uploads/Delete-single-call-log.png)
## 前言

封面圖是 ios 常見的設計滑動出現刪除按鈕(swipe to delete)
今天來分析怎麼做出來

## 拆解問題
1. 怎麼判斷滑動(要知道方向)
2. 滑動時要修改卡片UI

A1: 監聽事件 (`touchstart`, `touchmove`, `touchend`); 記住touch當下的x & 離開的x，兩者求移動距離
A2: 利用css的[translateX](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translateX)

---

## Touch 事件

![](https://drive.google.com/thumbnail?id=1eb7kbTw9niBtf-O3lxKu1MsY2co8qk_X&sz=w1366)

以下請chatGPT解釋一下各參數
```md
在 touch 事件中，以下是每個屬性的解釋：

clientX: 觸控點在視口（viewport）中的 X 軸位置，單位為像素，從瀏覽器內容區域的左上角（不包括邊框或滾動條）開始計算。

clientY: 觸控點在視口中的 Y 軸位置，單位為像素，從瀏覽器內容區域的左上角開始計算。

force: 用於表示觸控的壓力大小，範圍通常為 0 到 1，1 表示全力壓下，0 表示沒有壓力。

identifier: 每個觸控點的唯一標識符，用來區分多點觸控中的不同觸控點。

pageX: 觸控點相對於整個頁面的 X 軸位置，包含頁面的滾動距離。這是指相對於頁面左上角（包括滾動）的位置。

pageY: 觸控點相對於整個頁面的 Y 軸位置，包含頁面的滾動距離。

radiusX: 觸控點的橢圓邊界在 X 軸方向的半徑，通常用來描述觸控的區域大小。

radiusY: 觸控點的橢圓邊界在 Y 軸方向的半徑。

rotationAngle: 觸控點的旋轉角度，範圍為 0 到 360 度，用來描述觸控點橢圓的旋轉。

screenX: 觸控點在整個螢幕上的 X 軸位置，從螢幕左上角（包含瀏覽器的邊框和滾動條）開始計算。

screenY: 觸控點在整個螢幕上的 Y 軸位置，從螢幕左上角開始計算。

這些數據通常在處理多點觸控（例如手勢識別、滑動事件）時非常有用，可以幫助開發者更精確地理解觸控事件的行為。

```

## 成果

這邊因為要縮減操作DOM的程式碼，使用了 cdn-vue

讀者可以試試看[最後做出來的效果](https://dpes8693.github.io/ithome-2024-ironman/day14/ios-swipe-to-delete-demo.html)

![demo](https://drive.google.com/thumbnail?id=1V_eR67t9v_DXkSXHD96elXRfIKuJZz1M&sz=w1366)

## 程式碼


## 重點


1. touchStart(開始點擊)
記錄起始的x
```js
this.startX = event.touches[0].clientX;
```

2. touchMove(移動中)
```js
//記錄當下的x
this.currentX = event.touches[0].clientX;
//算出移動距離
const diffX = this.startX - this.currentX;

//判斷移動距離是否符合移動條件
  if (diffX > 5 || diffX < -5) {
    this.isSwiping = true;
    // Prevent scrolling
    event.preventDefault();
  }
//在範圍內則修改UI
  if (diffX > 0 && diffX <= 80) {
    this.items[index].offset = -diffX;
    return;
  }
```

3. touchEnd(點擊結束)

```js
  const diffX = this.startX - this.currentX;
  //當結束時移動距離大於40則判斷為觸發，觸發會往左移動80px
  const finishOffset = diffX > 40 ? -80 : 0;
  this.items[index].offset = finishOffset;
  this.isSwiping = false;
```
