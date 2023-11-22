const fs = require("fs");

let input = fs.readFileSync(0).toString().split("\n");

const n = Number(input[0]);

let arr = [];

for(let i=1;i<input.length;i++){
    arr.push(input[i].split(" ").map(Number));
}

let dp = Array.from(Array(n), () => Array(n).fill(1));

let cells = [];

const inRange = (i,j) => {
    return (i >= 0 && i < n && j >= 0 && j < n);
} 

for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
        cells.push([arr[i][j], i, j]);
    }
}

cells.sort((a,b) => {
    if (a[0] > b[0]) return 1;
});

for(let tmp of cells){
    const di = [-1,1,0,0];
    const dj = [0,0,-1,1];

    const i = tmp[1];
    const j = tmp[2];

    for(let k=0;k<4;k++){
        let ni = i + di[k];
        let nj = j + dj[k];

        if(inRange(ni,nj) && arr[ni][nj] > arr[i][j]){
            dp[ni][nj] = Math.max(dp[ni][nj], dp[i][j] + 1);
        }
    }
}

let maxNum = -1;
for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
        maxNum = Math.max(maxNum, dp[i][j]);
    }
}
console.log(maxNum);