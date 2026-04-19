export function task205() { let value=0; const steps=[]; while (value < 60) { steps.push(value); value += 3; } steps.push(value); alert('Task 205: ' + steps.join(', ')); }
