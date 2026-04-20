export function task170() { const years=[]; for (let y=2000; y<=2100; y++) if ((y%4===0 && y%100!==0) || y%400===0) years.push(y); alert('Task 170: ' + years.join(', ')); }
