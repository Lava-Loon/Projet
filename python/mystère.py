import random
S = random.randint(1, 100)
I = 0
N = int(input("Entrer un nombre entre 1 à 100 : "))
while N != S :
    I = I + 1
    if N < S:
        N = int(input("Trop petit ! Essayez encore : "))
    else:
        N = int(input("Trop grand ! Essayez encore : "))

print(f"Après {I} tentatives, vous avez reussi à trouver le nombre {S}")
