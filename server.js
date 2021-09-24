const https = require("https");

let options = {
  method: "GET",
  hostname: "rest.coinapi.io",
  path: "/v1/trades/latest",
  headers: { "X-CoinAPI-Key": "68DAF73F-FBA6-46C9-A180-C7B844153395" },
};
let chunks = [];
let request = https.request(options, function (response) {
  response.on("data", function (chunk) {
    chunks.push(chunk);
  });
});

console.log(chunks);
request.end();
