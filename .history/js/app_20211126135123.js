window.addEventListener('scroll', function(){
  var header = document.querySelector('#header');
  header.classList.toggle('fixed', window.scrollY > 100)  


}) 

const handleWindowScroll = () => {
    const one = document.getElementById('one')
    const two = document.getElementById('two')
    const three = document.getElementById('three')
    const four = document.getElementById('four')
  if (window.scrollY + window.innerHeight/2 < window.innerHeight*1)
    
  else if (window.scrollY + window.innerHeight/2 < window.innerHeight*2)
    setActive('section-2')
  else if (window.scrollY + window.innerHeight/2 < window.innerHeight*3)
    setActive('section-3')

}

window.addEventListener('scroll', handleWindowScroll)




