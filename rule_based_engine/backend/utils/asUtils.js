class Node {
    constructor(type, left = null, right = null, value = null) {
      this.type = type;
      this.left = left;
      this.right = right;
      this.value = value;
    }
  }
  
  // Parse rule string and create AST
  function create_rule(ruleString) {
    const tokens = ruleString.split(' ');
    const stack = [];
  
    for (let token of tokens) {
      if (token === 'AND' || token === 'OR') {
        const right = stack.pop();
        const left = stack.pop();
        stack.push(new Node('operator', left, right, token));
      } else if (token.match(/[><=]/)) {
        const value = tokens[++i];
        stack.push(new Node('operand', null, null, { operator: token, value }));
      } else {
        stack.push(new Node('operand', null, null, token));
      }
    }
  
    return stack[0]; // Root node of the AST
  }
  
  // Combine multiple ASTs
  function combine_rules(ruleList) {
    let root = null;
  
    for (let rule of ruleList) {
      const ast = create_rule(rule);
  
      if (!root) {
        root = ast;
      } else {
        root = new Node('operator', root, ast, 'OR');
      }
    }
  
    return root;
  }
  
  // Evaluate the AST
  function evaluate_rule(node, data) {
    if (node.type === 'operand') {
      if (typeof node.value === 'object') {
        const attribute = node.left;
        const operator = node.value.operator;
        const value = node.value.value;
  
        if (operator === '>') return data[attribute] > value;
        if (operator === '<') return data[attribute] < value;
        if (operator === '=') return data[attribute] === value;
      } else {
        return data[node.value];
      }
    } else if (node.type === 'operator') {
      const leftEval = evaluate_rule(node.left, data);
      const rightEval = evaluate_rule(node.right, data);
  
      if (node.value === 'AND') return leftEval && rightEval;
      if (node.value === 'OR') return leftEval || rightEval;
    }
  
    return false;
  }
  
  module.exports = { create_rule, combine_rules, evaluate_rule };
  