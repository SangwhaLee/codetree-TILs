const fs = require("fs");

let input = fs.readFileSync(0).toString().split("\n");

const n = Number(input[0]);

let arr = [];

for(let i=1;i<=n;i++){
    arr.push(input[i].split(" ").map(Number));
}

let dp = Array.from(Array(n), () => Array(n).fill([]));

dp[0][0] = [arr[0][0], arr[0][0]];

for(let i=1;i<n;i++){
    let tmp = [];
    if(arr[0][i] > arr[0][i-1]){
        tmp.push(Math.max(arr[0][i], dp[0][i-1][0]));
        tmp.push(dp[0][i-1][1]);
    }
    else{
        tmp.push(dp[0][i-1][0]);
        tmp.push(Math.min(arr[0][i], dp[0][i-1][1]));
    }
    dp[0][i] = tmp;

    let tmp2 = [];
    if(arr[i][0] > arr[i-1][0]){
        tmp2.push(Math.max(arr[i][0], dp[i-1][0][0]));
        tmp2.push(dp[i-1][0][1]);
    }
    else{
        tmp2.push(dp[i-1][0][0]);
        tmp2.push(Math.min(arr[i][0], dp[i-1][0][1]));
    }

    dp[i][0] = tmp2;
}

for(let i=1;i<n;i++){
    for(let j=1;j<n;j++){
        let tmp = [];
        if((dp[i-1][j][0] - dp[i-1][j][1]) < (dp[i][j-1][0] - dp[i][j-1][1])){
            if(arr[i][j] > arr[i-1][j]){
                tmp.push(Math.max(arr[i][j], dp[i-1][j][0]));
                tmp.push(dp[i-1][j][1]);
            }
            else {
                tmp.push(dp[i-1][j][0]);
                tmp.push(Math.max(arr[i][j], dp[i-1][j][1]));
            }
        }
        else{
            if(arr[i][j] > arr[i][j-1]){
                tmp.push(Math.max(arr[i][j], dp[i][j-1][0]));
                tmp.push(dp[i][j-1][1]);
            }
            else {
                tmp.push(dp[i][j-1][0]);
                tmp.push(Math.max(arr[i][j], dp[i][j-1][1]));
            }
        }
        dp[i][j] = tmp;
    }
}

console.log(dp[n-1][n-1][0] - dp[n-1][n-1][1]);