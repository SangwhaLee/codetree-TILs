const fs = require("fs");

let input = fs.readFileSync(0).toString().split("\n");

const n = Number(input[0]);

let arr = [];

for(let i=1;i<input.length;i++){
    arr.push(input[i].split(" ").map(Number));
}

const di = [-1,1,0,0];
const dj = [0,0,-1,1];

let dp = Array.from(Array(n), () => Array(n).fill(1));

const bfs = (i,j) => {
    let que = [];
    let check =  Array.from(Array(n), () => Array(n).fill(0));
    que.push([i,j]);
    check[i][j] = 1;

    while(que.length > 0){
        tmp = que.shift();
        const ti = tmp[0];
        const tj = tmp[1];
        dp[ti][tj] = Math.max(dp[ti][tj], check[ti][tj]);

        for(let k=0;k<4;k++){
            let ni = ti + di[k];
            let nj = tj + dj[k];

            if(ni < 0 || ni >= n || nj < 0 || nj >= n){
                continue;
            }

            if(arr[ni][nj] > arr[ti][tj] && check[ni][nj] === 0){
                check[ni][nj] = check[ti][tj] + 1;
                que.push([ni,nj]);
            }
        }
    }
}

for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
        bfs(i,j);
    }
}

let maxNum = -1;

for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
        maxNum = Math.max(maxNum, dp[i][j]);
    }
}

console.log(maxNum);