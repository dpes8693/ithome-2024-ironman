## 前言

思考一個問題:
總共 2 個網站 A,B
我在 A 網站，使用 iframe 嵌入另一個 B 網站 ，想在 A 網站點按鈕返回頂部(控制 B 網站 scrollbar)

這是有可能實現的嗎?

## 實驗

本次用到的語法比較少見一些

```js
iframe.contentWindow.scrollTo(0, 0);
```

先來看個[失敗的例子](https://dpes8693.github.io/ithome-2024-ironman/day10/iframe-scroll-to-fail.html)
![fail](https://drive.google.com/thumbnail?id=1DC2pdd4I9zcuUIL-WzA8hVR2efZlXYoU&sz=w1366)

若使用自己的同源的網站就可以正常
[成功的例子](https://dpes8693.github.io/ithome-2024-ironman/day10/iframe-scroll-to-success.html)

## 結論

為了安全性是無法控制別人家的網站(即便只有滾動軸都不行)
沒錯這就是前端開發很常聽到的
同源政策（Same-Origin Policy）
伺服器端要配合調整 CSP 才有可能做到

## 優質好文

https://ithelp.ithome.com.tw/articles/10306006

## 程式碼
