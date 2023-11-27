const fs = require("fs");

let input = fs.readFileSync(0).toString().split("\n");

let tmp = input[0].split(" ").map(Number);
const n = tmp[0];
const m = tmp[1];

let arr = input[1].split(" ").map(Number);

const max = Number.MAX_SAFE_INTEGER;

let dp = Array(m+1).fill(max);

dp[0] = 0;

for(let i=1;i<m+1;i++){
    for(let j=0;j<n;j++){
        if(dp[i-arr[j]] === max){
            continue;
        }
        if(i - arr[j] === arr[j]){
            continue;
        }
        if(i>=arr[j]){
            dp[i] = Math.min(dp[i], dp[i-arr[j]] + 1);
        }
    }
}

let ans = dp[m];
if(dp[m] === max){
    ans = -1;
}

console.log(ans);