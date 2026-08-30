T = []

N = int(input("Combien de nombres allez-vous entrer : "))
for I in range(N):
    Nbre = int(input(f"Entrer le nombre {I+1} : "))
    T.append(Nbre)

S = max(T)

print(f"Le plus grand nombre est {S}")

