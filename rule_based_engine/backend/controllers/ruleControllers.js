const Rule = require('../models/Rule');
const { create_rule, combine_rules, evaluate_rule } = require('../utils/astUtils');

// Create a new rule
exports.createRule = (req, res) => {
  const { rule_string } = req.body;
  const ast = create_rule(rule_string);

  Rule.create(rule_string, JSON.stringify(ast), (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: 'Rule created', ast });
  });
};

// Combine multiple rules
exports.combineRules = (req, res) => {
  const { rules } = req.body;
  const combinedAST = combine_rules(rules);

  res.status(200).json({ combinedAST });
};

// Evaluate a rule
exports.evaluateRule = (req, res) => {
  const { ast, data } = req.body;
  const result = evaluate_rule(ast, data);

  res.status(200).json({ result });
};
