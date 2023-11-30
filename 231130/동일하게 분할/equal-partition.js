const fs = require("fs");

let input = fs.readFileSync(0).toString().split("\n");

const n = Number(input[0]);

let arr = input[1].split(" ").map(Number);

// const max = Number.MAX_SAFE_INTEGER;

const sum = arr.reduce((a,b) => a+b, 0);

let dp = Array(sum+1).fill(0);

dp[0] = true;

for(let i=0;i<n;i++){
    for(let j=sum+1;j>0;j--){
        if(j >= arr[i] && dp[j - arr[i]]){
            dp[j] = true;
        }
    }
}

if(dp[sum/2]){
    console.log("Yes");
}
else{
    console.log("No");
}