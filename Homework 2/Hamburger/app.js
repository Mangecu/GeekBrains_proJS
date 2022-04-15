let mainTotal = document.querySelector('.main__total');

document.querySelector('.main__btn').addEventListener('click', (el) => {
   if(!el.target.classList.contains('main__btn')) {
      return
   }
   if (mainTotal.classList.contains('hidden')) {
      mainTotal.classList.remove('hidden');
   }
   new ShowTotal(new Burger ('size', 'filling', 'additives'));
})

class Param {
   constructor(element) {
      this.price = +element.dataset['price'];
      this.calories = +element.dataset['cal'];
   }
}

class Burger {
   constructor(sizeName, fillingName, additivesNames) {
      this.size = new Param(this._selectSize(sizeName));
      this.filling = new Param(this._selectFilling(fillingName));
      this.additives = this._takeAdditives(additivesNames);
   }

   _selectSize(size) {
      return document.querySelector(`input[name=${size}]:checked`);
   }
   _selectFilling(filling) {
      return document.querySelector(`input[name=${filling}]:checked`);
   }
   _selectAdditives(additives) {
      return [...document.querySelectorAll(`input[name=${additives}]:checked`)];
   }

   _takeAdditives(additives) {
      let allAdditives = [];
      this._selectAdditives(additives).forEach(el => {
         let obj = new Param(el);
         allAdditives.push(obj);
      })
      return allAdditives;
   }
}

class ShowTotal {
   constructor(burger) {
      this.burger = burger;
      this.showTotal();
   }

   showTotal() {
      document.querySelector('.main__total-price span').textContent = this._countPrice();
      document.querySelector('.main__total-calories span').textContent = this._countCal();
   }

   _countPrice() {
      let result = this.burger.size.price + this.burger.filling.price
      this.burger.additives.forEach(el => {
         result += el.price;
      })
      return result
   }

   _countCal() {
      let result = this.burger.size.calories + this.burger.filling.calories;
      this.burger.additives.forEach(el => {
         result += el.calories;
      })
      return result
   }
}

