const fs = require("fs");

let input = fs.readFileSync(0).toString().split("\n");

const n = Number(input[0]);

let arr = [];

for(let i=1;i<input.length;i++){
    arr.push(input[i].split(" ").map(Number));
}

for(let i=1;i<n;i++){
    arr[i][0] = Math.max(arr[i][0], arr[i-1][0]);
    arr[0][i] = Math.max(arr[0][i], arr[0][i-1]);
}

for(let i=1;i<n;i++){
    for(let j=1;j<n;j++){
        arr[i][j] = Math.max(arr[i][j], Math.min(arr[i-1][j], arr[i][j-1]));
    }
}

console.log(arr[n-1][n-1]);