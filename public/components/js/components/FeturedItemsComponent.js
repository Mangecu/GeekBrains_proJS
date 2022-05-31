Vue.component('fetured-items', {
   data(){
      return {
         catalogURL: '/catalogData.json',
         feturedItems: []
      }
   },
   mounted() {
      this.$parent.getJSON(`/api/feturedItems`)
         .then(data => {
           for (let feturedItem of data) {
              this.$data.feturedItems.push(feturedItem);

           }
         })
   },
   template: `
      <div class="main__fetured-items">
        <fetured-item v-for="feturedItem of feturedItems"
        :key="feturedItem.id"
        :fetured-item="feturedItem" 
        @add-product="$parent.$refs.cart.addProduct">
        </fetured-item>
      </div>   
   `
});

Vue.component('fetured-item', {
   props:['feturedItem'],
   template:`
      <div class="main__item">
         <div class="main__item-info">
            <img :src="feturedItem.img" alt="{{ feturedItem.name }}">
            <div class="main__item-disc">
               <h3>{{ feturedItem.name }}</h3>
               <h3>$ {{ feturedItem.price.toFixed(2) }}</h3>
            </div>
         </div>
         <div class="main__item-hover">
            <button class="main__item-cart" @click="$emit('add-product', feturedItem)">
               <img src="https://raw.githubusercontent.com/Mangecu/GeekBrains_proHTML/gh_project/src/assets/svg/addToCart.svg" alt="addToCart-img">
               Add to Cart
            </button>
         </div>
      </div>   
   `
})

