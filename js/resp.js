burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
rightNav=document.querySelector('.rightNav')
navList=document.querySelector('.nav-list')
logo=document.querySelector('Logo')


burger.addEventListener('click',()=>{
    navbar.classList.toggle('h-nav')
    rightNav.classList.toggle('v-class')
    navList.classList.toggle('v-class')
    logo.classList.toggle('v-class')
})
