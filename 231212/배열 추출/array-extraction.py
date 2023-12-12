import heapq

n = int(input())

pq = []

for _ in range(n):
    tmp = int(input())
    if tmp == 0:
        if len(pq) == 0:
            print(0)
        else:
            print(-heapq.heappop(pq))
    else:
        heapq.heappush(pq, -tmp)