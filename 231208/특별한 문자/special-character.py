word = input()

count = {}

for w in word:
    if w not in count:
        count[w] = 1
    else:
        count[w] += 1

ans = []

for k,v in count.items():
    if v == 1:
        ans.append(k)

if len(ans) == 0:
    print("None")
else:
    print(ans[0])