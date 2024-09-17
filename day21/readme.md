## 前言

https://www.taiwantrip.com.tw/
台灣好行

封面圖是台灣好行的網站，首頁有個台灣地圖點了圖片會 filter 對應路線

今日目標做一個滑鼠移動台灣地圖上的區域要顯示名稱的 MVP

這個功能我們叫做 pictureMap，對一張圖片上的點位做標記

點到對應的地方就能觸發對應事件
介紹 `map` `area`

img 標籤要設定`usemap`#字號開頭

area 和 a 標籤蠻像的要記得設定`name`

## 小範例

```html
<img usemap="#planetmap" />
<map name="planetmap">
  <area shape="rect" coords="0,0,82,126" href="sun.htm" alt="Sun" />
  <area shape="circle" coords="90,58,3" href="mercur.htm" alt="Mercury" />
  <area shape="circle" coords="124,58,8" href="venus.htm" alt="Venus" />
</map>
```

重要屬性

- shape
  - default
  - rect 矩形
    - coords="(x1,y1,x2,y2)"
  - circle 圓形
    - coords="(x,y,radius)"
  - poly 多邊形
    - coords="(x1,y1,x2,y2,...,xn,yn)"
- coords
  - 透過逗號隔開

## 工具

https://www.image-map.net/

## 本日成果

圖片 1
圖片 2

## 重點

## 程式碼
