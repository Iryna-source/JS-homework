// Домашня робота:
// 1) у вас є таблиця 
// пройдіть по масиву і зробіть заповнення таблиці даними з масива
const booksArray = [
    {
        title: 'Пригоди Аліси в Країні Див',
        year: 1865,
        rating: 4.5
    },
    {
        title: '1984',
        year: 1949,
        rating: 4.8
    },
    {
        title: 'Гаррі Поттер і філософський камінь',
        year: 1997,
        rating: 4.7
    }
];
const tableBody = document.querySelector('#tableContent');
booksArray.forEach(book => {
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.year}</td>
    <td>${book.rating}</td>`;

tableBody.appendChild(row);
});

// Створіть HTML-сторінку з контейнером, в який будуть додаватися елементи за допомогою JavaScript.
const elementsArray = [
    { tag: 'p', text: 'Елемент 1' },
    { tag: 'div', text: 'Елемент 2' },
    { tag: 'span', text: 'Елемент 3' }
];
const container = document.querySelector('#container');
elementsArray.forEach(element =>{
    let newElement = document.createElement(element.tag);
    newElement.textContent = element.text;
    container.appendChild(newElement);
});   

// Створіть функцію, яка приймає об'єкт і створює новий елемент з використанням document.createElement, встановлює текст елемента та повертає його в контейнер.
function createMenuItem(item) {
    let link = document.createElement("a");
    link.textContent = item.name;
    link.href = item.url;
    return link;

}


// Пройдіть циклом по масив і для кожного обєкту застосуйте створену функцію
const menuData = [
    { name: 'Головна', url: '/' },
    { name: 'Про нас', url: '/about' },
    { name: 'Послуги', url: '/services' },
];

    let menuContainer = document.getElementById("menu-container");

    menuData.forEach(item => {
        const menuItem = createMenuItem(item);
        menuContainer.appendChild(menuItem);

    });

// За допомогою js  створіть на сторінці елемент header  та задайте padding 50px та background-color жовтого кольору і властивість text-align center

let header = document.createElement("header");
header.innerHTML = "Наш сайт";
header.style.padding = "50px";
header.style.backgroundColor = "yellow";
header.style.textAlign = "center";
document.body.prepend(header);


// Створіть в хедері А теги з значенням з обєкта name  встановленим значенням в href з url.
// Додайте тегам А що створені в header  атрибут target з властивістю _blank
menuData.forEach(item =>{
    const link = document.createElement("a");
    link.textContent = item.name;
    link.href = item.url;
    link.target = "_blank";

    header.appendChild(link);
});

