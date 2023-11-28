const fs = require("fs");

let input = fs.readFileSync(0).toString().split("\n");

let tmp = input[0].split(" ").map(Number);

const n = tmp[0];
const m = tmp[1];

let weight = [];
let value = [];
for(let i=1;i<=n;i++){
    tmp = input[i].split(" ").map(Number);
    weight.push(tmp[0]);
    value.push(tmp[1]);
}

const min = Number.MIN_SAFE_INTEGER;

let dp = Array(m+1).fill(min);

dp[0] = 0;

for(let i=1;i<m+1;i++){
    for(let j=0;j<n;j++){
        if(dp[i - weight[j]] === min) continue;

        if(i >= weight[j]){
            dp[i] = Math.max(dp[i], dp[i - weight[j]] + value[j]);
        }
    }
}

console.log(dp[m]);