/**
 * Компонент search - это поле input для фильтрации
 * В компонентах data является методом
 * В данном компоненте data возвращает объект с одним свойством - userSearch.
 * userSearch находится в app.js и нужен для получения строки, которую вводим в input
 * */
Vue.component('search', {
   data() {
      return {
         userSearch: ''
      }
   },
   template:`
      <form action="#" class="header__form" @submit.prevent="$parent.filter">
         <input type="text" class="header__input" v-model="$parent.userSearch">
         <button class="header__btn-search" type="submit">
            <i class="fas fa-search"></i>
         </button>
      </form>   
   `
});