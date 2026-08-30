program CompterDoubles;

uses crt;

var
  tableau: array of Integer;
  taille, i, j, countDoubles: Integer;
  dejaCompte: array of Boolean;

begin

  Write('Entrez la taille du tableau: ');
  ReadLn(taille);
  
  SetLength(tableau, taille);
  SetLength(dejaCompte, taille);

  for i := 0 to taille - 1 do
  begin
    Write('Entrez l''élément ', i + 1, ': ');
    ReadLn(tableau[i]);
    dejaCompte[i] := False;
  end;

  countDoubles := 0;

  for i := 0 to taille - 1 do
  begin
    if not dejaCompte[i] then
    begin
      for j := i + 1 to taille - 1 do
      begin
        if (tableau[i] = tableau[j]) and not dejaCompte[j] then
        begin
          dejaCompte[j] := True;
          dejaCompte[i] := True;
        end;
      end;

      if dejaCompte[i] then
        Inc(countDoubles);
    end;
  end;

  WriteLn('Nombre d''éléments en double : ', countDoubles);
  
  ReadLn;
end.
