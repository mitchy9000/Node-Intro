const fs = require("fs");
const axios = require("axios");

function cat(path) {
  const contents = fs.readFileSync(path, "utf8");
  console.log(contents);
}

async function webCat(url) {
  const resp = await axios.get(url);
  console.log(resp.data);
}

const arg = process.argv[2];

if (arg.startsWith("http://") || arg.startsWith("https://")) {
  webCat(arg);
} else {
  cat(arg);
}
