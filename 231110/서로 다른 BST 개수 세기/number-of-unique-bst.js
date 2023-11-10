const fs = require("fs");

let n = Number(fs.readFileSync(0).toString());

let dp = Array(20).fill(0);

const get_number_of_unique_bst = (n) => {
    let number_of_unique_bst = 0;

    for(let i=0;i<n;i++){
        number_of_unique_bst += dp[i] * dp[n - i - 1];
    }

    return number_of_unique_bst;
}

dp[0] = 1;
dp[1] = 1;

for(let i=2;i<=19;i++){
    dp[i] = get_number_of_unique_bst(i);
}

console.log(dp[n])