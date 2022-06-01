Vue.component('footer-component', {
   template: `
      <footer class="footer">
         <footer-nav></footer-nav>
         <footer-background></footer-background>
      </footer>   
   `
});

Vue.component('footer-nav', {
   template: `
      <section class="footer__nav container">
         <footer-top></footer-top>
         <div class="footer__category">
            <h2>category</h2>
            <ul class="footer__category-list">
               <li class="footer__category-item">
                  <a href="#" class="footer__category-link">Home</a>
               </li>
               <li class="footer__category-item">
                  <a href="#" class="footer__category-link">Shop</a>
               </li>
               <li class="footer__category-item">
                  <a href="#" class="footer__category-link">About</a>
               </li>
               <li class="footer__category-item">
                  <a href="#" class="footer__category-link">How It Works</a>
               </li>
               <li class="footer__category-item">
                  <a href="#" class="footer__category-link">Contact</a>
               </li>
            </ul>
         </div>
         <div class="footer__category">
            <h2>information</h2>
            <ul class="footer__category-list">
               <li class="footer__category-item">
                  <a href="#" class="footer__category-link">Tearms & Condition</a>
               </li>
               <li class="footer__category-item">
                  <a href="#" class="footer__category-link">Privacy Policy</a>
               </li>
               <li class="footer__category-item">
                  <a href="#" class="footer__category-link">How to Buy</a>
               </li>
               <li class="footer__category-item">
                  <a href="#" class="footer__category-link">How to Sell</a>
               </li>
               <li class="footer__category-item">
                  <a href="#" class="footer__category-link">Promotion</a>
               </li>
            </ul>
         </div>
         <div class="footer__category">
            <h2>shop category</h2>
            <ul class="footer__category-list">
               <li class="footer__category-item">
                  <a href="#" class="footer__category-link">Men</a>
               </li>
               <li class="footer__category-item">
                  <a href="#" class="footer__category-link">Women</a>
               </li>
               <li class="footer__category-item">
                  <a href="#" class="footer__category-link">Child</a>
               </li>
               <li class="footer__category-item">
                  <a href="#" class="footer__category-link">Apparel</a>
               </li>
               <li class="footer__category-item">
                  <a href="#" class="footer__category-link">Brows All</a>
               </li>
            </ul>
         </div>
      </section>   
   `
});

Vue.component('footer-top', {
   template:`
      <div class="footer__top">
         <a href="index.html" class="footer__logo">
            <img src="https://raw.githubusercontent.com/Mangecu/GeekBrains_proHTML/gh_project/src/assets/imgs/logo.png" alt="footer-logo">
            bran<span>d</span>
         </a>
         <pre>
Objectively transition extensive data rather than cross functional
solutions. Monotonectally syndicate multidisciplinary materials
before go forward benefits. Intrinsicly syndicate an expanded array
of processes and cross-unit partnerships.
         </pre>
         <pre>
Efficiently plagiarize 24/365 action items and focused infomediaries.
Distinctively seize superior initiatives for wireless technologies.
Dynamically optimize.
         </pre>
      </div>   
   `
});


Vue.component('footer-background', {
   template:`
      <section class="footer__wrap">
         <div class="footer__background container">
            <div class="footer__copy">
               © 2022  Brand  All Rights Reserved.
            </div>
            <div class="footer__social-links">
               <a href="#"><i class="fab fa-facebook-f"></i></a>
               <a href="#"><i class="fab fa-twitter"></i></a>
               <a href="#"><i class="fab fa-linkedin-in"></i></a>
               <a href="#"><i class="fab fa-pinterest-p"></i></a>
               <a href="#"><i class="fab fa-google-plus-g"></i></a>
            </div>
         </div>
      </section>
   `
});