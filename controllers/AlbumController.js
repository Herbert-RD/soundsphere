const db = require('../models/db.js');
const { albums } = require('../models/sql.js');

module.exports = {
  Get: (req, res) => {
    db.query(albums.add)
    res.send('NODEMON TEST')
  }
}