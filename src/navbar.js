var navbar = document.getElementById('navbar');

navbar.innerHTML += ` <h2 class="name">DinuB</h2>`;

var menus = ['Home', 'Bio', 'Portofolio'];

for (value of menus){
  navbar.innerHTML +=
  `<a href="#" class="menuLink">${value}</a>`
}
