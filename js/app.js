const menuList = document.getElementById('menu-list');
const menuBtn = document.getElementById('menu-btn');

menuList.style.maxHeight = '0px';

const mostrarMenu = () => 
    (menuList.style.maxHeight == '0px' ?  menuList.style.maxHeight = '120px' : menuList.style.maxHeight = '0px'); 

menuBtn.addEventListener("click", () => mostrarMenu());

console.log('carregou script')