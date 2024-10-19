const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'rule_engine'
});

module.exports = {
  connect: (callback) => connection.connect(callback),
  query: (sql, args, callback) => connection.query(sql, args, callback),
  close: () => connection.end()
};
