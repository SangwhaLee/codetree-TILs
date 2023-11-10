const fs = require("fs");

let n = Number(fs.readFileSync(0).toString());

let memo = Array(1001).fill(0);

memo[1] = 2;

for(let i=2;i<=1000;i++){
    memo[i] = (memo[i-1]*3 + 1)%1000000007;
}

console.log(memo[n]);