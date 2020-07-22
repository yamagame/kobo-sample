const fs = require('fs');
const path = require('path');

const text = fs.readFileSync(path.join(__dirname, 'coverage.md'), 'utf8').split('\n').filter( v => v !== '' )

const link = (word) => {
  return `https://www.google.com/search?q=${encodeURIComponent(word)}&oq=${encodeURIComponent(word)}`;
}

const sep = '\t<!-- ========================================================= -->\n';

const indexes = {
  goal: {
    name: 'T',
    count: 0,
  },
  subheading: {
    name: 'S',
    count: 0,
  },
  heading: {
    name: 'H',
    count: 0,
  },
  word: {
    name: 'W',
    count: 0,
  },
}

const makeId = (cat) => {
  return `${indexes[cat].name}-${indexes[cat].count++}`
}

const lines = text.map( (line , i) => {
  if (line.indexOf('####') >= 0) {
    return `\t<h4 class="goal" id="${makeId('goal')}">${line.slice(4).trim()}</h4>`;
  } else
  if (line.indexOf('###') >= 0) {
    return `${ i>0?'\n':'' }\t<h3 class="subheading" id="${makeId('subheading')}">${line.slice(3).trim()}</h3>`;
  } else
  if (line.indexOf('##') >= 0) {
    return `${ i>0?'\n':'' }${sep}\t<h2 class="heading" id="${makeId('heading')}">${line.slice(2).trim()}</h2>`;
  } else
  if (line.indexOf('#') >= 0) {
    return `\t<h1 class="title">${line.slice(1).trim()}</h1>`;
  }
  return line.split('、').map( word => `\t<a class="word" id="${makeId('word')} "href="#" onclick="return openGoogle(this);">${word}</a>` ).join('\n');
})

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>統計検定2級 出題範囲表</title>
</head>
<body>

<div class="contents">

${lines.join('\n')}

</div>

<script>
  function openGoogle(e) {
    const link = (word) => {
      const encodeWord = encodeURIComponent(word);
      return "https://www.google.com/search?q="+encodeWord+"&oq="+encodeWord;
    }
    window.open(link(e.textContent), 'statistics-2');
    return false;
  }
</script>

</body>
</html>
`

console.log(html);
