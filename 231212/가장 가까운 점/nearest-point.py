import heapq
import sys

n, m = map(int, input().split())

pq = []

for _ in range(n):
    x,y = map(int,input().split())
    heapq.heappush(pq,(x+y,x,y))

for _ in range(m):
    _,x, y = heapq.heappop(pq)
    x = x + 2
    y = y + 2
    heapq.heappush(pq,(x+y,x,y))

_,x,y = heapq.heappop(pq)

print(x, y)