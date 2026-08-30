program CompterOccurrences;

var
  phrase : string;
  i: integer;
  lettres : array['a'..'z'] of integer;
  c : char;

begin
  writeln('Entrez une phrase :');
  readln(phrase);

  { Initialiser le compteur à 0 pour chaque lettre }
  for c := 'a' to 'z' do
    lettres[c] := 0;

  { Parcourir chaque caractère de la phrase }
  for i := 1 to length(phrase) do
  begin
    c := lowercase(phrase[i]);  { Transformer en minuscule }
    if (c >= 'a') and (c <= 'z') then
      lettres[c] := lettres[c] + 1;
  end;

  writeln;
  writeln('Occurrences des lettres :');
  for c := 'a' to 'z' do
    if lettres[c] > 0 then
      writeln(c, ' : ', lettres[c]);

  readln;
end.

