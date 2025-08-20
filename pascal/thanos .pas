program exercice 16;
uses crt;
var somme,n,i:integer;
 begin
      writeln('entre un nombre);
      readln(n);
    i := 0;
    somme := 0;
while i <= n do
    i := i + 1;
    somme := somme + n;
    write('la somme des nombre est :',somme)
    end.