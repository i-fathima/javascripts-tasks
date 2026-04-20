export function task188() { let num=12345; let rev=0; while (num>0) { rev = rev*10 + num%10; num = Math.floor(num/10); } alert('Task 188: Reversed = ' + rev); }
