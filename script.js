var client = contentful.createClient({
    space: '[space]',
    accessToken: '[accss]',
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
  document.getElementById("mySidepanel").style.width = "45%";
  }
  
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  } 

  window.onscroll = function () {
    circleRotate();
};

  function circleRotate(){
    let image = document.getElementById("circle");
    image.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
  }
