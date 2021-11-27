window.addEventListener('scroll', function(){
  var header = document.querySelector('#header');
  console.log("123")
  header.classList.toggle('sticky', window.scrollY > 100)
})