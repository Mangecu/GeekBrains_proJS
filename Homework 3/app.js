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




