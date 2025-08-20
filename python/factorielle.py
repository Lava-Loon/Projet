N = int(input("Entrer un nombre entier positif : "))
S = 1

for I in range(1, N + 1):
    S = I * S
print(f"{N}! = {S}")    