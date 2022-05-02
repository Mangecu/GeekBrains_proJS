/**
 * Компонент basket - это контейнер корзины
 * С помощью атрибута :basket-items, который прописан в теге <basket></basket>, передаём в props массив basketItems из app.js.
 * Внутри компонента basket "вкладывается" компонент basket-item
 * Используя цикл v-for, не только выводятся все элементы массива basketItems,
 * но так же используя переменную basketItem, передаём её в качестве атрибута в компонент basket-item
 * */
Vue.component('basket', {
   props: ['basketItems', 'visibility'],
   template: `
      <div class="header__basket-container" v-show="visibility">
      <p class="header__basket-empty" v-if="!basketItems.length">Корзина пустая</p>
         <basket-item v-for="basketItem of basketItems" :key="basketItem.id" :basketItem="basketItem"></basket-item>
      </div>
   `
});
/**
 * Компонент basket-item - это каждый элемент массива basketItems
 * В этом компоненте принимаем объект basketItem в props
 * */
Vue.component('basket-item', {
   props: ['basketItem'],
   template:`
      <div class="header__basket-item">
         <div class="header__item-img">
           <img :src="basketItem.img" alt="item.name">
         </div>
         <div class="header__item-info">
           <p class="header__item-title">{{ basketItem.name }}</p>
           <p class="header__item-quantity">Quantity: {{ basketItem.quantity }} шт.</p>
           <p class="header__item-price">Price: {{ basketItem.price }} р.</p>
         </div>
         <div>
           <p class="header__item-totalPrice">{{ basketItem.quantity * basketItem.price }} р.</p>
         </div>
         <div class="header__btn-del" @click="$root.removeItem(basketItem)">
           <i class="fa-solid fa-circle-xmark"></i>
         </div>
      </div>
   `
})
