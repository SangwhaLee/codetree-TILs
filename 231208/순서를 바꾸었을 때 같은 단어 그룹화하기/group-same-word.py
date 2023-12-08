n = int(input())

count = dict()

for _ in range(n):
    inp = input()

    inp = sorted(inp)

    string = ""
    for elem in inp:
        string += elem
    
    if string in count:
        count[string] += 1
    else:
        count[string] = 1
    
ans = 0

for key, value in count.items():
    if ans < value:
        ans = value

print(ans)