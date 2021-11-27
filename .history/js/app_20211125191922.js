window.addEventListener('scroll', function(){
  var header = document.querySelector('#header');
  if(window.scrollY > 100){
    header.classList.add('fixed')
  }else{
    header.classList.remove('fixed')
  }
}) 

console.log(window.inner)

