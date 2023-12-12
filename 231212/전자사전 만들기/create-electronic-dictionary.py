n, t  = map(int,input().split())

word_idx = dict()
words = []

for i in range(1,n+1):
    w = input()
    word_idx[w] = i
    words.append(w)

words.sort()
for _ in range(t):
    tmp = input().split()
    k = int(tmp[0])
    c = tmp[1]
    result= []
    for i in range(n):
        if c in words[i]:
            result.append(words[i])
    if len(result) < k:
        print(-1)
    else:
        print(word_idx[result[k-1]])