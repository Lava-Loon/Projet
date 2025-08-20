program NombreDeMois;

var A: integer;

begin
  writeln(' Entrez un numero de mois (de 0 a 12) ');
  readln(A);

  case  A of
    
   1 : writeln(' 1 : Janvier ');
  
   2 : writeln(' 2 : Fevrier ');
  
   3 : writeln(' 3 : Mars ');
  
   4 : writeln(' 4 : Avril ');

   5 : writeln(' 5 : Mai ');
  
   6 : writeln(' 6 : Juin ');
  
   7 : writeln(' 7 : Juillet ');

   8 : writeln(' 8 : Aout '); 

   9 : writeln(' 9 : Septembre ');
  
   10 : writeln(' 10 : Octobre ');
  
   11 : writeln(' 11 : Novembre ');
  
   12 : writeln(' 12 : Decembre ');

  else
    writeln(' Ne vous moquez pas de nous, entrez un nombre entre 0 a 12 ');
  end;    
end.                      