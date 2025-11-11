
fetch('https://t.me/spydell_finance')
  .then(response => response.text())
  .then(html => {
    console.log('html: ', html);
    // Парсинг HTML (хрупкий метод)
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    console.log('doc: ', doc);

  });
