const path = require("path");

const CWD = process.cwd();

module.exports = {
  includePaths: [
    path.resolve(CWD, "node_modules/bootstrap/scss"),
    path.resolve(CWD, "scss")
  ]
};
