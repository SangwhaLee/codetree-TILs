import heapq

n = int(input())

arr = list(map(int,input().split()))

pq= []

for a in arr:
    heapq.heappush(pq, -a)

while len(pq) >= 2:
    a = heapq.heappop(pq)
    b = heapq.heappop(pq)
    tmp = abs(a-b)
    if tmp != 0:
        heapq.heappush(pq, -tmp)
    
if len(pq) == 1:
    print(-heapq.heappop(pq))
else:
    print(-1)