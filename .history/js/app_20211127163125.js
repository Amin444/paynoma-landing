window.addEventListener('scroll', function(){
  var header = document.querySelector('#header');
  header.classList.toggle('fixed', window.scrollY > 100)  
  handleWindowScroll();
  setInterval(() => {
    animOnScroll()
  }, 500);
}) 

const handleWindowScroll = () => {
    const one = document.getElementById('one')
    const two = document.getElementById('two')
    const three = document.getElementById('three')
    const four = document.getElementById('four')
    const five = document.getElementById('five')
    const six = document.getElementById('six')
    const arrowBottom = document.getElementById('arrowBottom')
    const arrowTop = document.getElementById('arrowTop')
  

  if (window.scrollY +  window.innerHeight/2 < window.innerHeight*1){
    two.classList.remove('active')
    three.classList.remove('active')
    four.classList.remove('active')
    five.classList.remove('active')
    six.classList.remove('active')
    one.classList.add('active')

    arrowBottom.classList.add('active')
    arrowTop.classList.remove('active')
  }
  else if (window.scrollY + window.innerHeight/2 < window.innerHeight*2  ){
    one.classList.remove('active')
    three.classList.remove('active')
    four.classList.remove('active')
    five.classList.remove('active')
    six.classList.remove('active')

    arrowTop.classList.add('active')
    two.classList.add('active')

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

const animItems = document.querySelectorAll('.anim-items')

if(animItems.length > 0){
  function animOnScroll(params){
    for (let index = 0; index < animItems.length; index++) {
        const animItem = animItems[index];
        const animItemsHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 4;
  
        let animItemPoint = window.innerHeight - animItemsHeight / animStart;
        if(animItemsHeight > window.innerHeight){
          animItemPoint = window.innerHeight - window.innerHeight / animStart
        }
        if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemPoint)){
          animItem.classList.add('_active')
        }else{
          animItem.classList.remove('_active')
        }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }
}

let marker = document.querySelector('#marker')
let li = document.querySelectorAll('ul li')

const indicator = e =>{
  marker.style.left = e.offsetLeft + 'px';
  marker.style.width = e.offsetWidth + 'px';
}

li.forEach(link => {
    link.addEventListener('click',(e) =>{
      indicator(e.target);
      
    })
});

const title =document.getElementById('title');
const cardTitle = document.querySelectorAll('.card-title');
const icons = document.querySelectorAll('.icon')

const DemandPrediction = () =>{
  title.innerHTML = 'Прогнозируйте спрос на товары с высокой точностью';

}

const CreditScoring = () =>{
  title.innerHTML = 'Выдавайте кредиты быстрее и увереннее';
  for (let index = 0; index <= cardTitle.length; index++) {
    if(index === 1){
    
      cardTitle[index].innerHTML = 'CustoefwmerXP'; 
    }   
    if(index === 2){
      cardTitle[index].innerHTML = 'Shoefeps'; 
    }   
    if(index === 3){
      cardTitle[index].innerHTML = 'Query'; 
    }   
  }
  for (let index = 0; index <= icons.length; index++) {
    if(index === 1){
      icon[index].innerHTML = 
      `
      <svg width="28" height="36" viewBox="0 0 28 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 35H3C1.89543 35 1 34.1046 1 33V3C1 1.89543 1.89543 1 3 1H16.7574C17.2878 1 17.7965 1.21071 18.1716 1.58579L26.4142 9.82843C26.7893 10.2035 27 10.7122 27 11.2426V33C27 34.1046 26.1046 35 25 35Z" stroke="#03C2EC" stroke-width="2"/>
        <path d="M27 11H19C17.8954 11 17 10.1046 17 9V1" stroke="#03C2EC" stroke-width="1.8" stroke-linecap="round"/>
        <path d="M5 7H12V11H5L5 7ZM23 16V20H5L5 16H23ZM23 25V29H5L5 25H23Z" stroke="#03C2EC" stroke-width="2"/>
      </svg>`
    }   
    if(index === 2){
      cardTitle[index].innerHTML = 'Shoefeps'; 
    }   
    if(index === 3){
      cardTitle[index].innerHTML = 'Query'; 
    }   
  }
}

const CustomerChurn = () =>{
  title.innerHTML = 'Узнайте какие клиенты от вас уйдут до того как они сами это поняли'
}
const FastSQL = () =>{
  title.innerHTML = 'Научились SQL? Теперь забудьте!'
}

const PaymonaBI =() => {
  title.innerHTML = "Сбор и анализ огромных данных";

  for (let index = 0; index <= cardTitle.length; index++) {
    console.log(index, cardTitle.length)
    if(index === 0){
      cardTitle[index].innerHTML = 'CustomerXP'; 

    }   
    if(index === 1){
      cardTitle[index].innerHTML = 'Shops'; 
    }   
    if(index === 2){
      cardTitle[index].innerHTML = 'Query'; 
    }   
  }

}