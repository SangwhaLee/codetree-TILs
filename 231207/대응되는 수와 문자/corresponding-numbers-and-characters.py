n,m = map(int,input().split())

maps = dict()
for i in range(1,n+1):
    tmp = input()
    maps[tmp] = i
    maps[str(i)] = tmp

for _ in range(m):
    print(maps[input()])