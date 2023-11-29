const fs = require("fs");

let input = fs.readFileSync(0).toString().split("\n");

const n = Number(input[0]);

let arr = input[1].split(" ").map(Number);

const max = Number.MAX_SAFE_INTEGER;

const sum = arr.reduce((a,b) => a+b, 0);

let dp = Array.from(Array(n+1), () => Array(sum+1).fill(0));

dp[0][0] = true;

for(let i=1;i<=n;i++){
    for(let j=0;j<=sum;j++){
        if(j >= arr[i] && dp[i-1][j - arr[i]]){
            dp[i][j] = true;
        }

        if(dp[i-1][j]){
            dp[i][j] = true;
        }
    }
}

let ans = max;

for(let i=1;i<=sum;i++){
    if(dp[n][i]){
        ans = Math.min(ans, Math.abs(i - (sum - i)));
    }
}

// console.log(dp);
console.log(ans);