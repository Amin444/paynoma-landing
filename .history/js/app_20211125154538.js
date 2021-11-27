
window.addEventListener('scroll', () =>{
  var header = document.q('header');
  header.classList.toggle('sticky', window.scrollY > 0 )
})