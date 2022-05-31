Vue.component("cart", {
   data() {
      return {
         cartURL: '/cartData.json',
         cartItems: [],
         show: false
      }
   },
   mounted() {
      this.$parent.getJSON (`/api/cart`)
              .then(data => {
                 for (let cartItem of data.contents) {
                    this.cartItems.push(cartItem);
                 }
              })
   },
   methods: {
      addProduct(cartItem) {
         let find = this.cartItems.find(el => el.id === cartItem.id);
         if(find) {
            this.$parent.putJSON (`/api/cart/${cartItem.id}`, {quantity: 1})
               .then(data => {
                 if(data.result) {
                    find.quantity++;
                 }
               })
         } else {
            const newCartItem = Object.assign({quantity: 1}, cartItem);
            this.$parent.postJSON(`/api/cart/${cartItem.id}`, newCartItem)
               .then(data => {
                 if(data.result) {
                    this.cartItems.push(newCartItem);
                 }
               })
         }
      },
      deleteItem(cartItem) {
         if(cartItem.quantity > 1) {
            this.$parent.putJSON(`/api/cart/${cartItem.id}`, {quantity: -1})
               .then(data => {
                 if (data.result) {
                    cartItem.quantity--;
                 }
               })
         } else {
            this.$parent.deleteJSON(`/api/cart/${cartItem.id}`, cartItem)
               .then(data => {
                 if (data.result) {
                    this.cartItems.splice(this.cartItems.indexOf(cartItem), 1);
                 } else {
                    console.log('error');
                 }
               })
         }
      },
   },
   template:`
      <div class="header__cart-block">
         <button class="header__cart-btn" @click="show = !show">
            <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="29px" viewBox="0 0 36 32">
               <path fill-rule="evenodd" d="M3.1835938,4.3639603 C3.1835938,4.3639603 6.57666,4.3639603 6.57666,4.3639603 C6.57666,4.3639603 11.409912,21.81926 11.409912,21.81926 C11.547852,22.331264 12.021362,22.685959 12.553955,22.685959 C12.553955,22.685959 27.40857,22.685959 27.40857,22.685959 C27.881958,22.685959 28.296265,22.410057 28.49353,21.976841 C28.49353,21.976841 33.89868,9.564976 33.89868,9.564976 C34.05652,9.190784 34.01709,8.777065 33.80017,8.442135 C33.583008,8.107204 33.208252,7.910095 32.81372,7.910095 C32.81372,7.910095 16.400757,7.910095 16.400757,7.910095 C15.749756,7.910095 15.217163,8.442135 15.217163,9.092228 C15.217163,9.742321 15.749756,10.274361 16.400757,10.274361 C16.400757,10.274361 30.998901,10.274361 30.998901,10.274361 C30.998901,10.274361 26.619507,20.32196 26.619507,20.32196 C26.619507,20.32196 13.44165,20.32196 13.44165,20.32196 C13.44165,20.32196 8.6085205,2.866665 8.6085205,2.866665 C8.470581,2.3543892 7.9970703,1.9996948 7.4643555,1.9996948 C7.4643555,1.9996948 3.1835938,1.9996948 3.1835938,1.9996948 C2.5325928,1.9996948 2.0,2.5317345 2.0,3.1818275 C2.0,3.8319206 2.5325928,4.3639603 3.1835938,4.3639603 ZM11.429443,30.999886 C12.909058,30.999886 14.112427,29.798256 14.112427,28.320457 C14.112427,26.842926 12.909058,25.641293 11.429443,25.641293 C9.949951,25.641293 8.746582,26.842926 8.746582,28.320457 C8.746582,29.797989 9.949951,30.999886 11.429443,30.999886 ZM28.197632,30.999886 C28.256836,30.999886 28.335815,30.999886 28.39502,30.999886 C29.105103,30.940865 29.756104,30.625694 30.229614,30.07389 C30.703003,29.542122 30.920044,28.852493 30.880493,28.123611 C30.781982,26.66558 29.499756,25.542736 28.020142,25.641293 C26.540527,25.739582 25.435791,27.040031 25.534546,28.497803 C25.633179,29.896545 26.796997,30.999886 28.197632,30.999886 Z"/>
            </svg>
            <span>2</span>
         </button>
         <div class="header__cart-wrap" v-show="show">
            <p class="header__cart-empty" v-if="!cartItems.length">Empty</p>
            <div class="header__cart-container" v-if="cartItems.length">
               <cart-item></cart-item>
               <div class="header__cart-check">
                  <div class="header__cart-total">
                     <p>total</p>
                     <p>$<span>500.00</span></p>
                  </div>
                  <button class="header__cart-checkBtn"><a href="#">Checkout</a></button>
                  <button class="header__cart-goToCartBtn"><a href="#">Go to cart</a></button>
               </div>
            </div>
        </div>
     </div>
   `
});

Vue.component('cart-item', {
   props:['cartItem'],
   template: `
      <div class="header__cart-item">
         <img :src="cartItem.img" alt="{{ cartItem.name }}">
         <div class="header__cart-item-info">
            <p class="header__cart-item-name">{{ cartItem.name }}</p>
            <div class="header__cart-item-count">
               <span class="header__cart-item-quantity">{{ cartItem.quantity }}</span> &times; <p class="header__cart-item-price">$<span>{{ cartItem.price }}</span></p>
            </div>
         </div>
         <button><i class="fa-solid fa-circle-xmark" @click="$emit('deleteItem', cartItem)"></i></button>
      </div>   
   `
})