![雷達圖example](https://kisa.ne.jp/wp-content/uploads/2020/10/%E3%83%AC%E3%83%BC%E3%83%80%E3%83%BC-01.jpg)

## 前言

雷達圖是我們日常生活蠻常看到的一種圖表~

某天...
PM: RD 大大網頁的雷達圖會很難做嗎?
我: 不會呀，有很多現成的套件改改參數就能實現
PM: 那反向雷達圖?
我: 反向?!
PM: 對，最外圈是 0;最內圈是 100;然後要圓形的
我: 好...我努力研究

## 成果

使用 [chartjs](https://www.chartjs.org/docs/latest/charts/radar.html) v4.4.4 實現

先實現一版正常的圓形雷達圖
[正向的範例](https://dpes8693.github.io/ithome-2024-ironman/day4/chartjs-radar.html)
![正向](https://drive.google.com/thumbnail?id=14W8cTqmEpAKxE87n5TjZdX5ORVbJSqz-&sz=w1366)

再實現反向的圓形雷達圖
[反向的範例](https://dpes8693.github.io/ithome-2024-ironman/day4/chartjs-radar-reverse.html)  
![反向](https://drive.google.com/thumbnail?id=1kMEhJjcA5YikhpAdspN_-SRi_NPOiWsd&sz=w1366)

如果有更好的方式再麻煩各位開發者留言告知我~感恩

## 程式碼

## 重點

因為最大值是 100; 故反向就是 `100 - n`

1. datasets 資料要反向

2. tooltip 顯示的文字要反向

文件:
<https://www.chartjs.org/docs/latest/configuration/tooltip.html#tooltip-callbacks>

```js
// 可以針對 label 回傳做客製化
              tooltip: {
                callbacks: {
                  label: (context) => {
                    const originalValue = context.raw;
                    const reversedValue = 100 - originalValue;
                    return `${context.dataset.label || ""}: ${reversedValue}`;
                  },
                },
              },
```

3. ticks 間隔要反向
文件:
<https://www.chartjs.org/docs/latest/axes/radial/linear.html#common-tick-options-to-all-axes>

```js
                // 每圈的間隔
                ticks: {
                  min: 0,
                  max: 100,
                  stepSize: 25,
                  // 內部框和點回傳值
                  callback: (value, index, values) => {
                    return 100 - value;
                  },
                },
```

## 後記

其實這個需求的 tooltip 是問 chatGPT 才知道能這樣使用 callback
否則面對 chartjs 這種設定檔非常多的庫
要實現特定需求非常費力~

若讀者有遇到這麼特別的需求，希望這篇有幫助到你(記得回來留言讓我知道)