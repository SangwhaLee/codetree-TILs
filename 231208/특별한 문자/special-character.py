word = input()

count = {}

for w in word:
    if w not in count:
        count[w] = 1
    else:
        count[w] += 1


for k,v in count.items():
    if v == 1:
        print(k)