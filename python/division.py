def division(a, b):
    return a / b

N1 = float(input("Entrer le premier nombre : "))    
N2 = float(input("Entrer le second nombre : "))

if N1 == 0 :
    print(f"La division de {N1} par {N2} est 0")
elif N2 == 0 :
    print(f"Il est impossible de diviser {N1} par {N2}")
else :
    S = division(N1, N2)
    print(f"La division de {N1} par {N2} est {S:.2f}")
        
