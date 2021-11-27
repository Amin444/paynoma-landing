window.addEventListener('scroll', function(){
  var header = document.querySelector('#header');
  header.classList.toggle('fi', window.scrollY > 100)

})