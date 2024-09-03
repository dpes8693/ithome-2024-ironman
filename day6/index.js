function openNewWindow({
  name,
  description,
  category,
  price,
  stock,
  dateAdded,
}) {
  console.log(name, description, category, price, stock, dateAdded);
  // 新視窗設定檔
  const windowFeatures = "left=800,top=100,width=320,height=320";
  // 產生新視窗
  const newWindow = window.open("", "_blank", windowFeatures);

  // 動態生成 HTML 内容
  const htmlContent = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Window</title>
  <style>
  body {
    font-family: Arial, sans-serif;
  }
  </style>
  </head>
  <body>
          <h2 id="modalItemName">${name}</h2>
          <p id="modalItemDescription">${description}</p>
          <p><strong>Category:</strong> <span id="modalItemCategory">${category}</span></p>
          <p><strong>Price:</strong> <span id="modalItemPrice">${price}</span></p>
          <p><strong>Stock:</strong> <span id="modalItemStock">${stock}</span></p>
          <p><strong>Date Added:</strong> <span id="modalItemDate">${dateAdded}</span></p>
  </body>
  </html>
  `;

  // 將 HTML 寫入
  newWindow.document.write(htmlContent);
  // 最後要關閉否則會一直轉圈圈
  newWindow.document.close();
}
