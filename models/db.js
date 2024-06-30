const pgp = require("pg-promise")()
const { join } = require("node:path");

const cn = {
  host: "localhost",
  port: 5432,
  database: "testdb",
  user: "postgres",
  password: "admin"
}

const db = pgp(cn)
const filePath = join(__dirname, "./create-test-tables.sql")

// db.query("SELECT 1 + 1 AS result")
//   .then((result) => console.log(result))

const query = new pgp.QueryFile(filePath)
db.query(query)

module.exports = db