a, b = map(int, input().split())

a_arr = set(map(int,input().split()))

b_arr = set(map(int, input().split()))

answer = a_arr.symmetric_difference(b_arr)
print(len(answer))