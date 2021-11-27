window.addEventListener('scroll', function(){
  var header = document.querySelector('#header');
  header.classList.toggle('fixed', window.scrollY > 100)  


}) 

const handleWindowScroll = () => {
    const one = document.getElementById('one')
    const two = document.getElementById('two')
    const three = document.getElementById('three')
    const four = document.getElementById('four')
    const five = document.getElementById('five')
    const six = document.getElementById('six')

  if (window.scrollY + window.innerHeight/2 < window.innerHeight*1)
      one.classList.add('active')
  else if (window.scrollY + window.innerHeight/2 < window.innerHeight*2)
      one.classList.r
      two.classList.add('active')
  else if (window.scrollY + window.innerHeight/2 < window.innerHeight*3)
    setActive('section-3')

}

window.addEventListener('scroll', handleWindowScroll)




