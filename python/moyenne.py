def moyenne(a, b, c) :
    return (a + b + c) / 3

N1 = float(input("Entrer un nombre : "))
N2 = float(input("Entrer un second nombre : "))
N3 = float(input("Entrer un dernier nombre : "))    

S = moyenne(N1, N2, N3)

print(f"La moyenne de  {N1}, {N2} et {N3} est {S:.2f}")