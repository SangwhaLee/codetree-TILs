n = int(input())

arr = list(map(int,input().split()))

number = dict()

for i in range(len(arr)):
    if arr[i] not in number:
        number[arr[i]] = i+1

ans = sorted(number.items(), key=lambda x:x[0])

for a in ans:
    print(a[0], a[1])