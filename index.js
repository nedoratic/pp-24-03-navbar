const menuBtn = document.querySelector('.navbar__toggler__btn');
const menuItems = document.querySelector('.navbar__menu-items');

const toggleHideClass = () => menuItems.classList.toggle('hide');

menuBtn.addEventListener('click', toggleHideClass);
