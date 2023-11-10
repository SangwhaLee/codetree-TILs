const fs = require("fs");

let n = Number(fs.readFileSync(0).toString());

let dp = Array(20).fill(0);

dp[1] = 1;
dp[2] = 2;

for(let i=3;i<=19;i++){
    dp[i] += dp[i-1]*2;
    tmp = 1;
    for(let j=i-2;j>0;j--){
        tmp *= j;
    }
    dp[i] += tmp;
}

console.log(dp[n])