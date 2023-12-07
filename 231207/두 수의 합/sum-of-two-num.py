n, k = map(int,input().split())

nums = list(map(int,input().split()))

maps = dict()

answer = 0

for n in nums:
    if k - n in maps:
        answer += maps[k-n]
        if n in maps:
            maps[n] += 1
        else:
            maps[n] = 1
    else:
        if n in maps:
            maps[n] += 1
        else:
            maps[n] = 1

print(answer)