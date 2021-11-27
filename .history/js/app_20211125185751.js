window.addEventListener('scroll', function(){
  var header = document.querySelector('#header');
  const nav1 = document.getElementById('1');
  if(window.scrollY > 100){
    header.classList.add('fixed')
  }else{
    header.classList.remove('fixed')
  }
  nav1.addEventListener('scroll', function(){
    window.scrollY > 50%;

  })

})  

