n = int(input())
arr = list(map(int,input().split()))

m = int(input())
arr2 = list(map(int,input().split()))

st1 = set(arr)
st2 = set(arr2)

for elem in st2:
    if elem not in st1:
        print(0)
    else:
        print(1)