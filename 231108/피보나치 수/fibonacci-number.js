const fs = require("fs");

const n = Number(fs.readFileSync(0).toString());

let memo = Array(46).fill(0);

memo[1] = 1;
memo[2] = 1;

for(i=3; i<=46;i++){
    memo[i] = memo[i-1] + memo[i-2];
}

console.log(memo[n]);