window.addEventListener('scroll', () =>{
  const header = document.getElementById('header');
  header.classList.toggle('sticky', window.scroll )
})