const fs = require("fs");

let input = fs.readFileSync(0).toString().split("\n");

const n = Number(input[0]);

const arr = input[1].split(" ").map(Number);

let dp = Array(n).fill(0);

dp[0] = arr[0];

for(let i=1;i<n;i++){
    dp[i] = Math.max(arr[i], dp[i-1] + arr[i]);
}

console.log(Math.max(...dp));