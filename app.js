const header = document.querySelector('.header')
const overlay = document.getElementById('overlay')
const xmark = document.getElementById('xmark')
const headerMenu = document.querySelector('.header_menu')
const headerRight = document.querySelector('.header_right')

window.addEventListener('scroll', () => {
  if(window.scrollY > 10) {
    header.classList.add('header_shrink')
  } else {
    header.classList.remove('header_shrink')
  }
})
const getDate = () => {
  headerRight.style.display = "none";
  overlay.classList.remove('overlay')
  headerMenu.style.display = "block";
}

headerMenu.addEventListener('click', () => {
  headerRight.style.display = "block";
  overlay.classList.add('overlay')
  headerMenu.style.display = "none";
})
xmark.addEventListener('click', () => {
  getDate()
})
document.addEventListener('keydown', (e)=> {
  if(e.key == 'Escape'){ 
    getDate()
  }
})
overlay.addEventListener('click', ()=> {
  getDate()
})