n = int(input())

word = {}

for _ in range(n):
    tmp = input()

    if tmp not in word:
        word[tmp] = 1
    else:
        word[tmp] += 1

for w in sorted(word.keys()):
    tmp = round((100/n) * word[w], 4)
    format_tmp = "{:.4f}".format(tmp)
    print(w, format_tmp)