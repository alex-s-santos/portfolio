const toggleButton = document.querySelector('#toggle');
const xButton = document.querySelector('#x');
const menuList = document.querySelector('#menu-list');

toggleButton.addEventListener("click", function(){
    toggleButton.classList.add('toggle-button-click');
    toggleButton.classList.remove('toggle-button');
    xButton.classList.remove('x-button');
    xButton.classList.add('x-button-click');
    menuList.classList.remove('menu-list-hidden');
    menuList.classList.add('menu-list-activated');
})

xButton.addEventListener('click', function(){
    xButton.classList.add('x-button');
    xButton.classList.remove('x-button-click');
    toggleButton.classList.remove('toggle-button-click');
    toggleButton.classList.add('toggle-button');
    menuList.classList.add('menu-list-hidden');
    menuList.classList.remove('menu-list-activated');
})