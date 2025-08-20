program SommeDeUnADix;

var N, P, I, S: integer;

begin
   writeln(' Entrez le premier nombre ');
   readln(P);
   writeln(' Entrez le dernier nombre ');
   readln(N); 

   S := 0;
   for I := P to N do
   begin
     S := S + I;
   end;

   writeln(' La somme S = ', S);
end.     