
            

        
    program VerifierNombrePremier;

var
  N, i: Integer;
  estPremier: Boolean;

begin
  Write('Entrez un nombre entier N : ');
  ReadLn(N);

  estPremier := True;

  if N <= 1 then
    estPremier := False
  else
  begin
    for i := 2 to Trunc(Sqrt(N)) do
    begin
      if (N mod i = 0) then
      begin
        estPremier := False;
        Break;
      end;
    end;
  end;

  if estPremier then
    WriteLn(N, ' est un nombre premier.')
  else
    WriteLn(N, ' n''est pas un nombre premier.');
end.
