const openSidebar = document.querySelector('.sidebar-open-btn');
const closeSidebar = document.querySelector('.sidebar-close-btn');
const sidebar = document.querySelector('.sidebar');
const questionCont = document.querySelector('.faq-center');
const questions = document.querySelectorAll('.question');



// sidebar Open
openSidebar.addEventListener('click', (e) => {
    sidebar.classList.add('show');
});
closeSidebar.addEventListener('click', (e) => {
    sidebar.classList.remove('show');
});



