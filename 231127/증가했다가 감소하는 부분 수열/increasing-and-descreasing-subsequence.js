const fs = require("fs");

let input = fs.readFileSync(0).toString().split("\n");

let n = Number(input[0]);

let arr = input[1].split(" ").map(Number);

let dp = Array.from(Array(n), () => Array(2).fill(0));

for(let i=0;i<n;i++){
    dp[i][0] = 1;
    dp[i][1] = 1;
    for(let j=0;j<i;j++){
        if(arr[i] > arr[j]){
            dp[i][0] = Math.max(dp[i][0], dp[j][0] + 1);
        }
        if(arr[i] < arr[j]){
            dp[i][1] = Math.max(dp[i][1], dp[j][1]+ 1);
        }
    }
    dp[i][1] = Math.max(dp[i][1], dp[i][0]);
}

let ans = 0;
for(let i=0;i<n;i++){
    for(let j =0;j<2;j++){
        ans = Math.max(ans, dp[i][j]);
    }
}

console.log(ans);