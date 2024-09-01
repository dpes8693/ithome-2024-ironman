![taichung-map](https://drive.google.com/thumbnail?id=1OjwjrRUMlSxIGhk4Gb4rZIG_uNRlggKI&sz=w1366)

## 前言
昨天我們學了 `leaflet` 產生地圖&圖標&畫線
今天我們來思考常見的公車地圖如何實作出來

## 拆解題目
公車路線圖有2種資料
1. 站牌
2. 路線

我們都知道2點連成一線，路線其實就是超級多的點連接起來~
因此我們只要有辦法拿到該地區公車的`站牌JSON` & `路線JSON` 
搭配昨天學的方法就可以完成我們的目標!

### 如何取資料(JSON)
查了一下發現
"交通部"有建立一個「運輸資料流通服務平臺」TDX(Transport Data eXchange)
![tdx-1](https://drive.google.com/thumbnail?id=1h9bDeYnE3KQdmAxvUDPw66THNRPa8glU&sz=w1366)

實際開發上需要call他們的API(要註冊會員拿到金鑰)

因為我們是demo只要知道JSON即可
所以直接找他們的範例來看:

---

(筆者撰寫日期: 2024/08/31, 不確定日後會不會改版)
以下拿台中市的289公車為例 
1. 進入查詢公車路線的網站
https://ticp.motc.gov.tw/motcTicket/tools?tab=query-tab&city=Taichung&queryType=routeName&keyword=
2. 搜尋 289 >> 點Table的TXG289 (網頁的檢查記得開著)
3. 會看到call了3隻API
![tdx-bus](https://drive.google.com/thumbnail?id=1GN5oajz7AaoUSxd7fBwtsd4guE4x-9y2&sz=w1366)

4. 第1隻有"Stops"站牌資訊; 第3隻有"Geometry"公車路線資訊
 ![tdx-bus-api](https://drive.google.com/thumbnail?id=1TRE519jwKt-F6bAmsVig7CErGdgL-ESA&sz=w1366)
 
 ## 成果
 仿造台中公車縮放比例小時只顯示數字
 ![](https://drive.google.com/thumbnail?id=1dDbW_-MuiQ6HE_UQP2AuX7VgJMywG2aC&sz=w1366)
 放大時顯示數字和站名
 ![](https://drive.google.com/thumbnail?id=1lwsPPmlwGWVsVs29Rz-DElYFdS5atw7i&sz=w1366)
 
 ## 程式碼
 `注意`:站牌資料(stopData)&路線資料(routeData) 這邊省略

  ## 重點
  1. 更改提示框的文字方法
  marker.setTooltipContent(要改的文字);
  
  2. 綁定縮放的事件監聽
  this.map.on("zoomend", updateMarkers);