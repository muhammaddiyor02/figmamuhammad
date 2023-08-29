var elCarList = document.querySelector('.hoops__list')
var elCarBtn = document.querySelector('.hoops__impo')



var count = 0
function fnOpen() {
  count = count + 1
  if (count > 3) {
    count = 0


  }
  console.log('ok');
  elCarList.style.transform = `translate(-${1250 * count}px)`
}
var elList = document.querySelector('.object__list')
console.log(elList);


var cardData = [
  
  {
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQop7SwAGW_yFFPL_x0Gc2tqXpcuRg_-6EiEQ&usqp=CAU',
    name: 'Lira Earrings',
    price:'$20,00'

  },
  {
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQop7SwAGW_yFFPL_x0Gc2tqXpcuRg_-6EiEQ&usqp=CAU',
    name: 'Hal Earrings',
    price:'$ 25,00'

  },
  {
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQop7SwAGW_yFFPL_x0Gc2tqXpcuRg_-6EiEQ&usqp=CAU',
    name: 'Kaede Hair Pin Set Of 3 ',
    price:'$ 30,00'

  },
  {
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQop7SwAGW_yFFPL_x0Gc2tqXpcuRg_-6EiEQ&usqp=CAU',
    name: 'Hair Pin Set of 3',
    price:'$ 30,00'

  },
  {
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQop7SwAGW_yFFPL_x0Gc2tqXpcuRg_-6EiEQ&usqp=CAU',
    name: 'Plaine Necklace',
    price:'$ 19,00'

  },
  {
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQop7SwAGW_yFFPL_x0Gc2tqXpcuRg_-6EiEQ&usqp=CAU',
    name: 'Yuki Hair Pin Set of 3',
    price:'$29,000'

  },
]
cardData.forEach((item)=>{
  var newLi =document.createElement('li')
  newLi.innerHTML = `<div class="card" style="width: 18rem;">
  <img src="${item.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${item.name}</h5>
    <p class="card-text">${item.price}</p>
  </div>
</div>`
newLi.style.margin = '30px'
newLi.style.border = 'none'


elList.appendChild(newLi)

})