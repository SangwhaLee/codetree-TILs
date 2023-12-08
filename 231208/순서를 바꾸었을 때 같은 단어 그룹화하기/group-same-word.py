n = int(input())

dics = []

for _ in range(n):
    tmp = dict()
    sen = input()
    for s in sen:
        if s not in tmp:
            tmp[s] = 1
        else:
            tmp[s] += 1
    dics.append(tmp)

answer = 0

for i in range(len(dics)):
    for j in range(i+1, len(dics)):
        if dics[i] == dics[j]:
            answer += 1

print(answer)