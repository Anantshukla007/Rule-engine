document.getElementById('create-rule-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const rule = document.getElementById('rule').value;

  // Send the rule to the backend to create the AST
  const response = await fetch('/api/rules/create', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ rule_string: rule })
  });
  
  const result = await response.json();
  console.log('AST:', result.ast);

  // Save the AST in localStorage for later use in evaluation
  localStorage.setItem('ast', JSON.stringify(result.ast));
  alert('Rule created and AST stored in local storage');
});

document.getElementById('evaluate-rule-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = JSON.parse(document.getElementById('data').value);

  // Fetch the AST from localStorage
  const ast = JSON.parse(localStorage.getItem('ast'));

  if (!ast) {
    document.getElementById('result').innerText = 'No AST found! Please create a rule first.';
    return;
  }

  // Send the AST and user data to the backend for evaluation
  const response = await fetch('/api/rules/evaluate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ast, data })
  });

  const result = await response.json();
  document.getElementById('result').innerText = result.result ? 'Eligible' : 'Not Eligible';
});
