const fs = require("fs");

let input = fs.readFileSync(0).toString().split("\n");

let n = Number(input[0]);

let work = [];

for(let i=1;i<=n;i++){
    work.push(input[i].split(" ").map(Number));
}

let dp = Array(n).fill(0);

for(let i=0;i<n;i++){
    dp[i] = work[i][2];
    for(let j=0;j<i;j++){
        if(work[j][1] < work[i][0]){
            dp[i] = Math.max(dp[j] + work[i][2] , dp[i]);
        }
    }
}

console.log(Math.max(...dp));