N = int(input("Entrer un nombre entier positif : "))

S = 0
for I in range(1, N + 1):
    S += I

print(f"La somme de 1 à {N} est {S}")