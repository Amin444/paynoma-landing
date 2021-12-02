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

    arrowBottom.classList.add('active')
    arrowTop.classList.add('active')
  }
  else if (window.scrollY + window.innerHeight/2 < window.innerHeight*4){
    one.classList.remove('active')
    two.classList.remove('active')
    three.classList.remove('active')
    five.classList.remove('active')
    six.classList.remove('active')
    four.classList.add('active')

    arrowBottom.classList.add('active')
    arrowTop.classList.add('active')
  }
  else if (window.scrollY + window.innerHeight/2 < window.innerHeight*5){
    one.classList.remove('active')
    two.classList.remove('active')
    four.classList.remove('active')
    three.classList.remove('active')
    six.classList.remove('active')
    five.classList.add('active')

    arrowBottom.classList.add('active')
    arrowTop.classList.add('active')

  }
  else if (window.scrollY + window.innerHeight/2 < window.innerHeight*6){
    one.classList.remove('active')
    two.classList.remove('active')
    four.classList.remove('active')
    five.classList.remove('active')
    three.classList.remove('active')
    six.classList.add('active')

    arrowBottom.classList.remove('active')
    arrowTop.classList.add('active')
  }

  arrowBottom.addEventListener('click', () =>{
    window.scrollBy(0, window.innerHeight)
  })
  arrowTop.addEventListener('click', () =>{
    window.scrollBy(0, -window.innerHeight);
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
let marker2 = document.querySelector('#marker2')
let ol = document.querySelectorAll('ol li')

const indicator = e =>{
  marker.style.left = e.offsetLeft + 'px';
  marker.style.width = e.offsetWidth + 'px';

}

li.forEach(link => {
    link.addEventListener('click',(e) =>{
      indicator(e.target);
    })
});

const indicator2 = el =>{
  marker2.style.left = el.offsetLeft + 'px';
  marker2.style.width = el.offsetWidth + 'px';

}

ol.forEach(l => {
    l.addEventListener('click',(el) =>{
      indicator2(el.target);
    })
});





const title =document.getElementById('title');
const cardTitle = document.querySelectorAll('.card-title');
const icons = document.querySelectorAll('.icon');
const cardDesc = document.querySelectorAll('.card-desc');
const cards = document.querySelectorAll('.card')
const dropdown = document.getElementById('drop')
const dropContent = document.getElementById('drop-content')
const dropContent2 = document.getElementById('drop-content2')

const title2 =document.getElementById('title2');
const cardTitle2 = document.querySelectorAll('.card-title2');
const icons2 = document.querySelectorAll('.icon2');
const cardDesc2 = document.querySelectorAll('.card-desc2');
const cards2 = document.querySelectorAll('.card2')

function myFunction() {
  dropContent.classList.toggle("mobi-dropdown-content");
  document.querySelectorAll('.p').forEach(el =>{
    el.classList.toggle("flex")
  })
}

function myFunction2() {
  dropContent2.classList.toggle("mobi-dropdown-content2");
  document.querySelectorAll('.p2').forEach(el =>{
    el.classList.toggle("flex2")
  })
}


const DemandPrediction = () =>{

  indicator(li[0])

  li[0].style.color = '#03C2EC';
  
  for (let index = 0; index < li.length; index++) {
    if(li[index] !== li[0]) {
      li[index].style.color = '#999BAF'
    } 
  }
  
  drop.innerHTML = 'Demand Prediction'
  drop.style.color = '#03C2EC';
  cards[0].style.opacity = 0;
  cards[0].style.transform = 'translateY(50px)'
  cards[1].style.opacity = 0;
  cards[1].style.transform = 'translateY(50px)'
  title.style.opacity = 0;



  setTimeout(() => {

    setTimeout(() => {
      
      title.style.opacity = 1;
      title.innerHTML = 'Прогнозируйте спрос на товары с высокой точностью';
      }, 200);


    cards[0].style.transform = 'translateY(0)'
    cards[0].style.opacity = 1;
    cards[1].style.transform = 'translateY(0)'
    cards[1].style.opacity = 1;

    
    icons[0].src = '../images/box.svg'
    icons[1].src = '../images/scale.svg' 
    cardTitle[1].innerHTML = 'Управление рисками'; 
    cardDesc[0].innerHTML = 'Экономьте место на складе заказывая только необходимое'
    cardTitle[0].innerHTML = 'Управление складом'; 
    cardDesc[1].innerHTML = 'Прогнозируйте потери точнее' 
  }, 500);
  cards[2].style.display = 'none'
}

const CreditScoring = () =>{

  li[1].style.color = '#03C2EC';
  
  for (let index = 0; index < li.length; index++) {
    if(li[index] !== li[1]) {
      li[index].style.color = '#999BAF'
    } 
  }
  drop.innerHTML = 'Credit Scoring'
  drop.style.color = '#03C2EC';
  cards[0].style.opacity = 0;
  cards[0].style.transform = 'translateY(50px)'
  cards[1].style.opacity = 0;
  cards[1].style.transform = 'translateY(50px)'
  cards[2].style.opacity = 0;
  cards[2].style.transform = 'translateY(50px)'
  title.style.opacity = 0;

  setTimeout(() => {

    setTimeout(() => {
      
      title.style.opacity = 1;
      title.innerHTML = 'Выдавайте кредиты быстрее и увереннее';
      }, 200);

    
    cards[0].style.opacity = 1;
    cards[0].style.transform = 'translateY(0)'
    cards[1].style.opacity = 1;
    cards[1].style.transform = 'translateY(0)'
    cards[2].style.opacity = 1;
    cards[2].style.transform = 'translateY(0)'

   
    cardTitle[0].innerHTML = 'Моделирование'; 
    cardTitle[1].innerHTML = 'Управление Рисками'; 
    cardTitle[2].innerHTML = 'Новые Клиенты'; 
    icons[0].src = '../images/bottle.svg'
    icons[1].src = '../images/scale.svg' 
    icons[2].src = '../images/addClients.svg'
    cardDesc[0].innerHTML = 'Работайте с более точными кредитными моделями'
    cardDesc[1].innerHTML = 'Прогнозируйте потери точнее' 
    cardDesc[2].innerHTML = 'Выдавайте кредиты клиентам без кредитной истории'
  }, 500);

  cards[2].style.display = 'block'
}

const CustomerChurn = () =>{

  li[2].style.color = '#03C2EC';
  
  for (let index = 0; index < li.length; index++) {
    if(li[index] !== li[2]) {
      li[index].style.color = '#999BAF'
    } 
  }

  drop.innerHTML = 'Customer churn'
  drop.style.color = '#03C2EC';
  cards[0].style.opacity = 0;
  cards[0].style.transform = 'translateY(50px)'
  cards[1].style.opacity = 0;
  cards[1].style.transform = 'translateY(50px)'
  cards[2].style.opacity = 0;
  cards[2].style.transform = 'translateY(50px)'
  title.style.opacity = 0;

  setTimeout(() => {

    
    setTimeout(() => {
      
      title.style.opacity = 1;
      title.innerHTML = 'Узнайте какие клиенты от вас уйдут до того как они сами это поняли'
      }, 200);

    cards[0].style.opacity = 1;
    cards[0].style.transform = 'translateY(0)'
    cards[1].style.opacity = 1;
    cards[1].style.transform = 'translateY(0)'
    cards[2].style.opacity = 1;
    cards[2].style.transform = 'translateY(0)'


   
    cardTitle[0].innerHTML = 'CLV'; 
    cardTitle[1].innerHTML = 'Удержание Клиентов'; 
    cardTitle[2].innerHTML = 'Отток'; 
    icons[0].src = '../images/CLV.svg'
    icons[1].src = '../images/magnit.svg' 
    icons[2].src = '../images/bag.svg'
    cardDesc[0].innerHTML = 'Увеличьте Customer Lifetime Value'
    cardDesc[1].innerHTML = 'Найдите и удержите самых важных клиентов' 
    cardDesc[2].innerHTML = 'Постепенно уменьшайте отток клиентов'
  }, 500);


  cards[2].style.display = 'block'
}


const FastSQL = () =>{

  li[3].style.color = '#03C2EC';
  
  for (let index = 0; index < li.length; index++) {
    if(li[index] !== li[3]) {
      li[index].style.color = '#999BAF'
    } 
  }
  drop.innerHTML = 'FastSQL'
  drop.style.color = '#03C2EC';
  cards[0].style.opacity = 0;
  cards[0].style.transform = 'translateY(50px)'
  cards[1].style.opacity = 0;
  cards[1].style.transform = 'translateY(50px)'
  cards[2].style.opacity = 0;
  cards[2].style.transform = 'translateY(50px)'
  title.style.opacity = 0;

  setTimeout(() => {

    setTimeout(() => {
      
      title.style.opacity = 1;
      title.innerHTML = 'Научились SQL? Теперь забудьте!'
      }, 200);

    cards[0].style.opacity = 1;
    cards[0].style.transform = 'translateY(0)'
    cards[1].style.opacity = 1;
    cards[1].style.transform = 'translateY(0)'
    cards[2].style.opacity = 1;
    cards[2].style.transform = 'translateY(0)'

   
    cardTitle[0].innerHTML = 'NL2DB'; 
    cardTitle[1].innerHTML = 'Визуализация'; 
    cardTitle[2].innerHTML = 'Insights'; 
    icons[0].src = '../images/NL2DB.svg'
    icons[1].src = '../images/visual.svg' 
    icons[2].src = '../images/insightas.svg'
    cardDesc[0].innerHTML = 'Используйте обычную речь и получайте данные из базы'
    cardDesc[1].innerHTML = 'Задайте вопрос и получите ответ в виде графика' 
    cardDesc[2].innerHTML = 'Дайте машине сделать за вас всю аналитику'
    
  }, 500);

  cards[2].style.display = 'block'
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////


const PaymonaBI =() => {

  li[4].style.color = '#03C2EC';
  
  for (let index = 0; index < li.length; index++) {
    if(li[index] !== li[4]) {
      li[index].style.color = '#999BAF'
    } 
  }
  drop.innerHTML = 'Paymona BI'
  drop.style.color = '#03C2EC';
  cards[0].style.opacity = 0;
  cards[0].style.transform = 'translateY(50px)'
  cards[1].style.opacity = 0;
  cards[1].style.transform = 'translateY(50px)'
  cards[2].style.opacity = 0;
  cards[2].style.transform = 'translateY(50px)'
  title.style.opacity = 0;


  setTimeout(() => {
    
    setTimeout(() => {
      
    title.style.opacity = 1;
    title.innerHTML = "Сбор и анализ огромных данных";
    }, 200);

    cards[0].style.opacity = 1;
    cards[0].style.transform = 'translateY(0)'
    cards[1].style.opacity = 1;
    cards[1].style.transform = 'translateY(0)'
    cards[2].style.opacity = 1;
    cards[2].style.transform = 'translateY(0)'
    

      cardTitle[0].innerHTML = 'CustomerXP'; 
      cardTitle[1].innerHTML = 'Shops'; 
      cardTitle[2].innerHTML = 'Query'; 
      icons[0].src = '../images/customer.svg'
      icons[1].src = '../images/shops.svg' 
      icons[2].src = '../images/query.svg'
      cardDesc[0].innerHTML = 'Узнайте все о своих клиентах.'
      cardDesc[1].innerHTML = 'Управляйте всеми филиалами с одного окна.' 
      cardDesc[2].innerHTML = 'Автоматизируйте подготовку данных для анализа'
    
  }, 500);
  cards[2].style.display = 'block'
  }


  const Sado = () =>{

     indicator2(ol[0])

     ol[0].style.color = '#03C2EC';
  
     for (let index = 0; index < ol.length; index++) {
       if(ol[index] !== ol[0]) {
         ol[index].style.color = '#999BAF'
       } 
     }
    drop2.innerHTML = 'Распознавание таджикского языка'
    drop2.style.color = '#03C2EC';
    cards2[0].style.opacity = 0;
    cards2[0].style.transform = 'translateY(50px)'
    cards2[1].style.opacity = 0;
    cards2[1].style.transform = 'translateY(50px)'
    title2.style.opacity = 0;

  setTimeout(() => {

    setTimeout(() => {
      
      title2.style.opacity = 1;
      title2.innerHTML = 'Открытый проект  для обучения машин пониманию речи и текста на таджикском языке';
      }, 200);


      cards2[0].style.transform = 'translateY(0)'
      cards2[0].style.opacity = 1;
      cards2[1].style.transform = 'translateY(0)'
      cards2[1].style.opacity = 1;

      
      icons2[0].src = '../images/box.svg'
      icons2[1].src = '../images/scale.svg' 
      cardTitle2[1].innerHTML = 'Управление рисками'; 
      cardDesc2[0].innerHTML = 'Экономьте место на складе заказывая только необходимое'
      cardTitle2[0].innerHTML = 'Управление складом'; 
      cardDesc2[1].innerHTML = 'Прогнозируйте потери точнее' 
    }, 500);
    cards2[2].style.display = 'none'

  }

  const FacePay = () =>{

    ol[1].style.color = '#03C2EC';
  
    for (let index = 0; index < ol.length; index++) {
      if(ol[index] !== ol[1]) {
        ol[index].style.color = '#999BAF'
      } 
    }
    drop2.innerHTML = 'Оплата лицом'
    drop2.style.color = '#03C2EC';
    cards2[0].style.opacity = 0;
    cards2[0].style.transform = 'translateY(50px)'
    cards2[1].style.opacity = 0;
    cards2[1].style.transform = 'translateY(50px)'
    cards2[2].style.opacity = 0;
    cards2[2].style.transform = 'translateY(50px)'
    title2.style.opacity = 0;
  
  
    setTimeout(() => {
      
      setTimeout(() => {
        
      title2.style.opacity = 1;
      title2.innerHTML = "Сбор и анализ огромных данных";
      }, 200);
  
      cards2[0].style.opacity = 1;
      cards2[0].style.transform = 'translateY(0)'
      cards2[1].style.opacity = 1;
      cards2[1].style.transform = 'translateY(0)'
      cards2[2].style.opacity = 1;
      cards2[2].style.transform = 'translateY(0)'
      
  
        cardTitle2[0].innerHTML = 'CustomerXP'; 
        cardTitle2[1].innerHTML = 'Shops'; 
        cardTitle2[2].innerHTML = 'Query'; 
        icons2[0].src = '../images/customer.svg'
        icons2[1].src = '../images/shops.svg' 
        icons2[2].src = '../images/query.svg'
        cardDesc2[0].innerHTML = 'Узнайте все о своих клиентах.'
        cardDesc2[1].innerHTML = 'Управляйте всеми филиалами с одного окна.' 
        cardDesc2[2].innerHTML = 'Автоматизируйте подготовку данных для анализа'
      
    }, 500);
    cards2[2].style.display = 'block'

  }

  const Drons = () =>{

    ol[2].style.color = '#03C2EC';
  
    for (let index = 0; index < ol.length; index++) {
      if(ol[index] !== ol[2]) {
        ol[index].style.color = '#999BAF'
      } 
    }
    drop2.innerHTML = 'Дроны в сельском хозяйстве'
    drop2.style.color = '#03C2EC';
    cards2[0].style.opacity = 0;
    cards2[0].style.transform = 'translateY(50px)'
    cards2[1].style.opacity = 0;
    cards2[1].style.transform = 'translateY(50px)'
    cards2[2].style.opacity = 0;
    cards2[2].style.transform = 'translateY(50px)'
    title2.style.opacity = 0;
  
    setTimeout(() => {
  
      setTimeout(() => {
        
        title2.style.opacity = 1;
        title2.innerHTML = 'Научились SQL? Теперь забудьте!'
        }, 200);
  
      cards2[0].style.opacity = 1;
      cards2[0].style.transform = 'translateY(0)'
      cards2[1].style.opacity = 1;
      cards2[1].style.transform = 'translateY(0)'
      cards2[2].style.opacity = 1;
      cards2[2].style.transform = 'translateY(0)'
  
     
      cardTitle2[0].innerHTML = 'NL2DB'; 
      cardTitle2[1].innerHTML = 'Визуализация'; 
      cardTitle2[2].innerHTML = 'Insights'; 
      icons2[0].src = '../images/NL2DB.svg'
      icons2[1].src = '../images/visual.svg' 
      icons2[2].src = '../images/insightas.svg'
      cardDesc2[0].innerHTML = 'Используйте обычную речь и получайте данные из базы'
      cardDesc2[1].innerHTML = 'Задайте вопрос и получите ответ в виде графика' 
      cardDesc2[2].innerHTML = 'Дайте машине сделать за вас всю аналитику'
      
    }, 500);
  
    cards2[2].style.display = 'block'

  }

  const openMenu = () =>{
    document.
  }


  animOnScroll()
  handleWindowScroll();
  DemandPrediction()
  Sado();