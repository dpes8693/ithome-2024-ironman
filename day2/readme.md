## 前言
主菜會需要
1. 廚具
2. 食材

同理要寫一個線上地圖有2個不可或缺的東西
`地圖套件` & `圖資`

以下我會使用來製作
* [leaflet](https://leafletjs.com/) 免費開源的地圖套件
* [OSM](https://osm.tw/about) 免費的地圖資訊

## 程式碼


## 語法
1. L.map()
```js
//https://leafletjs.com/reference.html#map
//綁定地圖並生成
L.map("map")
```
2. L.tileLayer()
```js
//https://leafletjs.com/reference.html#tilelayer

//第一個參數為圖資網址  s: subdomains; z: zoom; x,y: 經緯度 
//第二個參數是設定檔
//給予圖層(圖資)
          L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "© OpenStreetMap contributors",
          }).addTo(this.map);
```

3. L.latLng()
```js
//https://leafletjs.com/reference.html#latlngbounds
//透過經緯度生成一個點(還沒加到地圖上~)
const taipei101 = L.latLng(25.0339, 121.5646);
```

4. L.polyline()
```js
//https://leafletjs.com/reference.html#polyline
//產生一條線
//第一個參數是兩個點組成的[]
//第二個參數是線的設定檔
          const lineConfig = {
            color: "red",
            weight: 3,
          };
          const polyline = L.polyline([taipei101, daAnPark], lineConfig)
```

5. L.marker()
```js
//https://leafletjs.com/reference.html#marker
//透過點產生一個地標
L.marker(taipei101)
```

6. .addTo()
```js
//將生成的物件掛到地圖上顯示
//生成的地標 & 線 都具有的方法
//return this
```

7. .bindPopup()
```js
//https://leafletjs.com/reference.html#layer-bindpopup
//在地圖上綁定對話框
```

## 結語
今天我們學會了
1. 生成免費地圖
2. 生成地標
3. 生成線
4. 生成對話框

下一篇來做出一個公車路線圖(地標&線)~![/images/emoticon/emoticon42.gif](/images/emoticon/emoticon42.gif)