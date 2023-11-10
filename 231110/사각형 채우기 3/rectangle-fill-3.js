const fs = require("fs");

let n = Number(fs.readFileSync(0).toString());

let memo = Array(1001).fill(0);
const MOD = 1000000007;

memo[0] = 1;
memo[1] = 2;

for(let i=2;i<=1000;i++){
    memo[i] = (memo[i-1]*2 + memo[i-2]*3)%MOD;
    for(let j=i-3;j>=0;j--){
        memo[i] = (memo[i] + memo[j] * 2)%MOD;
    }
}

console.log(memo[n]);