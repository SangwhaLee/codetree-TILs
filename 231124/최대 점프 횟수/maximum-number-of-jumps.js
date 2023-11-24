const fs = require("fs");

let input = fs.readFileSync(0).toString().split("\n");

let n = Number(input[0]);

let arr = input[1].split(" ").map(Number);

let dp = Array(n).fill(0);
dp[0] = 0;

for(let i=1;i<n;i++){
    for(let j=0;j<i;j++){
        if(arr[j] + j >= i){
            dp[i] = Math.max(dp[i], dp[j] + 1);
        }
    }
}

console.log(Math.max(...dp));