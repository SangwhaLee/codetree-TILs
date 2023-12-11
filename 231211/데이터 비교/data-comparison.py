n = int(input())

arr1 = list(map(int,input().split()))

m = int(input())

arr2 = list(map(int,input().split()))

st1 = set(arr1)

for elem in arr2:
    if elem not in st1:
        print(0, end=' ')
    else:
        print(1, end=' ')