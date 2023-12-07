n, k = map(int,input().split())

nums = list(map(int,input().split()))

maps = dict()

answer = 0

for i in range(n):
    for j in range(i+1,n):
        elem = nums[j]
        elem2 = nums[i]
        diff = k - elem - elem2

        if diff in maps:
            answer += maps[diff]
        
    if nums[i] in maps:
        maps[nums[i]] += 1
    else:
        maps[nums[i]] = 1

print(answer)