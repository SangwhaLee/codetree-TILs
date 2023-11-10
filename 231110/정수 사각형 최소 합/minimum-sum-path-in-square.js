const fs = require("fs");

let input = fs.readFileSync(0).toString().split("\n");

let n = Number(input[0]);

let dp = [];

for(let i=1;i<=n;i++){
    dp.push(input[i].split(" ").map(Number));
}

for(let i=n-2;i>=0;i--){
    dp[0][i] += dp[0][i+1];
}

for(let i=1;i<n;i++){
    dp[i][n-1] += dp[i-1][n-1];
}

for(let i=1;i<n;i++){
    for(let j=n-2;j>=0;j--){
        dp[i][j] += Math.min(dp[i-1][j], dp[i][j+1]);
    }
}

console.log(dp[n-1][0]);