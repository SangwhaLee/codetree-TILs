n, k = map(int,input().split())

seat = dict()
now = [i for i in range(1,n+1)]

for i in range(1, n+1):
    seat[i] = set()
    seat[i].add(i)

order = []
for _ in range(k):
    tmp = list(map(int,input().split()))
    order.append(tmp)

for _ in range(3):
    for od in order:
        # print(now)
        s,e = od[0]-1, od[1]-1
        # print(now[s], now[e])
        seat[now[s]].add(e+1)
        seat[now[e]].add(s+1)
        now[s], now[e] = now[e], now[s]
# print(now)

ans = sorted(seat.items(), key=lambda x:x[0])

for a in ans:
    print(len(a[1]))