n, k = map(int,input().split())

nums = list(map(int,input().split()))

maps = dict()

answer = 0

for n in nums:
    if n not in maps:
        maps[k-n] = 1
    else:
        answer += maps[n]

print(answer)