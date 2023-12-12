from sortedcontainers import SortedSet

n, m = map(int,input().split())

arr = list(map(int,input().split()))

s = SortedSet()

for i in range(1,m+1):
    s.add(i)

ans = 0 

for a in arr:
    ai = s.bisect_left(a)
    if s.bisect_left(a) == 0 and s[0] > a:
        break
    s.remove(s[ai])
    ans += 1

print(ans)