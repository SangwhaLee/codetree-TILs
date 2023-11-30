const fs = require("fs");

let input = fs.readFileSync(0).toString().split("\n");

const temp = input[0].split(" ").map(Number);
const n = temp[0];
const m = temp[1];

const arr = input[1].split(" ").map(Number);

let all = [];

const backtrack = (area, total, lastIdx) => {
    if(area === m){
        all.push(total);
        return
    }

    let now = 0;
    for(let i=lastIdx+2;i<n;i++){
        if(i ===0){
            now = arr[i];
        }
        else{
            now = Math.max(arr[i], now + arr[i]);
        }
        backtrack(area + 1, total + now, i);
    }

    return
}

backtrack(0, 0, -2);

console.log(Math.max(...all));