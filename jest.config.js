const fs = require("fs");
const path = require("path");
const resolve = require("resolve");

module.exports = {
  //setupFilesAfterEnv: fs.existsSync("src/setupTests.js")
  // //  ? ["<rootDir>/src/setupTests.js"]
  //  : [],

  setupFilesAfterEnv: ["./setupTests.js"],
};
