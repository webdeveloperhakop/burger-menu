const burgerBtn = document.querySelector('.burger-btn')
const headerMenu = document.querySelector('.header-menu')
const closeMenu = document.querySelector('.close-menu')


burgerBtn.addEventListener('click', ()=>{
    headerMenu.classList.add('active-menu')
})

closeMenu.addEventListener('click', ()=>{
    headerMenu.classList.remove('active-menu')
})



