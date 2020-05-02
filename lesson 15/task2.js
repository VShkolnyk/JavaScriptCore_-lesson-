let menuElement = document.getElementById('menu');

menuElement.querySelector('p').onclick = function() {
    menuElement.classList.toggle('closeOpen');
};