window.addEventListener('scroll', function(){
  var header = document.querySelector('#header');
  header.classList.toggle('fixed', window.scrollY > 100)  


}) 
var items = document.querySelectorAll('li[id]')
const handleWindowScroll = () => {
    const one = document.getElementById('one')
    const two = document.getElementById('two')
    const three = document.getElementById('three')
    const four = document.getElementById('four')
    const five = document.getElementById('five')
    const six = document.getElementById('six')
    const arrowBottom = document.getElementById('arrowBottom')
    const arrowTop = document.getElementById('arrowTop')
    const sec = document.getElementById('2')
    const product = document.getElementById('product')
   

  if (window.scrollY +  window.innerHeight/2 < window.innerHeight*1){
    two.classList.remove('active')
    three.classList.remove('active')
    four.classList.remove('active')
    five.classList.remove('active')
    six.classList.remove('active')
    one.classList.add('active')

    arrowBottom.classList.add('active')
    arrowTop.classList.remove('active')

    product.style.opacity =0;
    product.style.transform = 'translateY(40px)';


  }
  else if (window.scrollY + window.innerHeight/2 < window.innerHeight*2){
    one.classList.remove('active')
    three.classList.remove('active')
    four.classList.remove('active')
    five.classList.remove('active')
    six.classList.remove('active')

    arrowTop.classList.add('active')
    two.classList.add('active')

    product.style.opacity =1;
    product.style.transform = 'translateY(0px)';
   

     console.log("aslkjdkl")
    // items.forEach(element => {
    //     setInterval(() => {
    //         element.style.opacity = 1;
    //         console.log(element)
            
    //         element.style.transition = '300ms';
    //     }, 3000);
    // });
  }
  else if (window.scrollY + window.innerHeight/2 < window.innerHeight*3){
    one.classList.remove('active')
    two.classList.remove('active')
    four.classList.remove('active')
    five.classList.remove('active')
    six.classList.remove('active')
    three.classList.add('active')
  }

  arrowBottom.addEventListener('click', () =>{
    const next =  window.pageYOffset + window.innerHeight;
    window.scrollBy(next, next)
  })

}

window.addEventListener('scroll', handleWindowScroll)




