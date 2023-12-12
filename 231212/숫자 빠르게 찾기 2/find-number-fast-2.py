from sortedcontainers import SortedSet

n, m = map(int,input().split())

s = SortedSet()

arr = list(map(int,input().split()))

for a in arr:
    s.add(a)

for _ in range(m):
    num = int(input())
    if s.bisect_left(num) == len(s):
        print(-1)
    else:
        print(s[s.bisect_left(num)])