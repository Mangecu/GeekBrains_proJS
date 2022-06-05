Vue.component('subscribe', {
   template:`
      <section class="main__subscribe-wrap">
         <div class="main__subscribe container">
            <div class="main__subscribe-leftBlock">
               <div class="main__subscribe-units">
                  <img src="https://raw.githubusercontent.com/Mangecu/GeekBrains_proHTML/gh_project/src/assets/imgs/reviewPerson.png" alt="unit_img">
                  <div class="main__subscribe-info">
                     <p class="main__subscribe-discr">
                        “Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”
                     </p>
                     <div class="main__subscribe-name">
                        <h2>Bin Burhan</h2>
                        <h3>Dhaka, Bd</h3>
                     </div>
                  </div>
               </div>
               <ul class="main__subscribe-slider">
                  <li class="main__slider-indicator"></li>
                  <li class="main__slider-indicator"></li>
                  <li class="main__slider-indicator"></li>
               </ul>
            </div>
            <div class="main__subscribe-line"></div>
            <div class="main__subscribe-rightBlock">
               <div class="main__subscribe-promo">
                  <h2>Subscribe</h2>
                  <h3>FOR OUR NEWLETTER AND PROMOTION</h3>
                  <form class="main__subscribe-form">
                     <input type="email" placeholder="Enter Your Email">
                     <button>Subscribe</button>
                  </form>
               </div>
            </div>
         </div>
      </section>   
   `
})