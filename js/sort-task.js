const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby', 'node', 'master'];
let swapped;

for (let j = 0; j < langs.length - 1; j += 1) {
  swapped = false;
  for (let i = 0; i < langs.length - 1 - j; i += 1) {
    if (langs[i][0] > langs[i + 1][0]) {
      const temp = langs[i];
      langs[i] = langs[i + 1];
      langs[i + 1] = temp;
      swapped = true;
    }
  }
  if (!swapped) {
    break;
  }

  console.log(`Прохід номер ${j + 1}`, langs);
}
