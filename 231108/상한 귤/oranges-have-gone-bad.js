const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split("\n");

let tmp = input[0].split(" ").map(Number);

const n = tmp[0];
const k = tmp[1];

let grid = [];

for(i=1; i<=n; i++){
    grid.push(input[i].split(" ").map(Number));
}

const di = [0,0,-1,1];
const dj = [-1,1,0,0];

let check = Array(n).fill(-1).map(() => Array(n).fill(-1));

const bfs = (i,j) => {
    let que = [];
    que.push([i,j]);
    check[i][j] = 0;

    while(que.length !== 0){
        let tmp = que.shift();
        const ti = tmp[0];
        const tj = tmp[1];

        for(let k=0; k<4;k++){
            const ni = di[k] + ti;
            const nj = dj[k] + tj;

            if(ni < 0 || ni >= n || nj < 0 || nj >= n)
                continue;
            
            if(grid[ni][nj] === 1 && check[ni][nj] === -1){
                check[ni][nj] = check[ti][tj] + 1;
                que.push([ni, nj]);
            }
        }
    }
}

for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
        if(grid[i][j]===2) {
            bfs(i,j);
        }
    }
}

for(let i=0; i<n;i++){
    let row = "";
    for(let j=0;j<n;j++){
        row += check[i][j] + " ";
    }
    console.log(row);
}