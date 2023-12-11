n = int(input())
arr = list(map(int,input().split()))

m = int(input())
arr2 = list(map(int,input().split()))

st1 = set(arr)

for elem in arr2:
    if elem not in st1:
        print(0)
    else:
        print(1)