from sortedcontainers import SortedSet

n = int(input())
arr = list(map(int,input().split()))

s = SortedSet()
s.add(0)
s.add(arr[0])
minlen = arr[0]
print(minlen)

for i in range(1,len(arr)):
    if s.bisect_right(arr[i]) == len(s):
        minlen = min(abs(s[s.bisect_right(arr[i])-1] - arr[i]), minlen)
        print(minlen)
    else:
        minlen = min(abs(s[s.bisect_right(arr[i])-1] - arr[i]), abs(s[s.bisect_right(arr[i])] - arr[i]), minlen)
        print(minlen)
    s.add(arr[i])