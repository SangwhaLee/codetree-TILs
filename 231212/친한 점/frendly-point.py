from sortedcontainers import SortedSet

n, m = map(int,input().split())

s = SortedSet()

for _ in range(n):
    x, y = map(int,input().split())
    s.add((x,y))

for _ in range(m):
    x, y = map(int,input().split())
    if s.bisect_left((x,y)) == len(s):
        print(-1, -1)
    else:
        ax, ay = s[s.bisect_left((x,y))]
        print(ax, ay)