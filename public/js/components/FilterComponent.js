Vue.component('search', {
   data() {
      return {
         userSearch: ''
      }
   },
   template:`
      <form action="#" class="header__form" @submit.prevent="$parent.$refs.items.filter(userSearch)">
         <input type="text" class="header__input" v-model="userSearch">
         <button class="header__btn-search" type="submit">
            <i class="fas fa-search"></i>
         </button>
      </form>   
   `
});