![bus+](https://drive.google.com/thumbnail?id=1Cx2x87MYm1IttFemKS8U7nrJJQPbDpEB&sz=w1366)

## 前言

封面圖是 Bus+ App，紅色框框的設計在 App 上很常見
它的名稱叫做 `Bottom sheets`
今天目標是寫一個網頁版

更多設計請參考:
https://m2.material.io/components/sheets-bottom#standard-bottom-sheet

### 比較需要注意的地方

和網頁的[分割視窗線](https://tomkp.github.io/react-split-pane/?path=/story/basic--basic-horizontal)最大的不同是手機能做出"甩動操作"
甩動=移動超過一定距離就會觸發高度變化

常見的底部高度比例

1. 100% 撐滿
2. 50% 半高
3. 30% 最小高度
4. 0% 隱藏

---

## 成果

[手機上的 botttom-sheet](https://dpes8693.github.io/ithome-2024-ironman/day18/app-bottom-sheet.html)

![demo-bottom-sheet](https://drive.google.com/thumbnail?id=1ziDqll4dQyKX6EaabDSrp7BCuyMP8Mnq&sz=w1366)

## 重點

0.計算比例是相反的; 因為計算高度是由上而下

```js
//下面 30%
this.ratio = 0.7;
//下面 50%
this.ratio = 0.5;
//下面 100%
this.ratio = 0;
```

1. 計算出現在滑到螢幕高度占比
   https://www.shubo.io/get-bounding-client-rect/

```js
// 先計算距離
const y = touch.clientY - containerRect.top;
// 計算比例(%)
比例 = y / containerRect.height;
```

2. 移動時調整高度
   https://www.runoob.com/jsref/prop-element-offsetheight.html
   ![](https://www.runoob.com/wp-content/uploads/2021/10/myXyiL.png)

```js
        adjustRatio(inputRatio) {
          // 限制比例
          this.ratio = Math.max(0.001, Math.min(0.99, inputRatio));
          const containerHeight = container.offsetHeight;
          // 上面的高度
          const topHeight = containerHeight * inputRatio;
          // 下面的高度
          const bottomHeight =
            containerHeight - topHeight - divider.offsetHeight;
          // 調整CSS
          topPane.style.flex = `0 0 ${topHeight}px`;
          bottomPane.style.flex = `0 0 ${bottomHeight}px`;
        },
```

## 程式碼

如果有更好的寫法歡迎留言分享~
