![foodpanda](https://lh3.googleusercontent.com/d/16kagJGUxxHl6yBpkxUrtpbVESEkUWjMk=w1366?authuser=0)

## 前言

今天我們來思考在`外送平台`常見的
拖曳地圖抓地址的功能怎麼做?

## 拆解問題

1. 怎麼抓取地圖中心的的經緯度?
2. 怎麼將經緯度轉成地址?
3. 怎麼在移動時更改 tooltip 的文字?

當以上問題解完其實就能寫出來了

## 重點

### A1

抓目前題圖的中心點 經緯度

```js
map.getCenter();
//{
//     "lat": 24.153940200805668,
//     "lng": 120.6743698120117
// }
```

### A2

透過免費的 API 將經緯度轉地址名稱
可以到以下官網試試看:
https://nominatim.openstreetmap.org/ui/reverse.html

我們需要"address"的資訊

```js
// "address": {
//     "house_number": "210號",
//     "road": "五權一街",
//     "neighbourhood": "大忠里",
//     "suburb": "西區",
//     "village": "田心",
//     "city": "臺中市",
//     "ISO3166-2-lvl4": "TW-TXG",
//     "postcode": "403",
//     "country": "臺灣",
//     "country_code": "tw"
// },
```

### A3

```js
//地圖開始移動:隱藏 tooltip
map.on("movestart", () => {
  this.centerMarker.closeTooltip();
});
//地圖移動中:更改 marker 位置
map.on("move", () => {
  const center = map.getCenter();
  this.centerMarker.setLatLng(center);
});
//地圖移動完成:更改文字後，開啟 tooltip
map.on("moveend", () => {
  updateMarker();
  this.centerMarker.openTooltip();
});
```

```js
// 先取得 marker 的經緯度再轉換成地址
const updateMarker = () => {
  const latlng = this.centerMarker.getLatLng();

  updateAddress(latlng, this.centerMarker);
};

//call api 轉換後將 marker 文字更改
function updateAddress({ lat, lng }, centerMarker) {
  centerMarker.setTooltipContent("Loading...");
  const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const address = data.display_name || "No address found";
      const reverseAddress = address.split(",").reverse().join("");
      centerMarker.setTooltipContent(reverseAddress);
    })
    .catch(() => {
      centerMarker.setTooltipContent("Unable to load address");
    });
}
```

## 成果

![demo1](https://drive.google.com/thumbnail?id=1btccPyE_BNn6_nVlsQiWUkMbnksGLUv_&sz=w1366)

[demo1](https://dpes8693.github.io/ithome-2024-ironman/day4/leaflet-osm-move-map-get-address.html)
[demo2](https://dpes8693.github.io/ithome-2024-ironman/day4/leaflet-osm-movable-marker.html)

## 程式碼
