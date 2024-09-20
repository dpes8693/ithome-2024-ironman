## 前言

數學,物理,化學 ...etc 表達式
要怎麼顯示在網頁上呢? 總不可能全部都使用圖片吧
![/images/emoticon/emoticon06.gif](/images/emoticon/emoticon06.gif)
答案是 `Latex`

Latex 是一個非 WYSIWYG(所見即所得)的文字排版系統
格式會長這樣子:

```md
\begin{itemize}
\item[-] First thing

\item[+] Second thing
\begin{itemize}
\item[Fish] A sub-thing

      \item[Plants] Another sub-thing
    \end{itemize}

\item[Q] Third thing
\end{itemize}
```

有時候會遇到單頁行銷網站要放一些數學公式 or 化學式的需求
所以今天我們來找個套件實現一個 MVP

尋找套件時找到 2 個:

- 套件 1 mathjax
  - https://github.com/mathjax/MathJax-src
- 套件 2 katex
  - https://github.com/KaTeX/KaTeX

兩個都跑跑看:

![compare](https://drive.google.com/thumbnail?id=1nvW3YUwpyrgIbxerX8jE9Kzvd4EzrUE_&sz=w1366)

mathjax 支援多種輸入語法（如 LaTeX、MathML、AsciiMath）
katex 渲染比較快，故選它當作 demo

---

## 成果

[katex_demo](https://dpes8693.github.io/ithome-2024-ironman/day23/katex.html)
![demo](https://drive.google.com/thumbnail?id=13BpOg3I1wNe-ZaKNtPctV-0ZM53IINXW&sz=w1366)

## 程式碼

## 參考

https://zh.wikipedia.org/zh-tw/LaTeX

https://oi-wiki.org/tools/latex/

https://zhuanlan.zhihu.com/p/456055339

https://blog.gtwang.org/web-development/mathjax-latex-mathml/

https://www.osgeo.cn/mathjax/#google_vignette