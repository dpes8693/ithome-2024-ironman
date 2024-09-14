![](https://drive.google.com/thumbnail?id=1BLb4txJ_1ezhpkMKo9aTA2SLvBrvL37L&sz=w1366)

## 前言
封面圖是 OPENPOINT App 的服務編輯功能
日常生活中最常看到需要拖曳排序的情境是
1. 我的最愛(服務)
2. 卡片列表

Drag and Drop 簡稱 `DnD`

如果要自己實現拖曳排序的話
1. 程式碼會變得很長
2. 可能會寫出效能很差的程式碼(不斷渲染)

drag相關的事件有:
dragstart, drag, dragend, dragenter, dragover, dragleave, drop
詳情可以參考 [PJ大大的這篇文章](https://pjchender.blogspot.com/2017/08/html5-drag-and-drop-api.html?m=1)

因此我們要使用`SortableJS`這款老牌的排序程式庫來實現

github: https://github.com/SortableJS/Sortable

---

## 成果

[對卡片列表上的icon拖曳來排序demo](https://dpes8693.github.io/ithome-2024-ironman/day17/sortblejs.html)
讀者們可以在手機&電腦上嘗試拖曳排序

![demo](https://drive.google.com/thumbnail?id=1qsugGMNvh6frqMdok40rIE5Y4WpCR5on&sz=w1366)

上面的demo是參考[官網上範例](https://sortablejs.github.io/Sortable/#handle)，demo將範例改成 booststrap5
並附上了[官網的Grid範例](https://sortablejs.github.io/Sortable/#grid)

### 補充

1.建立的差異
```js
//以下兩個效果一樣
Sortable.create()
new Sortable()
```
2.怎麼關閉&開啟排序?

可以參考: [disable範例](https://jsbin.com/sewokud/edit?js,output)
```js
//初始化用變數存起來
var sortable = Sortable.create(list);

switcher.onclick = function () {
//.option取屬性的值
	var state = sortable.option("disabled"); // get
//修改option屬性值
	sortable.option("disabled", !state); // set
};
```

### 參數相關文件
https://github.com/SortableJS/Sortable?tab=readme-ov-file#options


## 搭配其他前端框架

上面的範例僅 demo UI 最後還是得回傳 data

可參考:
https://sortablejs.github.io/Sortable/#frameworks

