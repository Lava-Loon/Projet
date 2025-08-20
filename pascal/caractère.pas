program VerifierLettre;

var C: char;

begin
  write('Entrez un caractere : ');
  ReadLn(C);

  if (C >= 'A') and (C <= 'Z') then
  begin
    writeln('Il s''agit d''une lettre majuscule');
  end
  else if (C >= 'a') and (C <= 'z') then
  begin
    writeln('Il s''agit d''une lettre minuscule');
  end
  else
  begin
    writeln('Ce n''est pas une lettre');
  end;
end.      