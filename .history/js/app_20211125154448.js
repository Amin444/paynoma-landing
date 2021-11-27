
window.addEventListener('scroll', () =>{
  var header = document.getElementById('header');
  header.classList.toggle('sticky', window.scrollY > 0 )
})