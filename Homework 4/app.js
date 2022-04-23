/*--------Первая часть ДЗ с кавычками-------*/
let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');

let text = document.querySelector('.text');



btn1.addEventListener('click', () => {
   if (btn1.textContent === "Замена кавычек №1" && btn2.textContent === "Замена кавычек №2" ) {
      btn1.textContent = "Вернуть как было";
      text.textContent = text.textContent.replace(/'/g, '"');

   } else if (btn1.textContent === "Вернуть как было" && btn2.textContent === "Замена кавычек №2"){
      btn1.textContent = "Замена кавычек №1"
      text.textContent = text.textContent.replace(/"/g, "'");
   } else {
      alert("Верни текст в исходную");
   }
});

btn2.addEventListener('click', () => {
   if (btn2.textContent === "Замена кавычек №2" && btn1.textContent === "Замена кавычек №1" ) {
      btn2.textContent = "Вернуть как было";
      text.textContent = text.textContent.replace(/\B'|'\B/g, '"');

   } else if (btn2.textContent === "Вернуть как было" && btn1.textContent === "Замена кавычек №1"){
      btn2.textContent = "Замена кавычек №2"
      text.textContent = text.textContent.replace(/\B"|"\B/g, "'");
   } else {
      alert("Верни текст в исходную");
   }
});
/*-----------------------------------------------------*/
/*-------Вторая часть ДЗ--------------*/
let form = document.querySelector('.form'); // находим форму по имени класса
/**
 * К форме приписываем обработчик событий submit
 * В нём создаётся объект класса ValidForm
 * По итогу работы методов класса ValidForm если все input заполнены согласно правилам, то происходит submit
 * */
form.addEventListener('submit', el => {
   let valid = new Valid();
   if(!valid.valid) {
      el.preventDefault();
   }
})

/**
 * this.rules - это правила для проверки валидности
 * this.valid по умолчанию присваиваем значение false, то есть изначально все поля заполнены неправильно
 * */
class Valid {
   constructor() {
      this.rules = {
         name: /^[a-zа-яё]+$/i,
         phone: /^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/,
         email: /^[\w.-]+@\w+\.[a-z]{2,4}$/i
      }
      this._validForm();
      this.valid = false;
   }
   /**
    * Метод для очистки полей от красного цвета перед новой проверкой
    * */
   _clearError(errors) {
      errors.forEach(error => {
         error.classList.remove('invalid');
      })
   }
   /**
    * Метод для поиска всех тегов input
    * Для каждого тега input будет запускаться метод _validate
    * */
   _validForm() {
      let inp = [...form.querySelectorAll("input")];
      this._clearError(inp);
      inp.forEach(input => {
         this._validate(input);
      });
      if([...form.querySelectorAll('.invalid')].length === 0) {
         this.valid = true;
      }
   }
   /**
    * В этом методе происходит проверка на соответствие правилам заполнения
    * Если правила не соблюдаются то input красится в красный цвет
    * */
   _validate(input) {
      if(this.rules[input.name]) {
         if(!this.rules[input.name].test(input.value)) {
            input.classList.add('invalid');
         } else {
            input.classList.add('valid')
         }
      }
   }



}



