n = int(input())

A = list(map(int,input().split()))
B = list(map(int, input().split()))
C = list(map(int,input().split()))
D = list(map(int,input().split()))

AB = dict()
CD = dict()

for i in range(n):
    for j in range(n):
        tmp = A[i] + B[j]
        if tmp not in AB:
            AB[tmp] = 1
        else:
            AB[tmp] += 1

need = dict()

for ab in AB:
    if -ab not in need:
        need[-ab] = 1
    else:
        need[-ab] += 1

for i in range(n):
    for j in range(n):
        tmp = C[i] + D[j]
        if tmp not in CD:
            CD[tmp] = 1
        else:
            CD[tmp] += 1

answer = 0

for cd in CD:
    if cd in need:
        answer += CD[cd]*need[cd]

print(answer)