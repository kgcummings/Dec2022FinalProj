var client = contentful.createClient({
  space: '1zc3v8j45y0t',
  accessToken: 'ApVKNghAt58mmqLilen09IAFmpa09HeC0tRWuaDnjg0',
  });


  client.getEntries().then(entries => {

   // let sticker = document.getElementById('sticker');

    // let shuffledArray = entries.items.shuffle();

    let imgcount = 1;
    entries.items.forEach(entry => {
        // let html = `
        // <img class='stickimg' src='${entry.fields.image.fields.file.url}'>
        // `;
        // sticker.innerHTML += html;
        let id = `img${imgcount}`
      let img = document.getElementById(id)
      img.src = entry.fields.image.fields.file.url
      img.classList.add('stickimg')
      imgcount++;
    })
    let desccount = 1;
    entries.items.forEach(entry => {
        let id = `desc${desccount}`
      let desc = document.getElementById(id)
      desc.textContent = entry.fields.description
      desc.classList.add('description')
      desccount++;
    })
});

function openNav() {
  document.getElementById("mySidepanel").style.width = "40vw";
  }
  
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  } 

window.onscroll = function () {
  circleRotate();
};

function circleRotate(){
  let image = document.getElementById("circle");
  image.style.transform = "rotate(" + window.pageYOffset/3 + "deg)";
}


//function textGrab(){
  document.getElementById().innerHTML = entry.fields.image.fields.file.url
//}