window.addEventListener('scroll', function(){
  var header = document.querySelector('#header');
  const nav1 = document.getElementById('nav1');
  if(window.scrollY > 100){
    header.classList.add('fixed')
  }else{
    header.classList.remove('fixed')
  }
 
})  

