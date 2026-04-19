export function task175() { const num=153; const digits=String(num).split('').map(Number); const total=digits.reduce((s,d)=>s+d**3,0); alert('Task 175: ' + num + ' is Armstrong? ' + (total===num)); }
