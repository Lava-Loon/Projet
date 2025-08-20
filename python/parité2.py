N = int(input("Entrer un nombre entier positif : "))

print(f"Les nombres pairs compris entre 1 à {N} sont : ", end=" ")
for I in range(1, N + 1):
    if I % 2 == 0:
        print(I, end=" ")

input()        
