export function task190() { let num=12345; let sum=0; while (num>0) { sum += num%10; num = Math.floor(num/10); } alert('Task 190: Sum of digits = ' + sum); }
