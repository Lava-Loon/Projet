program ReductionDePrix;

var A, B: integer;

begin
  writeln(' Entrez le nombre de photocopie ');
  readln(A);

  if (A >= 10) and (A < 20) then
    begin
      B := A * 200;
      writeln(' Votre montant est : ',B);
    end

  else if (A > 20) then
    begin
      B := A * 100;
      writeln(' Votre montant est : ',B);
    end

  else if (A > 0) and (A < 10) then
    begin
      B := A * 250;
      writeln(' Votre montant est : ',B);
    end

  else
    begin
      writeln(' Ne vous moquez pas de nous, soyez serieux ');
    end;
  end.              
