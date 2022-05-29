Vue.component("basket", {
   data() {
      return {
         basketURL: '/cartData.json',
         basketItems: [],
         show: false
      }
   }
})