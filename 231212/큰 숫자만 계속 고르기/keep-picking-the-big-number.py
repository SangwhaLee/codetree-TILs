import heapq

n, m = map(int,input().split())

arr = list(map(int,input().split()))

pq = []

for a in arr:
    heapq.heappush(pq, -a)

for _ in range(m):
    tmp = heapq.heappop(pq)
    heapq.heappush(pq,tmp + 1)

print(-heapq.heappop(pq))