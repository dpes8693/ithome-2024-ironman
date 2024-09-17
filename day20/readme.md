![hero](https://drive.google.com/thumbnail?id=1DxRHosIQwD1UkO7htzIkbArvS6vUqSPT&sz=w1366)

在數位大陸的圖像之域，圖片渲染是每個工程師的必修之課。這片大陸中，隱藏著四大技能，掌握它們，你就能輕鬆將圖片渲染到網頁上。這些技能分別是：**網址渲染**、**API 加載**、**本機上傳** 和 **Canvas 轉換**。現在，讓我們一起踏上這段冒險旅程，學習這四大{渲染秘法}。

---

### 🔴第一章：簡單且強大的技能 - **網址渲染 (Image URL)**

你的冒險從一個小村莊開始，這裡的居民只知道一種渲染圖片的簡單方式——通過圖片網址。他們告訴你，只要你擁有圖片的 URL，你可以輕鬆地將圖片渲染到網頁中。

你將圖片網址賦值給一個 `<img>` 元素的 `src` 屬性，圖片便立即顯示在頁面上。這是一個最基本的技能，也是一切冒險的起點。

```html
<img src="https://www.w3schools.com/html/pic_trulli.jpg" alt="image">
```

這個技能簡單卻實用，能夠迅速渲染網址圖片且不受跨域影響。

---

### 🔵第二章：API 的力量 - **ArrayBuffer x Blob x Object URL**

接著，你來到了**API 峽谷**，這裡的長老教給你更複雜但更強大的技能：通過 API 獲取圖片，並將二進制的 `ArrayBuffer` 轉換為 `Blob`，最終生成一個臨時的 Object URL。

你走進一個神秘的數位洞穴，使用 `fetch` API 從遠方伺服器中抓取圖片的二進制資料，將它轉換成 `Blob`，然後使用 `URL.createObjectURL()` 生成一個臨時 URL，將圖片顯示出來。

```js
      async function loadImage() {
        const response = await fetch(
          `https://fakeimg.pl/150x130/?text=fakeimg&font=noto`
        );
        const arrayBuffer = await response.arrayBuffer();
        const blob = new Blob([arrayBuffer]);
        const objectURL = URL.createObjectURL(blob);

        const img = document.createElement("img");
        img.src = objectURL;
        document.body.appendChild(img);
        // URL.revokeObjectURL(objectURL);
      }

      loadImage();
```

這個技能讓你能夠從 API 動態載入圖片，並將它轉換為可在網頁上顯示的形式，但此技能伴隨著跨域的副作用。學會這個使你對網頁圖片處理又邁向了一大步。

---

### 🟡第三章：本機上傳 - **File 轉 DataURL**

在數位大陸的深處，你進入了一個小鎮，這裡的居民熱愛拍攝和上傳圖片。你的任務是學習如何將用戶從本地上傳的圖片，轉換為網頁上可以即時顯示的格式。

這次，你需要掌握 **FileReader** 技能。你先讓用戶從本機上傳圖片，然後用 `FileReader.readAsDataURL()` 將圖片檔案轉換為 DataURL，並顯示在頁面上。

```html
<input type="file" id="fileInput">
<img id="preview">

<script>
  const fileInput = document.getElementById('fileInput');
  const preview = document.getElementById('preview');

  fileInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = function(e) {
      preview.src = e.target.result;
    };
    
    reader.readAsDataURL(file);
  });
</script>
```

這個技能讓你能夠處理用戶上傳的本地圖片，並即時將圖片轉換成 DataURL，顯示在頁面上，無需等待伺服器的回應。

---

### 🟢第四章：畫布的奧義 - **Canvas 轉 DataURL**

最終，你來到了數位大陸的中心，這裡有一座宏偉的 **Canvas 之塔**。塔內的守護者告訴你，通過操作 **Canvas**，你可以將圖片轉換成 DataURL。這是前端圖片處理的終極秘法之一，賦予你將畫布中的圖片內容轉換成 base64 字串的能力。

你在塔中使用 `canvas.toDataURL()`，將畫布中的圖片轉換成 DataURL，然後使用它來展示圖片。

```html
<canvas id="canvas" width="100" height="100" style="display: none"></canvas>
```
.

```js
      const canvas = document.getElementById("canvas");
      const ctx = canvas.getContext("2d");
      ctx.font = "15px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("canvas img", 40, 10);
      const dataURL = canvas.toDataURL();
      // create image
      const newImg = document.createElement("img");
      newImg.src = dataURL;
      document.body.appendChild(newImg);
```

這個技能讓你可以將任何在畫布上的圖像轉換為 DataURL，這不僅能夠用來顯示圖片，持續精進還可以用來進行圖片下載、分享等功能。

---

### 終章：掌握圖片渲染的力量

經過了這段冒險，你已經成功收集了四個強大的圖片渲染技能：**網址渲染**、**API 加載**、**本機上傳** 和 **Canvas 轉換**。這些技能讓你無論是在動態圖片載入、用戶上傳圖片，還是對畫布進行操作，都擁有了強大的能力。

你現在站在數位大陸的頂端，成為了一名圖片渲染大師，擁有了無數可能性。未來的每一次圖片處理，這些技能將是你強大的武器，助你在前端的世界中無往不利。


---

## 必讀好文
下面2篇文章是我看過整理最好的:

[js二进制及其相关转换全总结(File、Blob、FileReader、ArrayBuffer、Base64、Object URL、DataURL...)](https://juejin.cn/post/7395866692798201871)

[玩转前端二进制](https://mp.weixin.qq.com/s/QHi6BVM5Jt8XwZ_FKcRYsg)

## 後記
昨天有提到檔案相關的話題，今天請chatGPT協助我產生了這個小說
可以先閱讀此小說，知道一些以前沒聽過的名詞

前端剛學其實只要知道上面4種在html渲染圖片的方式就好
至於很多檔案相關的專有名詞(ex: Blob, File)後面慢慢學就好~

