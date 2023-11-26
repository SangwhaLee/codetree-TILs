const fs = require("fs");

let input = fs.readFileSync(0).toString().split("\n");

let n = Number(input[0]);

let arr = input[1].split(" ").map(Number);

let dp_up = Array(n).fill(1);
let dp_down = Array(n).fill(1);

for(let i=1;i<n;i++){
    for(let j=0;j<i;j++){
        if(arr[i] > arr[j]){
            dp_up[i] = Math.max(dp_up[j]+1, dp_up[i]);
        }
        if(arr[i] < arr[j]){
            dp_down[i] = Math.max(dp_down[j]+1, dp_down[i]);
        }
    }
}

let maxUp = -1;
let maxIdx = 0;
let downMax = -1;
let downIdx = 0;

for(let i=0;i<n;i++){
    if(dp_up[i] > maxUp){
        maxUp = dp_up[i];
        maxIdx = i;
    }
    if(dp_down[i] > downMax){
        downMax = dp_down[i];
        downIdx = i;
    }
}

if(maxUp > downMax){
    ans = maxUp;
}
else{
    let tmp = maxUp;
    for(let i =maxIdx+1;i<n;i++){
        if(dp_down[i] > dp_down[maxIdx]){
            tmp = Math.max(tmp, (dp_down[i] - dp_down[maxIdx]) + maxUp);
        }
    }
    ans = Math.max(downMax, tmp);
}

console.log(ans);