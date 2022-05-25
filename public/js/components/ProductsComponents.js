Vue.component('items', {
   data() {
      return {
         catalogURL: '/catalogData.json',
         items: [],
         filtered: [],
      }
   },
   mounted() {
      this.$parent.getJSON(`/api/products`)
         .then(data => {
            for (let item of data) {
               this.$data.items.push(item);
               this.$data.filtered.push(item);
            }
         })
   },
   methods: {
      filter(userSearch) {
         if (!userSearch.length) {
            this.filtered = this.items;
         } else {
            const regexp = new RegExp(userSearch, 'i');
            this.filtered = this.filtered.filter(item => regexp.test(item.name));
         }
      }
   },
   template:`
      <div class="main__items">
         <item v-for="item of filtered"
         :key="item.id"
         :item="item"
         @add-product="$parent.$refs.basket.addProduct">
         </item>      
      </div>   
   `
})

Vue.component('item', {
   props: ['item'],
   template: `
      <div class="main__item">
         <img :src="item.img" alt="item.name">
         <div class="main__item-name">{{item.name}}</div>
         <div class="main__item-price">{{item.price.toFixed(2)}} р.</div>
         <button class="main__item-btn" @click="$emit('add-product', item)">Купить</button>
      </div>
   `
})