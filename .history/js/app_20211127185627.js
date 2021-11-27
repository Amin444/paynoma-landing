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
const icons = document.querySelectorAll('.icon');
const cardDesc = document.querySelectorAll('.card-desc');
const cards = document.querySelectorAll('.card')




const DemandPrediction = () =>{

  cards[0].style.opacity = 0;
  cards[0].style.transform = 'translateY(50px)'
  cards[1].style.opacity = 0;
  cards[1].style.transform = 'translateY(50px)'

  setTimeout(() => {

    cards[0].style.transform = 'translateY(0)'
    cards[0].style.opacity = 1;
    cards[1].style.transform = 'translateY(0)'
    cards[1].style.opacity = 1;

    title.innerHTML = 'Прогнозируйте спрос на товары с высокой точностью';
    icons[0].src = '../images/box.svg'
    icons[1].src = '../images/scale.svg' 
    cardTitle[1].innerHTML = 'Управление рисками'; 
    cardDesc[0].innerHTML = 'Экономьте место на складе заказывая только необходимое'
    cardTitle[0].innerHTML = 'Управление складом'; 
    cardDesc[1].innerHTML = 'Прогнозируйте потери точнее' 
  }, 1000);
  cards[2].style.display = 'none'
}

const CreditScoring = () =>{

  cards[0].style.opacity = 0;
  cards[0].style.transform = 'translateY(50px)'
  cards[1].style.opacity = 0;
  cards[1].style.transform = 'translateY(50px)'
  cards[2].style.opacity = 0;
  cards[2].style.transform = 'translateY(50px)'
  setTimeout(() => {
    
    cards[0].style.opacity = 1;
    cards[0].style.transform = 'translateY(0)'
    cards[1].style.opacity = 1;
    cards[1].style.transform = 'translateY(0)'
    cards[2].style.opacity = 1;
    cards[2].style.transform = 'translateY(0)'

    title.innerHTML = 'Выдавайте кредиты быстрее и увереннее';
    cardTitle[0].innerHTML = 'Моделирование'; 
    cardTitle[1].innerHTML = 'Управление Рисками'; 
    cardTitle[2].innerHTML = 'Новые Клиенты'; 
    icons[0].src = '../images/bottle.svg'
    icons[1].src = '../images/scale.svg' 
    icons[2].src = '../images/addClients.svg'
    cardDesc[0].innerHTML = 'Работайте с более точными кредитными моделями'
    cardDesc[1].innerHTML = 'Прогнозируйте потери точнее' 
    cardDesc[2].innerHTML = 'Выдавайте кредиты клиентам без кредитной истории'
  }, 1000);

  cards[2].style.display = 'block'
}

const CustomerChurn = () =>{

  cards[0].style.opacity = 0;
  cards[0].style.transform = 'translateY(50px)'
  cards[1].style.opacity = 0;
  cards[1].style.transform = 'translateY(50px)'
  cards[2].style.opacity = 0;
  cards[2].style.transform = 'translateY(50px)'

  setTimeout(() => {

    cards[0].style.opacity = 1;
    cards[0].style.transform = 'translateY(0)'
    cards[1].style.opacity = 1;
    cards[1].style.transform = 'translateY(0)'
    cards[2].style.opacity = 1;
    cards[2].style.transform = 'translateY(0)'


    title.innerHTML = 'Узнайте какие клиенты от вас уйдут до того как они сами это поняли'
    cardTitle[0].innerHTML = 'CLV'; 
    cardTitle[1].innerHTML = 'Удержание Клиентов'; 
    cardTitle[2].innerHTML = 'Отток'; 
    icons[0].src = '../images/CLV.svg'
    icons[1].src = '../images/magnit.svg' 
    icons[2].src = '../images/bag.svg'
    cardDesc[0].innerHTML = 'Увеличьте Customer Lifetime Value'
    cardDesc[1].innerHTML = 'Найдите и удержите самых важных клиентов' 
    cardDesc[2].innerHTML = 'Постепенно уменьшайте отток клиентов'
  }, 1000);


  cards[2].style.display = 'block'
}


const FastSQL = () =>{

  cards[0].style.opacity = 0;
  cards[0].style.transform = 'translateY(50px)'
  cards[1].style.opacity = 0;
  cards[1].style.transform = 'translateY(50px)'
  cards[2].style.opacity = 0;
  cards[2].style.transform = 'translateY(50px)'

  setTimeout(() => {

    cards[0].style.opacity = 1;
    cards[0].style.transform = 'translateY(0)'
    cards[1].style.opacity = 1;
    cards[1].style.transform = 'translateY(0)'
    cards[2].style.opacity = 1;
    cards[2].style.transform = 'translateY(0)'

    title.innerHTML = 'Научились SQL? Теперь забудьте!'
    cardTitle[0].innerHTML = 'NL2DB'; 
    cardTitle[1].innerHTML = 'Визуализация'; 
    cardTitle[2].innerHTML = 'Insights'; 
    icons[0].src = '../images/NL2DB.svg'
    icons[1].src = '../images/visual.svg' 
    icons[2].src = '../images/insightas.svg'
    cardDesc[0].innerHTML = 'Используйте обычную речь и получайте данные из базы'
    cardDesc[1].innerHTML = 'Задайте вопрос и получите ответ в виде графика' 
    cardDesc[2].innerHTML = 'Дайте машине сделать за вас всю аналитику'
    
  }, 1000);

  cards[2].style.display = 'block'
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////


const PaymonaBI =() => {

  cards[0].style.opacity = 0;
  cards[0].style.transform = 'translateY(50px)'
  cards[1].style.opacity = 0;
  cards[1].style.transform = 'translateY(50px)'
  cards[2].style.opacity = 0;
  cards[2].style.transform = 'translateY(50px)'
  title.style.opacity = 0;


  setTimeout(() => {
    
    setTimeout(() => {
      
    }, timeout);

    cards[0].style.opacity = 1;
    cards[0].style.transform = 'translateY(0)'
    cards[1].style.opacity = 1;
    cards[1].style.transform = 'translateY(0)'
    cards[2].style.opacity = 1;
    cards[2].style.transform = 'translateY(0)'
    
      title.innerHTML = "Сбор и анализ огромных данных";
      cardTitle[0].innerHTML = 'CustomerXP'; 
      cardTitle[1].innerHTML = 'Shops'; 
      cardTitle[2].innerHTML = 'Query'; 
      icons[0].src = '../images/customer.svg'
      icons[1].src = '../images/shops.svg' 
      icons[2].src = '../images/query.svg'
      cardDesc[0].innerHTML = 'Узнайте все о своих клиентах.'
      cardDesc[1].innerHTML = 'Управляйте всеми филиалами с одного окна.' 
      cardDesc[2].innerHTML = 'Автоматизируйте подготовку данных для анализа'
    
  }, 1000);
  cards[2].style.display = 'block'
  }

  PaymonaBI();