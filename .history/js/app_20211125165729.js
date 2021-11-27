window.addEventListener('scroll', function(){
  var header = document.querySelector('#header');
  header.classList.toggle('s', window.scrollY > 100)

})