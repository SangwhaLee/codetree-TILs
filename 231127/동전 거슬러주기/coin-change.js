const fs = require("fs");

let input = fs.readFileSync(0).toString().split("\n");

let tmp = input[0].split(" ").map(Number);
const n = tmp[0];
const m = tmp[1];

let coins = input[1].split(" ").map(Number);

let dp = Array(m+1).fill(Number.MAX_SAFE_INTEGER);

dp[0] = 0;

for(let i=1;i<=m;i++){
    for(let c of coins){
        if(dp[i-c] === Number.MAX_SAFE_INTEGER){
            continue;
        }
        if(i>=c){
            dp[i] = Math.min(dp[i], dp[i-c]+1);
        }
    }
}

console.log(dp[m]);