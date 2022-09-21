
//Class toggle for Heart
const hearts = Array.from(document.getElementsByClassName('heart-like'))
hearts.forEach((e) =>{
  e.addEventListener("click",function(){
    e.classList.toggle('heart-active')
  if(e.classList.contains('heart-active')){
    e.innerHTML ='<i class="align-self-center icon3 fas fa-heart"></i>'
  } else {
  e.innerHTML ='<i class="align-self-center icon3 far fa-heart"></i>'
}
  })
}
)