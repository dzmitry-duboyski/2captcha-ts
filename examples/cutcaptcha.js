const TwoCaptcha = require("../dist/index.js");
require('dotenv').config();
const APIKEY = process.env.APIKEY
const solver = new TwoCaptcha.Solver(APIKEY);

solver.cutCaptcha({
  pageurl: "https://mysite.com/page/with/cutcaptcha",
  miseryKey: "d4605432877465c9274df9e7633d117700faef26", 
  apiKey: "SAs61IAI",
})
.then((res) => {
  console.log(res);
})
.catch((err) => {
  console.log(err);
})