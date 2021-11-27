
window.addEventListener('scroll', function (e)=> {
  var header = document.querySelector('#header');
  header.classList.toggle('sticky', window.scrollY > 100 )
  console.log(header)
})