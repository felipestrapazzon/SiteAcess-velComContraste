//start


var link_contraste_branco = document.querySelector('#contraste_branco')
var AllTags = document.querySelectorAll('*')








//white




link_contraste_branco.addEventListener('click', function(){
  console.log(AllTags);
  for(let i = 0; i< AllTags.length; i++){
      let tag = AllTags[i]

    if (tag.nodeName == 'A') {
      tag.style.backgroundColor = 'black'
      tag.style.color = 'white'
    } else {
      tag.style.backgroundColor = 'white'
      tag.style.color = 'black'
    }
  }
})





//black


var link_contraste_preto = document.querySelector('#contraste_preto')
var AllTags = document.querySelectorAll('*')
link_contraste_preto.addEventListener('click', function(){
  console.log(AllTags);
  for(let i = 0; i< AllTags.length; i++){
      let tag = AllTags[i]

    if (tag.nodeName == 'A') {
      tag.style.backgroundColor = 'white'
      tag.style.color = 'black'
    } else {
      tag.style.backgroundColor = 'black'
      tag.style.color = 'white'
    }
  }
})



//nonecont


var noneCont = document.querySelector("#sem_contraste");
noneCont.addEventListener("click", function() {
    
    location.reload();
});