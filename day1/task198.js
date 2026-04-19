export function task198() { const a=12, b=15; const gcd = (x,y)=> y===0?x:gcd(y,x%y); const lcm = (a*b)/gcd(a,b); alert('Task 198: LCM = ' + lcm); }
