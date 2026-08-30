program AgeDUnEnfant;

var A: integer;

begin
   writeln(' Entrez l age de l enfant ');
   readln(A);

   if (A >= 6) and (A <= 7) then
   begin
     writeln(' L enfant est un poussin ');
   end
   
   else if (A >= 8) and (A <= 9) then
   begin
     writeln(' L enfant est une pupille ');
   end

   else if (A >= 10) and (A <= 11) then
   begin
     writeln(' L enfant est un minime ');
   end

   else if (A > 12) then
   begin
     writeln(' L enfant est un cadet ');
   end

   else if (A <= 6) and (A >= 0) then
   begin
     writeln(' L enfant est un bebe ');
   end

   else
   begin
     writeln(' Ne vous moquez pas de nous, soyez serieux ');
   end;        
end.

