![hero](https://drive.google.com/thumbnail?id=1Hmb3e78RPq7jNSn2BuH1cnaLHmO5JKS_&sz=w1366)

## 前言
現在智慧電視越來越普遍 
[封面圖](https://www.flatpanelshd.com/pictures/chromecast2020_2_large.jpg)是智慧電視的作業系統UI

標題說的`機上盒`英文是 set-top box (STB)
=>可理解成它是一台小小電腦(普遍都是安裝類似 Android 的作業系統)
可以安裝 Netflix, 愛奇藝, Disney+, Youtube ...etc 看影片的應用程式

在上面都是使用遙控器來操作UI，和一般網頁操作邏輯差很多的!
基本上不太會看到需要填表單的功能(試想在一個沒有語音功能的遙控器上填寫資料...)
![/images/emoticon/emoticon21.gif](/images/emoticon/emoticon21.gif)

今天來做2個demo
1. 在網頁上模擬遙控器操作(使用鍵盤)
2. focus 效果 

---

## 成果
[demo1 電腦網頁用方向鍵控制UI](https://dpes8693.github.io/ithome-2024-ironman/day25/simulate-tv.html) 
可以看到下圖有兩個框框
 - 黑色: 在鍵盤按下tab會選到畫面上第一個DOM元素，而button預設focus是黑色
 - 紅色: 這個是點了鍵盤方向鍵後透過keydown事件判斷選了哪個按鈕，加上class來改變顏色
![demo-keydown](https://drive.google.com/thumbnail?id=1CTCfejwWv2kpnBwlNk3cuGWVi2-SE5hj&sz=w1366)


[demo2 網頁UI被選取的效果](https://dpes8693.github.io/ithome-2024-ironman/day25/focus-style.html)  
```md
//認識基本規則
1.對網頁按下 tab 鍵 => 抓取第一個DOM => 出現focus效果
2.遙控器方向鍵
    - 右: 相當於按下 `tab` => 抓同列的下個DOM => 出現focus效果
    - 左: 相當於按下 `shift` + `tab` => 抓同列的上個DOM => 出現focus效果
    - 下: 抓下一列DOM的第一個 => 出現focus效果
    - 上: 抓上一列DOM的第一個 => 出現focus效果
```

![demo-focus](https://drive.google.com/thumbnail?id=1_iQQfrVuQUnktZXhUyJEXwaYRU6aRjfX&sz=w1366)

改顏色只要規範好`focus`的border即可產生效果
```css
      button:focus {
        border: 10px solid rgb(255, 153, 0);
      }
```

### 補充範例1重點
1. 宣告一個`currentFocusIndex`紀錄當前 位置在哪
2. 透過`keydown`事件監聽鍵盤，處理方式如下
 - 移除 focus 的className `focused`
 - 當為`上下左右`時算出`currentFocusIndex`，改值
 - 並給予正確的DOM元素 `focused`

```js
buttons[currentFocusIndex].classList.add("focused");
```

## 程式碼