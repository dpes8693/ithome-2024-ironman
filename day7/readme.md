![](https://www.cognex.com/library/media/intro-topics/intro-to-barcode-reading/fig_5_intro_to_industrial_barcode_reading-730px.jpg?h=212&w=600&la=zh-TW&hash=B0AE18D9057E996A802EFC324F94036E)
[source](https://www.cognex.com/zh-tw/what-is/industrial-barcode-reading/1d-barcodes)

## 前言

日常生活中常常看到一堆條碼
條碼分成兩種

* 一維條碼(直線) ex: 水,電,瓦斯,電信等帳單會看到 
* 二維條碼(方塊) ex: QRcode

一維條碼又細分成很多種類型 ex:
```md
CODE128
CODE39
Codabar
EAN系列
    EAN-13
    EAN-8
    EAN-5
    EAN-2
    UPC (A)
    UPC (E)

...etc
```

想了解更多條碼規則可以看看這篇文章:
https://weberp.com.tw/front/article/68

本文要做出來的是`一維條碼`

使用的套件是:
https://github.com/lindell/JsBarcode



## 成果

查了一下規格
`ISBN條碼` => EAN13
`帳單上的一維條碼` => CODE39

最後做出一個 [條碼產生器](https://dpes8693.github.io/ithome-2024-ironman/day7/barcode.html)

![barcode](https://drive.google.com/thumbnail?id=1Jtbvplf4rppx4mtvMXPxS8mK_E4OWMUU&sz=w1366)

## 簡介 CODE39
Code 3 of 9
總共9條線(5黑4白)，其中3條是粗線

比較需要注意的是: 它可以包含 "空白符號" "減號"
`帳單上出現 "-" 解碼後不一定是真的是 "減號" 可能是 "空白符號"`

詳細資訊:
https://www.appsbarcode.com/Code%2039.php

## 簡介 ISBN
國際標準書號（英語：International Standard Book Number，縮寫為ISBN）

比較需要注意的是: 最上方出現的文字 "減號" 是要被跳過的
`ISBN 978－957－678－000－4`
input 其實是 `9789576780004`

詳細資訊:
https://www.appsbarcode.com/ISBN.php

## 程式碼

## 後記

這篇沒有講到太多程式細節，重點都放在介紹編碼上
因為程式其實套件都處理掉了 參數也很簡單([github](https://github.com/lindell/JsBarcode?tab=readme-ov-file#options)介紹的非常詳細)


## 更多資源

條碼編碼規則:
https://www.appsbarcode.com/barcode-encode.php

ISBN簡介:
https://isbn.ncl.edu.tw/NEW_ISBNNet/main_ProcessMenuItems.php?Ptarget=258&Pact=ViewContent&Pval=258&Pfld=Ffile

JsBarcode wiki:
https://github.com/lindell/JsBarcode/wiki#barcodes