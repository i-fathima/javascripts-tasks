export function task203() { let num=12345; const parts=[]; while (num > 0) { parts.push(num); num = Math.floor(num/10); } alert('Task 203: ' + parts.join(' -> ')); }
