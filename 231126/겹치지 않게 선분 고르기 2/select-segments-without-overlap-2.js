const fs = require("fs");

let input = fs.readFileSync(0).toString().split("\n");

const n = Number(input[0]);

let line = [];

for(let i=1;i<=n;i++){
    line.push(input[i].split(" ").map(Number));
}

line.sort((a,b) => {
    return a[0] - b[0];
});

let dp = Array(n).fill(0);

for(let i=0;i<n;i++){
    dp[i] = 1;
    for(let j=0;j<i;j++){
        if(line[i][0] > line[j][1]){
            dp[i] = Math.max(dp[i], dp[j]+ 1);
        }
    }
}

console.log(Math.max(...dp));