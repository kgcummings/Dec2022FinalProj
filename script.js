var client = contentful.createClient({
    space: '1zc3v8j45y0t',
    accessToken: 'ApVKNghAt58mmqLilen09IAFmpa09HeC0tRWuaDnjg0',
  });


  client.getEntries().then(entries => {

    let sticker = document.getElementById('sticker');

    // let shuffledArray = entries.items.shuffle();

    let count = 1;
    entries.items.forEach(entry => {
        // let html = `
        // <img class='stickimg' src='${entry.fields.image.fields.file.url}'>
        // `;
        // sticker.innerHTML += html;
        let id = `img${count}`
      let img = document.getElementById(id)
      img.src = entry.fields.image.fields.file.url
      img.classList.add('stickimg')
      count++;

    })
});

function openNav() {
  document.getElementById("mySidepanel").style.width = "70vh";
  }
  
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  } 