const fs = require("fs");

let input = fs.readFileSync(0).toString().split("\n");

const n = Number(input[0]);

let line = [];

for(let i=1;i<=n;i++){
    line.push(input[i].split(" ").map(Number));
}

line.sort((a,b) => {
    if(a[1] === b[1]){
        return a[0] - b[0];
    }
    return a[1] - b[1];
});

let dp = Array(n).fill(1);

for(let i=1;i<n;i++){
    for(let j=0;j<i;j++){
        if(line[j][1] < line[i][0]){
            dp[i]++;
        }
    }
}

console.log(Math.max(...dp));