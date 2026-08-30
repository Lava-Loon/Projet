program NombrePaireDe0AN;

var N, I : Integer;

 begin
   writeln('Entrez un nombre : ');
   readln(N);
   writeln('Les nombres paires comprises entre 0 à ', N, ' sont :');

   for I := 0 to N do
   begin
     if I mod 2 = 0 then
       write(I);
   end;  
 end.      
       



       