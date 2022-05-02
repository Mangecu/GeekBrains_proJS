const API = 'https://raw.githubusercontent.com/Mangecu/GeekBrains_proJS/Homework-6/Homework%206';

const goods = new Vue({
   el:'#app', // Показываем, что хотим синхронизироваться с <div id="app">
   data: { // data - это глобальные свойства
      catalogURL: '/catalogData.json', // Файл JSON с товарами каталога
      basketURL: '/basket.json', // Файл JSON с товарами корзины
      items: [], // Массив для товаров каталога (заполняется в mounted)
      filtered: [], // Массив для товаров с учётом фильтрации (заполняется в mounted)
      basketItems: [], // Массив для товаров, добавленные в корзину
      userSearch: '', // Строка фильтра (будет заполняться в зависимости от того, какой товар хотим найти)
      show: false // Флаг для показа корзины (по умолчанию корзина не показывается)
   },
   methods: {
      /**
       * getJSON - функция для чтения файла JSON из внешнего репозитория (аргумент url - это API)
       * */
      getJSON(url) {
         return fetch(url)
                 .then(source => source.json())
                 .catch(error => console.log(error))
      },
      /**
       * Метод filter - служит в качестве правила, по которому будет проводиться фильтрация.
       * Изначально массив filtered идентичен массиву items
       * Строка userSearch проходит условие на наличие у неё длины.
       * Если длины нет, то массив filtered остается прежним
       * Иначе, создается правило проверки, наименование вводимое в input и является этим правилом
       * Далее проводим фильтрация массива filtered методом filter
       * */
      filter() {
         if (!this.userSearch.length) {
            this.filtered = this.items;
         } else {
            const regexp = new RegExp(this.userSearch, 'i');
            this.filtered = this.filtered.filter(item => regexp.test(item.name));
         }
      },
      /**
       * Метод addProduct запускается при нажатии на кнопку с классом main__item-btn
       * Сначала узнаем, есть в корзине товар, который хотим добавить
       * Если он есть, то увеличиваем его количество на 1
       * Если же его нет, то с помощью Object.assing создается новый объект путем склеивания свойств объекта item
       * и свойства quantity: 1
       * Далее добовляем этот объект в массив basketItems
       * */
      addProduct(item) {
         let find = this.basketItems.find(basketItem => basketItem.id === item.id);
         if(find){
            find.quantity++;
         } else {
            const prod = Object.assign({quantity: 1}, item);
            this.basketItems.push(prod)
         }
      },
      /**
       * Метод removeItem служит для удаления товаров из корзины
       * Если товара в корзины больше чем 1 шт. то просто уменьшаем его количество на 1
       * Если же меньше 1 шт. то его просто удоляем с помощью метода splice
       * */
      removeItem(basketItem) {
         if(basketItem.quantity > 1){
            basketItem.quantity--;
         } else {
            this.basketItems.splice(this.basketItems.indexOf(basketItem), 1);
         }
      }
   },
   /**
    * Метод mounted запускается в первую очередь при обращении к объекту items
    * В нем происходит считывание JSON, с помощью метода getJSON, файлов на удаленном репозитории
    * */
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