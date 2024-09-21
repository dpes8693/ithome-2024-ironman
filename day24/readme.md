![hero](https://drive.google.com/thumbnail?id=1hjW_C-J0amum_jofAwbIAK68V_h5RS0W&sz=w1366)

## 前言

不知道讀者們有沒有逛網站 or 部落格看到封面圖的效果
關鍵字: `網頁粒子特效`

比較知名的套件叫做: `particles.js`
提供了多種粒子效果
github: https://github.com/VincentGarreau/particles.js/

但我們今天只要做出 `封面圖`=>Nest 特效
使用的套件是: `canvas-nest`
https://github.com/hustcc/canvas-nest.js/tree/master

---

## 成果

[canvas-nest_demo](https://dpes8693.github.io/ithome-2024-ironman/day24/canvas-nest.html)

## 重點

1. 語法

```js
//第一個是DOM元素, 第二個是參數設定
new CanvasNest(area, config);
```

p.s: count 是指畫面要渲染幾個點(點會連成線)，太多會很卡頓

2. 邏輯
   那 canvas 是怎麼做出這樣的效果呢?
   先把功能拆細列出來

- 畫很多圓圈(座標隨機)
- if 在一定半徑，2 個圓圈要畫線連接
- 讓圓圈做位移(加速度隨機)
- 監聽滑鼠座標
- 圓圈要固定在滑鼠附近(固定半徑內)
- if 圓圈碰到牆壁，要反彈(變更加速度)

那程式碼是怎麼讓圓圈動起來?
ANS:和我們看電影&動畫概念很像逐幀渲染 => 快速計算出圈圈的座標 => 每秒渲染多次讓畫面動起來

3. requestAnimationFrame

每隔一段時間渲染其實直覺會想到 `setInterval()`
but...會有掉幀(卡卡)的問題，這個牽扯到螢幕渲染的機制
所以發明了[requestAnimationFrame](https://developer.mozilla.org/zh-TW/docs/Web/API/Window/requestAnimationFrame) 語法

只有一個參數: 做渲染動作 function

```js
//假設要渲染的方法叫做 draw(), 用法如下
window.requestAnimationFrame(draw);
```

推薦閱讀: [那些被忽略但很好用的 Web API / RequestAnimationFrame](https://ithelp.ithome.com.tw/articles/10267420)

## 程式碼

## 參考

https://github.com/sunshine940326/canvas-nest?tab=readme-ov-file

https://github.com/jc1144096387/canvas_nest/blob/master/test-clear.js

https://github.com/hustcc/canvas-nest.js/tree/master?tab=readme-ov-file#configuration
