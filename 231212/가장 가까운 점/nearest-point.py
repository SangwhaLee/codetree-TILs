import heapq
import sys

n, m = map(int, input().split())

pq = []

for _ in range(n):
    x,y = map(int,input().split())
    heapq.heappush(pq,(x,y))

for _ in range(m):
    x, y = heapq.heappop(pq)
    x = x + 2
    y = y + 2
    heapq.heappush(pq,(x,y))


ans = sys.maxsize
min_x, min_y = 0, 0

for x,y in pq:
    if x+y < ans:
        ans = x+y
        min_x, min_y = x, y

print(min_x, min_y)