//!! Node.js 18 LTS or later !!
// npm i cheerio
const cheerio = require("cheerio");

main();

async function main() {
  const url =
    "https://www.fire.taichung.gov.tw/caselist/index.asp?Parser=99,8,226";

  const response = await fetchUrl(url, handleTaichungFireCrawler);
  console.log(response);
}

function handleTaichungFireCrawler(body) {
  const $ = cheerio.load(body);

  const dataList = [];
  const listItems = $(".rwd-table > li:not(.list_head)");

  const getAddress = (dom) => {
    const childBtn = $(dom).find("button");
    return childBtn.attr("js_addr").trim();
  };
  const getDomText = (dom) => $(dom).text().trim();

  listItems.each((index, element) => {
    const fields = $(element).find("span");

    const data = {
      受理時間: getDomText(fields.get(0)),
      案類: getDomText(fields.get(1)),
      案別: getDomText(fields.get(2)),
      發生地點: getAddress(fields.get(3)),
      派遣分隊: getDomText(fields.get(5)),
      執行狀況: getDomText(fields.get(6)),
    };
    dataList.push(data);
  });

  return {
    result: dataList.length > 0,
    message: dataList.length > 0 ? "ok" : "無資料",
    data: dataList,
  };
}

async function fetchUrl(url, func) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const body = await response.text();
    return func(body);
  } catch (error) {
    console.error("Fetch error:", error);
    return { result: false, message: error.message };
  }
}

/** cmd
 * npm init
 * npm i cheerio
 * node .\index.js
 */
