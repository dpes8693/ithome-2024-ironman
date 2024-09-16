![hero](https://drive.google.com/thumbnail?id=1B20POGkITnIOgz-InTsmLMX_wfUQ3pWC&sz=w1366)

## 前言

封面圖是蠻常看見的身分證上傳押上浮水印
今天來實現這個功能的 MVP

## 成果

[上傳圖片前端加上浮水印文字，並限制圖片大小 dmeo](https://dpes8693.github.io/ithome-2024-ironman/day19/canvas-water-mark.html)

![demo](https://drive.google.com/thumbnail?id=1PX59gJ9047NcTTTssx2YQCzj5WOH22la&sz=w1366)

## 說明

今天的功能其實蠻進階的
關於檔案相關的轉換留到之後的文章再來談，有興趣的讀者可以先看看[這篇](https://lrh21g.github.io/blogs/%E5%89%8D%E7%AB%AF/JavaScript/BOM/file.html)

實現的流程:

1. 監聽 input "change" 事件
2. 取得圖片檔案(file)
3. 圖片轉 Bitmap
4. 將 Bitmap 丟到 canvas 做文字加工
5. canvasToBlob
6. blobToBase64
7. 將 Base64 圖片渲染到畫面上

### 重點 1 createImageBitmap

```js
const img = await createImageBitmap(file);
```

[createImageBitmap() 文件](https://developer.mozilla.org/zh-CN/docs/Web/API/createImageBitmap)
createImageBitmap 比 `new Image()` 效能好一些
參考: https://blog.csdn.net/qq_38913715/article/details/112346199

### 重點 2 設置圖片最大寬度和高度

邏輯: 先判斷上傳的圖片寬度 or 高度是否超過 最大值 => 是的話要做比例縮放

舉例:
假設有圖片是 1500x600
計算縮放比例 `Math.min(300/1500, 300/600) = Math.min(0.2, 0.5) = 0.2`
故
width = 1500x0.2 = 300
height = 600x0.2 = 120

```js
// 設置最大寬度和高度
const maxWidth = 300;
const maxHeight = 300;
// 計算圖片縮放比例
let width = img.width;
let height = img.height;
if (width > maxWidth || height > maxHeight) {
  const ratio = Math.min(maxWidth / width, maxHeight / height);
  width = width * ratio;
  height = height * ratio;
}
// 設置canvas的大小
canvas.width = width;
canvas.height = height;
```

### 重點 3 canvas 語法

這部分就是看語法做事了

1. 在 canvas 畫圖(要指定大小)
2. 在 canvas 押上文字

[drawImage() 文件](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage)
[fillText() 文件](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillText)

```js
// 繪製圖片
ctx.drawImage(img, 0, 0, width, height);
// 樣式設定
ctx.font = "30px Arial";
ctx.fillStyle = "rgba(255, 255, 0, 0.9)"; // 白色半透明
ctx.textAlign = "center";
ctx.textBaseline = "middle";
// 繪製浮水印文字 放在中間
ctx.fillText("我是浮水印", width / 2, height / 2);
```

## 程式碼

祝大家中秋佳節愉快~
