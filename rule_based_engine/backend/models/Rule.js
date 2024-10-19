const db = require('../db');

// Create a new rule in the database
exports.create = (ruleString, astJson, callback) => {
  const query = 'INSERT INTO rules (rule_string, ast_json) VALUES (?, ?)';
  db.query(query, [ruleString, astJson], callback);
};

// Retrieve all rules from the database (Optional for listing rules)
exports.getAll = (callback) => {
  const query = 'SELECT * FROM rules';
  db.query(query, [], callback);
};
