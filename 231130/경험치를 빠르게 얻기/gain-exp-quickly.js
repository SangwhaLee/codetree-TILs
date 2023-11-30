const fs = require("fs");

let input = fs.readFileSync(0).toString().split("\n");

let tmp = input[0].split(" ").map(Number);

const n = tmp[0];
const m = tmp[1];

let exp= [];
let time = [];
for(let i=1;i<=n;i++){
    tmp = input[i].split(" ").map(Number);
    exp.push(tmp[0]);
    time.push(tmp[1]);
}

const topExp = Math.max(...exp);

const max = Number.MAX_SAFE_INTEGER;

let dp = Array(m+1+topExp).fill(max);

dp[0] = 0;

for(let i=0;i<n;i++){
    for(let j=dp.length - 1;j>0;j--){
        if(dp[j - exp[i]] === max) continue;

        if(j >= exp[i]){
            dp[j] = Math.min(dp[j], dp[j - exp[i]] + time[i]);
        }
    }
}

let ans = max;
for(let i=m;i<dp.length;i++){
    ans = Math.min(ans, dp[i]);
}
if(ans === max) ans = -1;

console.log(ans);