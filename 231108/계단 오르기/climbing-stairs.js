const fs = require("fs");

const n = Number(fs.readFileSync(0).toString());

let memo = Array(1001).fill(0);

memo[2] = 1;
memo[3] = 1;

for(let i=4;i <=n;i++){
    memo[i] = memo[i-2] + memo[i-3];
}

console.log(memo[n]);