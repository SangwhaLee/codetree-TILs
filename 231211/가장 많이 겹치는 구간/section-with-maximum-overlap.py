n = int(input())

m = 200001
dp = [0]*m

for _ in range(n):
    x, y = map(int,input().split())
    dp[x] += 1
    dp[y] -= 1

tmp = 0
ans = 0

for i in range(m):
    tmp += dp[i]
    ans = max(ans, tmp)

print(ans)