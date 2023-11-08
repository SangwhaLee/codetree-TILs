const fs = require("fs");

const n = Number(fs.readFileSync(0).toString());

let memo = Array(1001).fill(0);

memo[1] = 1;
memo[2] = 2;

for(let i=3;i<=1001;i++){
    memo[i] = (memo[i-1]%10007 + memo[i-2]%10007)%10007;
}

console.log(memo[n]);