window.addEventListener('scroll', function(){
  var header = document.querySelector('#header');
  if(window.scrollY > 200){
    header.style.position = 'fixed';

  }
 
})  