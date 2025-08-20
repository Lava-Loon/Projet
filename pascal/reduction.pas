program ReductionDePrix;

var A: integer;
var B: real;

begin
    writeln(' Entrez votre montant ');
    readln(A);

    if (A >= 200) then
    begin
      B := A - A * 0.15;
      writeln(' Vous avez une reduction.Votre nouveau montant est : ',B:0:2);
    end

    else if (A < 200) and (A > 0) then
    begin
      writeln(' Votre montant reste le meme : ',A)  
    end
    else
    begin
      writeln(' Ne vous moquez pas de nous, veuillez acheter quelque chose ');
    end;    
end.