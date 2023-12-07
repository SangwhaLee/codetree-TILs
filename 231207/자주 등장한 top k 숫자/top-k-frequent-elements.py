n, k = map(int,input().split())

arr = list(map(int,input().split()))
number = dict()

for i in range(n):
    tmp = arr[i]

    if tmp not in number:
        number[tmp] = 1
    else:
        number[tmp] += 1

ans = list(number.keys())
ans = sorted(ans, key=lambda x: (number[x], x), reverse=True)

for i in range(k):
    print(ans[i], end=' ')