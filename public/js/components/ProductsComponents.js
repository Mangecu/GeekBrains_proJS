/**
 * Компонент items - это каталог товаров
 * С помощью атрибута ":items", который прописан в теге <items></items>, передаём в props массив filtered из app.js.
 * Так же в теге создано событие @add-product, которая запускает метод addProduct из app.js
 * Внутри компонента items "вкладывается" компонент item
 * Используя цикл v-for, не только выводятся все элементы массива filtered,
 * но так же используя переменную item, передаём её в качестве атрибута в компонент item
 * */
Vue.component('items', {
   props: ['items'],
   template: `
      <div class="main__items">
         <item v-for="item of items"
         :key="item.id"
         :item="item"></item>      
      </div>
   `
});
/**
 * Компонент item - это каждый элемент массива filtered
 * В этом компоненте принимаем объект item в props
 * В теге <button></button> компонента item происходит активация события 'add-product',
 * которую прописали в теге <items></items>
 * Обращение происходит по клику на кнопку, далее с помощью $parent.$emit('add-product', item),
 * происходит вызов функции addProduct и в неё передаётся элемент item
 * */
Vue.component('item', {
   props: ['item'],
   template: `
      <div class="main__item">
         <img :src="item.img" alt="item.name">
         <div class="main__item-name">{{item.name}}</div>
         <div class="main__item-price">{{item.price.toFixed(2)}} р.</div>
         <button class="main__item-btn" @click="$parent.$emit('add-product', item)">Купить</button>
      </div>
   `
})