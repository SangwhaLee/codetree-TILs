const fs = require("fs");

let n = Number(fs.readFileSync(0).toString());

let dp = Array(n+1).fill(0);

dp[0] = 1;

for(let i=1;i<=n;i++){
    dp[i] = dp[i-1];
    if(i >= 2){
        dp[i] += dp[i-2];
    }
    if(i >= 5){
        dp[i] += dp[i-5];
    }
    dp[i] = dp[i]%10007;
}

console.log(dp[n]);