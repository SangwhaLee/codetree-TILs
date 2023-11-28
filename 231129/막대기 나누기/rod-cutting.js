const fs = require("fs");

let input = fs.readFileSync(0).toString().split("\n");

const n = Number(input[0]);

let values = input[1].split(" ").map(Number);

const min = Number.MIN_SAFE_INTEGER;

let dp = Array(n+1).fill(min);

dp[0] = 0;

for(let i=1;i<n+1;i++){
    for(let j=0;j<n;j++){
        if(i >= (j+1)){
            dp[i] = Math.max(dp[i], dp[i - (j+1)] + values[j]);
        }
    }
}

console.log(dp[n]);