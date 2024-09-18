## 前言

![hero](https://drive.google.com/thumbnail?id=1GX3S8YoL5XBpZjDVuo2GNjlIhLIsciTD&sz=w1366)

封面圖是[台灣好行](https://www.taiwantrip.com.tw/)的網站，有個可互動的台灣`img`

今日的目標是做一個`台灣地圖上的區域 hover 時要顯示該區域`的 MVP
借台灣好行的圖片來用~

以前第一次看到在一張圖片上點不同位置可以做不同事情很驚訝!
這個我們叫做 Image Maps (影像地圖)
對一張圖片上的特定區域做上`標記`，就能觸發對應事件

## 語法範例

```html
<img usemap="#myMap" src="img.png" />
<map name="myMap">
  <area shape="rect" coords="0,0,82,126" href="" alt="" />
  <area shape="circle" coords="90,58,3" href="" alt="" />
</map>
```

- `img` 標籤要設定`usemap`="#字號開頭加上 name"
- 會有 2 個比較少看見的標籤 `map`和`area`
  - area 和 a 標籤蠻像的要記得設定`name`

area 的重要屬性

- shape
  - rect 矩形
    - coords="(x1,y1,x2,y2)"
  - circle 圓形
    - coords="(x,y,radius)"
  - poly 多邊形
    - coords="(x1,y1,x2,y2,...,xn,yn)"
- coords
  - 透過逗號隔開的數字參數(要跟著 shape)

附上[w3c 文件](https://www.w3schools.com/tags/att_area_coords.asp)

## 好用的工具

https://www.image-map.net/

這邊介紹一個工具是可以上傳圖片，直接在網頁上標記座標
最後幫你產生程式碼，超方便!

![tool](https://drive.google.com/thumbnail?id=1brJ1c4RW0GQZh_f1AcLBAzCukdVght8n&sz=w1366)
上圖可以清楚呈現不同 shape 的效果
若 shape 空白預設是 rect

## 成果

[demo](https://dpes8693.github.io/ithome-2024-ironman/day21/index.html)

## 程式碼
