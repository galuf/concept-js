// Fill in the regular expressions

// Buscar car y cat
verify(/ca[rt]/, ["my car", "bad cats"], ["camper", "high art"]);

// Buscar pop y prop
verify(/pr?op/, ["pop culture", "mad props"], ["plop", "prrrop"]);

// Buscar ferret, ferry, ferrari
verify(
  /ferr(et|y|ari)/,
  ["ferret", "ferry", "ferrari"],
  ["ferrum", "transfer A"]
);

// Buscar palabras que terminen en "ious"
verify(
  /ious\b/,
  ["how delicious", "spacious room"],
  ["ruinous", "consciousness"]
);

// Buscar espacio ( ) seguido de '.' o ',' o ';' o ';'
verify(/\s[.,:;]/, ["bad punctuation ."], ["escape the period"]);

// Buscar las palabras con las de 6 caracteres
verify(
  /\w{7}/,
  ["Siebentausenddreihundertzweiundzwanzig"],
  ["no", "three small words"]
);

// Buscar palabras q no tengan la 'e' o 'E'
verify(
  /\b[^\We]+\b/i,
  ["red platypus", "wobbling nest"],
  ["earth bed", "learning ape", "BEET"]
);

function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == "...") return;
  for (let str of yes)
    if (!regexp.test(str)) {
      console.log(`Failure to match '${str}'`);
    }
  for (let str of no)
    if (regexp.test(str)) {
      console.log(`Unexpected match for '${str}'`);
    }
}
