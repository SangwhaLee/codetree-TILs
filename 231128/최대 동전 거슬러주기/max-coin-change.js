const fs = require("fs");

let input = fs.readFileSync(0).toString().split("\n");

let tmp = input[0].split(" ").map(Number);
const n = tmp[0];
const m = tmp[1];

let coins = input[1].split(" ").map(Number);

const min = Number.MIN_SAFE_INTEGER;

let dp = Array(m+1).fill(min);

dp[0] = 0;

for(let i=1;i<=m;i++){
    for(let j=0;j<i;j++){
        if(dp[i-coins[j]] === min) continue;

        if(i >= coins[j]){
            dp[i] = Math.max(dp[i], dp[i-coins[j]] + 1);
        }
    }
}

let ans = dp[m];
if(ans === min){
    ans = -1;
}
console.log(ans);