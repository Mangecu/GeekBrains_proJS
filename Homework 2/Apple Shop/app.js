let itemsContainer = document.querySelector('.items');
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

class ProductList {
   constructor(products) {
      this.goods = products;
      this.render();
   }
   render() {
      let sum = 0;
      for (let product of this.goods) {
         const item = new ProductItem(product);
         itemsContainer.insertAdjacentHTML("beforeend", item.render());
         sum += product.price;
      }
      itemsContainer.insertAdjacentHTML("afterend", this.renderTotalSum(sum));
   }

   renderTotalSum(sum) {
      return `
         <div class="items__total-sum">
            <p>Сумма всех товаров равна: <span>${sum.toFixed(2)}</span> руб.</p>         
         </div>
      `
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
            <img src="https://raw.githubusercontent.com/Mangecu/GeekBrains_proJS/Homework-1/Homework%201/img/Item${this.id}.jpg" alt="${this.name}">
            <div class="item__name">${this.name}</div>
            <div class="item__price">${(this.price).toFixed(2)} р.</div>
            <button class="item__btn">Купить</button>     
         </div>`
   }
}

new ProductList(products);


// Структуру классов для работы с корзиной представляю себе так.
class CartList {

   /**
    * Метод render должен отправлять команду отрисовки в AddItemToCart или в RemoveItemFromCart в зависимости от того,
    * добавляем товар в корзину или удаляем его
    * */
   render() {
   }

   /**
    * Метод countPrice должен считать стоимость товаров, добавленные в корзину
    * */
   countPrice() {

   }

   /**
    * Метод countItems должен считать количество товаров, добавленные в корзину
    * (но есть подозрения, что подсчет количества товаров и суммы товаров в корзине будут выполняться в рамках одного
    * метода)
    * */
   countItems() {

   }
}

class AddItemToCart {

   /**
    * В данном методе будет возвращаться верстка при добавлении товара
    * */
   render() {

   }
}

class RemoveItemFromCart {

   /**
    * В данном методе будет производиться удаление верстки товара, который удалили из корзины
    * */
   render() {

   }
}


