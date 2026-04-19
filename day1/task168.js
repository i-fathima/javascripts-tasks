export function task168() { const fib=[0,1]; for (let i=2; i<10; i++) fib.push(fib[i-1]+fib[i-2]); alert('Task 168: ' + fib.join(', ')); }
