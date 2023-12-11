a, b = map(int, input().split())

a_arr = list(map(int,input().split()))

b_arr = list(map(int, input().split()))

both = []

for aa in a_arr:
    if aa in b_arr:
        both.append(aa)

ans = set(a_arr + b_arr)

answer = 0
for elem in ans:
    if elem not in both:
        answer += 1

print(answer)