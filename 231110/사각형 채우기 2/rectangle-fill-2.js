const fs = require("fs");

let n = Number(fs.readFileSync(0).toString());
const MOD = 10007;

let dp = Array(1001).fill(0);

dp[1] = 1;
dp[2] = 3;

for(let i=3;i<=1000;i++){
    dp[i] = (dp[i-1]%MOD + (dp[i-2]*2)%MOD)%MOD;
}

console.log(dp[n]);