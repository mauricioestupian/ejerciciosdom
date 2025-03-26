//factorial de un numero
// 5! = 5*4*3*2*1 = 120
let n = 5;
let f = 1;
for (let i = 1; i < n; i++) { 
    f=f+(f*i);
}
console.log(f);