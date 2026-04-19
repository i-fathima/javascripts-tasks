export function task194() { const fib=[0,1]; let i=2; while (i<10) { fib.push(fib[i-1] + fib[i-2]); i++; } alert('Task 194: ' + fib.join(', ')); }
