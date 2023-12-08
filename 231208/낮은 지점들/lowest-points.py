n = int(input())

point ={}

for _ in range(n):
    x, y = map(int,input().split())

    if x in point:
        point[x] = min(point[x], y)
    else:
        point[x] = y

ans = sum(point.values())

print(ans)