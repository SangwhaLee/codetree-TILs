n = int(input())

arr = []
dp = []

for _ in range(n):
    tmp = int(input())
    arr.append(tmp)
    dp.append([1,tmp])
    
for i in range(1,n):
    for j in range(i):
        if arr[j] < arr[i] and dp[j][0] + 1 > dp[i][0]:
            dp[i] = [dp[j][0] + 1, dp[j][1] + arr[i]]
            
dp.sort(key=lambda x:(x[0],x[1]), reverse=True)
print(dp[0][1])