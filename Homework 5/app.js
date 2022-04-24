const API = 'https://raw.githubusercontent.com/Mangecu/GeekBrains_proJS/Homework-5/Homework%205';

const items = new Vue ({
   el: '#app', // Показываем, что хотим синхронизироваться с <div id="app">
   data: { // data - это глобальные свойства
      catalogURL: '/catalogData.json', // Файл JSON с товарами каталога
      basketURL: '/basket.json', // Файл JSON с товарами корзины
      items: [], // Массив для товаров каталога (заполнять будем в методе далее)
      filtered: [], // Массив для товаров с учётом фильтрации
      userSearch: '', // Строка фильтра (будет заполняться в зависимости от того, какой товар хотим найти)
      show: false // флаг для показа корзины (по умолчанию корзина не показывается)
   },
   methods: {
      /**
       * getJSON - функция для чтения файла JSON из внешнего репозитория (аргумент url - это API)
       * */
      getJSON(url) {
         return fetch(url)
            .then(source => source.json())
            .catch(error => console.log(error));
      },
      /**
       *
       * */
      addProduct(item) {
         console.log(item);
      },
      /**
       * Метод filter - служит в качестве правила, по которому будет проводиться фильтрация.
       * Происходит заполнение массива filtered элементами item, которые проходят правила фильтра.
       * item.name - это имя каждого объекта в catalogData.json
       * */
      filter() {
         const regexp = new RegExp(this.userSearch, 'i');
         this.filtered = this.items.filter(item => regexp.test(item.name))
      }
   },
   /**
    * Метод mounted запускается в первую очередь при обращении к объекту items
    * */
   mounted() {
      this.getJSON(`${API + this.catalogURL}`)
         .then(items => {
            for (let item of items) {
              this.items.push(item);
            }
      });
      this.getJSON(`${API + this.basketURL}`)
         .then(items => {
            for (let item of items) {
              this.items.push(item);
            }
      });
   }
})




/*---------------На ООП---------------*/
/*
let itemsContainer = document.querySelector('.items');
let cartContainer = document.querySelector('.header__basket-container');
let cartBtn = document.querySelector('.header__btn-cart');
const API = 'https://raw.githubusercontent.com/Mangecu/GeekBrains_proJS/Homework-3/Homework%203';

class ProductList {
   constructor() {
      this._fetchProducts()
         .then(data => {
            this.goods = [...data];
            this.render()
         });
   }

   _fetchProducts() {
      return fetch(`${API}/catalogData.json`)
         .then(source => source.json())
         .catch(error => {
           console.log(error)
         })
   }

   render() {
      for (let product of this.goods) {
         const item = new ProductItem(product);
         itemsContainer.insertAdjacentHTML("beforeend", item.render());
      }
   }
}

class ProductItem{
   constructor(product) {
      this.name = product.name;
      this.id = product.id;
      this.price = product.price;
   }
   render() {
      return `
         <div class="item">
            <img src="https://raw.githubusercontent.com/Mangecu/GeekBrains_proJS/Homework-3/Homework%203/img/Item${this.id}.jpg" alt="${this.name}">
            <div class="item__name">${this.name}</div>
            <div class="item__price">${(this.price).toFixed(2)} р.</div>
            <button class="item__btn">Купить</button>     
         </div>`
   }
}

new ProductList();

//________Корзина___________//

class Cart {
   constructor() {
      this._fetchCartItem()
         .then(data => {
           this.goods = [...data.contents];
           this.render();
         })
      this._clickCart();
   }
   _fetchCartItem() {
      return fetch(`${API}/basket.json`)
         .then(basketSource => basketSource.json())
         .catch(error => {
           console.log(error);
         })
   }
   _clickCart() {
      cartBtn.addEventListener('click', () => {
         cartContainer.classList.toggle('hidden');
      })
   }
   render() {
      for (let product of this.goods) {
         const basketItem = new BasketItem();
         console.log(basketItem);
         cartContainer.insertAdjacentHTML('beforeend', basketItem.render(product));
      }
   }
}

class BasketItem {
   render(product) {
      return `
         <div class="header__cart-item">
            <div class="header__item-img">
               <img src="https://raw.githubusercontent.com/Mangecu/GeekBrains_proJS/Homework-3/Homework%203/img/Item${product.id}.jpg" alt="${product.name}">
            </div>
            <div class="header__item-info">
               <p class="header__item-title">${product.name}</p>
               <p class="header__item-quantity">Quantity: ${product.quantity} шт.</p>
               <p class="header__item-price">Price: ${product.price} р.</p>
            </div>
            <div>
               <p class="header__item-totalPrice">${product.quantity * product.price} р.</p>
            </div>
            <div class="header__btn-del">
               <i class="fa-solid fa-circle-xmark"></i>
            </div>
         </div>
      `
   }
}

new Cart();
*/



