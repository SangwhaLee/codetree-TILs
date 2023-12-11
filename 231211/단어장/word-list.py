n = int(input())

words = dict()

for _ in range(n):
    word = input()

    if word not in words:
        words[word] = 1
    else:
        words[word] += 1
    
ans = sorted(words.items(), key=lambda x:x[0])

for w in ans:
    print(w[0], w[1])