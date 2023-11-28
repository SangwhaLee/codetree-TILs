const fs = require("fs");

let input = fs.readFileSync(0).toString().split("\n");

let tmp = input[0].split(" ").map(Number);
const n = tmp[0];
const m = tmp[1];

let arr = input[1].split(" ").map(Number);

const min = Number.MIN_SAFE_INTEGER;

let dp = Array(m+1).fill(min);

dp[0] = 0;

for(let i=0;i<n;i++){
    for(let j=m;j>=0;j--){
        if(j >= arr[i]){
            dp[j] = Math.max(dp[j], dp[j - arr[i]] + 1);
        }
    }
}

let ans = "";

if(dp[m] === min){
    ans = "No";
}
else{
    ans = "Yes";
}
console.log(ans);