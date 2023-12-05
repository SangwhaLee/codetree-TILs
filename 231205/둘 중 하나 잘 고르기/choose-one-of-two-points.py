import sys

N = int(input())

red = [0]*(2*N + 1)
blue = [0]*(2*N + 1)

minNum = -sys.maxsize

dp = [[[0 for _ in range(2*N + 1)] for _ in range(2*N+1)] for _ in range(N*2 + 1)]

def intialize():
    for i in range(2*N + 1):
        for j in range(2*N + 1):
            for k in range(2*N+1):
                dp[i][j][k] = minNum
    
    dp[0][0][0] = 0

for i in range(1, 2 * N + 1):
    red[i], blue[i] = tuple(map(int, input().split()))

intialize()

for i in range(1, 2*N + 1):
    for j in range(i + 1):
        for k in range(i+1):
            if j > 0:
                dp[i][j][k] = max(dp[i-1][j-1][k] + red[i], dp[i][j][k])
            
            if k > 0:
                dp[i][j][k] = max(dp[i][j][k], dp[i-1][j][k-1] + blue[i])

print(dp[2*N][N][N])