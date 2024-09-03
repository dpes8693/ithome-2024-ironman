![shopee](https://drive.google.com/thumbnail?id=1scaq1tTFv4KXGQh3OCCS0BXciaNMA7TJ&sz=w1366)

## 前言

封面圖是蝦皮點了分享會彈出新的視窗~
日常網頁比較常用的是直接開新分頁，彈出小視窗比較少見一點
ex: "巴哈姆特的聊天室"

有想到某些網頁是類似的彈出視窗可以留言讓我知道唷~感恩!

---

某天...
PM: RD 大大我們偉大的客戶想了一個很神奇的新需求?
我: 拿尼!
PM: 他希望在 Table 點檢視按鈕彈出視窗
我: 視窗是指 Modal?
PM: 不是，是 window 的那個視窗
我: 這樣操作後台不是要不同視窗切換嗎?
PM: 對，但他們都習慣開多視窗比對資料~
我: .(๑¯ω¯๑)


首先下面這個是蠻常見的後台 Table-View
![table-list](https://drive.google.com/thumbnail?id=1zqg3JvYn1HM53EzhxSeVD6zdNECZ1R3h&sz=w1366)
![table-modal](https://drive.google.com/thumbnail?id=12u6Ki3WQQn9P57qYeC5DWSAtonONY1Nz&sz=w1366)

## 成果

我們要將 Modal 改成 window(資料拋過去顯示)
以下是成果:
[在 table 開新視窗的 demo](https://dpes8693.github.io/ithome-2024-ironman/day6/window-open-custom-html.html)

![demo](https://drive.google.com/thumbnail?id=1rUyQD3fcuhtSOZ5TmKuLNzVYBU_iozxY&sz=w1366)

## 程式碼

## 重點

1. 設定視窗大小&位置

文件:
<https://developer.mozilla.org/en-US/docs/Web/API/Window/open#windowfeatures>

```js
// 新視窗設定檔
const windowFeatures = "left=800,top=100,width=320,height=320";
// 產生新視窗
const newWindow = window.open("", "_blank", windowFeatures);
```

2. 寫入拋過去的資料

本文的範例比較單純沒有樣式
如果有指定的表單樣式，還要額外引入 css

```js
// 將 HTML 寫入
newWindow.document.write(htmlContent);
// 最後要關閉否則會一直轉圈圈
newWindow.document.close();
```
