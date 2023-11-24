const fs = require("fs");

let input = fs.readFileSync(0).toString().split("\n");

const tmp = input[0].split(" ").map(Number);

const n = tmp[0];
const m = tmp[1];

let arr = [];

for(let i=1;i<n+1;i++){
    arr.push(input[i].split(" ").map(Number));
}

let ni = 0;
let nj = 0;

let dp = Array.from(Array(n), () => Array(m).fill(-1));

dp[0][0] = 1;

for(let i=1;i<n;i++){
    for(let j=1;j<m;j++){
        for(let k=0;k<i;k++){
            for(let l=0;l<j;l++){
                if(dp[k][l] === -1) continue;
                if(arr[k][l] < arr[i][j]){
                    dp[i][j] = Math.max(dp[i][j], dp[k][l] + 1);
                }
            }
        }
    }
}

let ans = -1;

for(let i=0;i<n;i++){
    for(let j=0;j<m;j++){
        ans = Math.max(ans, dp[i][j]);
    }
}

console.log(ans);