const products = [
    {
        id: 1,
        name: 'iPhone 13 256Gb',
        price: 86990
    },
    {
        id: 2,
        name: 'Apple MacBook Pro 14"',
        price: 309990
    },
    {
        id: 3,
        name: 'Apple Watch Series 7',
        price: 49490
    },
    {
        id: 4,
        name: 'Apple iPad Pro 12.9 Wi-Fi 256GB',
        price: 139990
    },
]

const renderProduct = (item) =>
    `<div class="item">
         <img src="https://raw.githubusercontent.com/Mangecu/GeekBrains_proJS/Homework-1/Homework%201/img/Item${item.id}.jpg" alt="${name}">
         <div class="item__name">${item.name}</div>
         <div class="item__price">${item.price} р.</div>
         <button class="item__btn">Купить</button>     
      </div>`

let items = document.querySelector('.items');
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item)).join("");
    console.dir(productsList);
    items.innerHTML = productsList;
}

renderPage(products);

/* Вопрос: откуда берутся запятые при отображении полученного массива на странице
*  Ответ: Предполагаю, что это происходит после "map". То есть при сборке итогового массива с версткой каждого элемента,
*  "map" разделяет их запятыми. Избавиться можно либо через "join", либо вместо "map" использовать "reduce"
* */