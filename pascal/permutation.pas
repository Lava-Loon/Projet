program PermuterCaracteres;

var
  mot : string;
  i : integer;
  temp : char;

begin
  write('Entrez un mot :');
  readln(mot);

  i := 1;
  while i < length(mot) do
  begin
    temp := mot[i];
    mot[i] := mot[i + 1];
    mot[i + 1] := temp;

    i := i + 2;
  end;

  writeln('Mot permuté : ', mot);
  readln;
end.
