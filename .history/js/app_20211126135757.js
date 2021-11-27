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

  if (window.scrollY + window.innerHeight/2 < window.innerHeight*1){
    two.classList.remove('active')
    three.classList.remove('active')
    four.classList.remove('active')
    five.classList.remove('active')
    six.classList.remove('active')
    one.classList.add('active')
  }
  else if (window.scrollY + window.innerHeight/2 < window.innerHeight*2){
    one.classList.remove('active')
    three.classList.remove('active')
    four.classList.remove('active')
    five.classList.remove('active')
    six.classList.remove('active')
    two.classList.add('active')
  }
  else if (window.scrollY + window.innerHeight/2 < window.innerHeight*3){
    one.classList.remove('active')
    two.classList.remove('active')
    four.classList.remove('active')
    five.classList.remove('active')
    six.classList.remove('active')

    three.classList.add()
  }

}

window.addEventListener('scroll', handleWindowScroll)




