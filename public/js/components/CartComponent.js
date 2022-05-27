Vue.component('basket', {
   data(){
      return {
         basketURL: '/cartData.json', // Файл JSON с товарами корзины
         basketItems: [], // Массив для товаров, добавленные в корзину
         show: false // Флаг для показа корзины
      }
   },
   mounted() {
      this.$parent.getJSON (`/api/basket`)
         .then(data => {
            for (let basketItem of data.contents) {
               this.basketItems.push(basketItem);
            }
         })
   },
   methods: {
      addProduct(basketItem) {
         let find = this.basketItems.find(el => el.id === basketItem.id);
         if(find) {
            this.$parent.putJSON (`/api/basket/${basketItem.id}`, {quantity: 1})
               .then(data => {
                  if(data.result) {
                     find.quantity++;
                  }
               })
         } else {
            const newBasketItem = Object.assign({quantity: 1}, basketItem);
            this.$parent.postJSON(`/api/basket/${basketItem.id}`, newBasketItem)
               .then(data => {
                  if(data.result) {
                     this.basketItems.push(newBasketItem);
                  }
               })
         }
      },
      deleteItem(basketItem) {
         if(basketItem.quantity > 1) {
            this.$parent.putJSON(`/api/basket/${basketItem.id}`, {quantity: -1})
               .then(data => {
                  if (data.result) {
                     basketItem.quantity--;
                  }
               })
         } else {
            this.$parent.deleteJSON(`/api/basket/${basketItem.id}`, basketItem)
               .then(data => {
                  if (data.result) {
                     this.basketItems.splice(this.basketItems.indexOf(basketItem), 1);
                  } else {
                     console.log('error');
                  }
               })
         }
      },
   },
   template: `
      <div class="header__cart">
         <button class="header__btn-cart" type="button" @click="show = !show">
           <i class="fa-solid fa-cart-shopping"></i>
         </button>
         <div class="header__basket-container" v-show="show">
           <p class="header__basket-empty" v-if="!basketItems.length">Корзина пустая</p>
           <basket-item v-for="basketItem of basketItems"
            :key="basketItem.id"
            :basketItem="basketItem" 
            @deleteItem = "deleteItem">
           </basket-item>
         </div> 
      </div>
   `
})

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
         <div class="header__btn-del" @click="$emit('deleteItem', basketItem)">
           <i class="fa-solid fa-circle-xmark"></i>
         </div>
      </div>   
   `
})
