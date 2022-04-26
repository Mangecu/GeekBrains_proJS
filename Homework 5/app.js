const API = 'https://raw.githubusercontent.com/Mangecu/GeekBrains_proJS/Homework-5/Homework%205';

const goods = new Vue({
   el:'#app',
   data: {
      catalogURL: '/catalogData.json',
      basketURL: '/basket.json',
      items: [],
      filtered: [],
      basketItems: [],
      userSearch: '',
      show: false
   },
   methods: {
      getJSON(url) {
         return fetch(url)
                 .then(source => source.json())
                 .catch(error => console.log(error))
      },
      filter() {
         if (!this.userSearch.length) {
            this.filtered = this.items;
         } else {
            const regexp = new RegExp(this.userSearch, 'i');
            this.filtered = this.filtered.filter(item => regexp.test(item.name));
            console.log(this.filtered);
         }
      },
      addProduct(item) {
         let find = this.basketItems.find(basketItem => basketItem.id === item.id);
         if(find){
            find.quantity++;
         } else {
            const prod = Object.assign({quantity: 1}, item);
            this.basketItems.push(prod)
         }
      },
      removeItem(basketItem) {
         if(basketItem.quantity > 1){
            basketItem.quantity--;
         } else {
            this.basketItems.splice(this.basketItems.indexOf(basketItem), 1);
         }
      }
   },
   mounted() {
      this.getJSON(`${API + this.catalogURL}`)
              .then(items => {
                 for (let item of items) {
                    this.items.push(item);
                    this.filtered.push(item);
                 }
              });
      this.getJSON(`${API + this.basketURL}`)
              .then(basketItems => {
                 for (let basketItem of basketItems.contents) {
                    this.basketItems.push(basketItem);
                 }
              })
   }
})


