const fs = require("fs");

let input = fs.readFileSync(0).toString().split("\n");

let n = Number(input[0]);

let arr = input[1].split(" ").map(Number);

let dp = Array(n).fill(1);

let way = Array(n).fill(0);

let chance = Array(n).fill(true);

for(let i=1;i<n;i++){
    for(let j=0;j<i;j++){
        if(arr[i] > arr[j]){
            if(way[j] !== 1){
                dp[i] = Math.max(dp[i], dp[j] + 1);
                way[i] = 1;
            }
        }
        else if(arr[i] < arr[j]){
            if(way[j] === 1){
                if(chance[j]){
                    dp[i] = Math.max(dp[i], dp[j] + 1);
                    way[i] = -1;
                    chance[i] = false;
                }
            }
            else{
                dp[i] = Math.max(dp[i], dp[j] + 1);
                way[i] = -1;
            }
        }
    }
}

console.log(Math.max(...dp));