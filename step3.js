
const fs = require("fs");
const axios = require("axios");

function cat(path) {
  return fs.readFileSync(path, "utf8");
}

async function webCat(url) {
  const resp = await axios.get(url);
  return resp.data;
}

async function main() {
  const args = process.argv.slice(2);

  // If "--out" is provided
  if (args[0] === "--out") {
    const outFile = args[1];
    const pathOrUrl = args[2];

    let content;

    if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) {
      content = await webCat(pathOrUrl);
    } else {
      content = cat(pathOrUrl);
    }

    fs.writeFileSync(outFile, content);
    console.log(`Wrote to ${outFile}`);
  } else {
    // No --out, just print to console
    const pathOrUrl = args[0];

    if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) {
      const content = await webCat(pathOrUrl);
      console.log(content);
    } else {
      const content = cat(pathOrUrl);
      console.log(content);
    }
  }
}

main();
