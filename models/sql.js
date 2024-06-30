const { QueryFile } = require("pg-promise");
const { join } = require("node:path");


function sql(filepath) {
  const fullpath = join(__dirname, filepath);
  return new QueryFile(fullpath);
}

module.exports = {
  albums: {
    add: sql("./albums/album-insert.sql")
  }
}