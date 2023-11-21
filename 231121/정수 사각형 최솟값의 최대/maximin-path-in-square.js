const fs = require("fs");

let input = fs.readFileSync(0).toString().split("\n");

const n = input[0];

let dp = [];

for(let i=1;i<input.length;i++){
    dp.push(input[i].split(" ").map(Number));
}

for(let i=1;i<n;i++){
    dp[i][0] = Math.min(dp[i-1][0], dp[i][0]);
    dp[0][i] = Math.min(dp[0][i-1], dp[0][i-1]); 
}

for(let i=1;i<n;i++){
    for(let j=1;j<n;j++){
        dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1], dp[i][j]);
    }
}

let maxNum = -1;

for(let i=1;i<n;i++){
    for(let j=1;j<n;j++){
        if(dp[i][j] > maxNum) maxNum=dp[i][j];
    }
}

console.log(maxNum);