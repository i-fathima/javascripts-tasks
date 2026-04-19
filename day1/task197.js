export function task197() { const a=48, b=18; let x=a, y=b; while (y !== 0) { const temp=y; y = x % y; x = temp; } alert('Task 197: GCD = ' + x); }
