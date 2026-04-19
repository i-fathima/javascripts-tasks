export function task191() { let num=1221; let original=num; let rev=0; while (num>0) { rev = rev*10 + num%10; num = Math.floor(num/10); } alert('Task 191: Palindrome? ' + (rev === original)); }
