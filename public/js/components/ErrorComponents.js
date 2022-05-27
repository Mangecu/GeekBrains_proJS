Vue.component('error', {
   data() {
      return {
         text: ''
      }
   },
   computed: {
      isVisible() {
         return this.text !== ''
      }
   },
   template: `
      <div class="main__error-block" v-if="isVisible">
         <p class="main__error-msg">
            <button class="main__close-btn" @click="text=''">&times;</button>
            {{ text }}
         </p>
      </div>
   `
})