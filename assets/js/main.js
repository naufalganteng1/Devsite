<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <!--=============== FAVICON ===============-->
        <link rel="shortcut icon" href="assets/img/icons8-diablo-3-64.png" type="image/x-icon">

        <!--=============== REMIX ICONS ===============-->
        <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet">

        <!--=============== CSS ===============-->
        <link rel="stylesheet" href="assets/css/styles.css">

        <title>Devsite</title>
    </head>
    <body>
        <!--=============== HEADER ===============-->
        <header class="header" id="header">
            <nav class="nav container">
                <a href="#" class="nav__logo">
                    <img src="assets/img/icons8-diablo-3-64.png" alt="">
                </a>

                <div class="nav__menu" id="nav-menu">
                    <ul class="nav__list">
                        <li class="nav__item">
                            <a href="#home" class="nav__link active-link">Home</a>
                        </li>
                        <li class="nav__item">
                            <a href="#specs" class="nav__link">Include</a>
                        </li>
                        <li class="nav__item">
                            <a href="#products" class="nav__link">Templates</a>
                        </li>
                    </ul>

                    <div class="nav__close" id="nav-close">
                        <i class="ri-close-line"></i>
                    </div>
                </div>

                <div class="nav__toggle" id="nav-toggle">
                    <i class="ri-function-line"></i>
                </div>
            </nav>
        </header>

        <main class="main">
            <!--=============== HOME ===============-->
            <section class="home section" id="home">
                <div class="home__container container grid">
                    <div>
                        <img src="assets/img/Alchemy Project (1).gif" alt="" class="home__img">
                    </div>
                    
                    <div class="home__data">
                        <div class="home__header">
                            <h1 class="home__title">Devsite</h1>
                            <h2 class="home__subtitle">About Me</h2>
                        </div>

                        <div class="home__footer">
                            <p class="home__description">Selamat datang di Deviste! Kami adalah tim inovator digital yang bersemangat, berdedikasi untuk mengubah kehadiran online Anda menjadi pengalaman yang luar biasa dan berdaya tarik tinggi. Dengan kombinasi kreativitas dan teknologi terkini, kami menciptakan halaman arahan yang tidak hanya memukau mata, tetapi juga efektif dalam meningkatkan konversi.
                            </p>
                            <a href="#" class="button button--flex">
                                <span class="button--flex">
                                    <i class="ri-shopping-bag-line button__icon"></i></i> order now
                                </span>
                                <span class="home__price">20K</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            
           

            <!--=============== SPECS ===============-->
            <section class="specs section grid" id="specs">
                <h2 class="section__title section__title-gradient">Include</h2>

                <div class="specs__container container grid">
                    <div class="specs__content grid">
                        <div class="specs__data">
                            <i class="ri-shopping-bag-line"></i>
                            <h3 class="specs__title">Price</h3>
                            <span class="specs__subtitle">harga yang terjangkau</span>
                        </div>
    
                        <div class="specs__data">
                            <i class="ri-function-line"></i>
                            <h3 class="specs__title">various website designs</h3>
                            <span class="specs__subtitle">berbagai jenis website 
                                <br>yang menarik</span>
                        </div>
    
                        <div class="specs__data">
                            <i class="ri-send-plane-line"></i>
                            <h3 class="specs__title">quick work</h3>
                            <span class="specs__subtitle">kinerja yang cepat dan memuaskan</span>
                        </div>
                    </div>
                    
                    <div>
                        <img src="assets/img/- Find & Share on GIPHY.gif" alt="" class="specs__img">
                    </div>
                </div>
            </section>

           

            <!--=============== DISCOUNT ===============-->
            <section class="discount section">
                <div class="discount__container container grid">
                    <div class="discount__animate">
                        <h2 class="discount__title">kreativitas tanpa batas</h2>
                        <a href="#" class="button button--flex">
                            <i class="ri-shopping-bag-line button__icon"></i> order now
                        </a>
                    </div>

                    <img src="assets/img/Card-based Image Slider For Travel Websites With Transition And Hover Effects.gif" alt="" class="discount__img">
                </div>
            </section>


  <!-- portfolio section -->
  <section id = "portofolio" class = "vh-100 py-7">
    <br><br>
      <div class = "container">
          <div class = "portfolio-content">
              <div class = "title">
                <br><br>
                  <h2 id="judul">Products</h2>
                  <a href = "#contact" class = "btn-down">
                      <i class = "fas fa-chevron-down"></i>
                  </a>
              </div>
              <button class="accordion">Landing Page</button>
              <div class="panel">
                <br>
                  <div class = "insta-grid grid">
                    <div><br><img src = "assets/img/adv.png">
                        <button class="button button--flex products__button">
                            <i class="ri-shopping-bag-line button__icon"></i>
                        </button></div>
                    <div><br><img src = "assets/img/jio.png"><br><br></div>
                    <div><br><img src = "assets/img/jkl.png"><br></div>
                    <div><br><img src = "assets/img/hui.png"></div>
                    <div><br><img src = "assets/img/hui.png"></div>
                    <div><br><img src = "assets/img/hui.png"></div>
                    <div><br><img src = "assets/img/hui.png"></div>
                    <div><br><img src = "assets/img/hui.png"></div>
                    
                  </div>
                  <br>
              </div>
              <hr style="width: 100%; color: black; border: bolder;">
              <br>

              <button class="accordion">portfolio</button>
              <div class="panel">
                <br>
                  <div class = "insta-grid grid">
                    <div><br><img src = "assets/img/adv.png">
                        <button class="button button--flex products__button">
                            <i class="ri-shopping-bag-line button__icon"></i>
                        </button></div>
                    <div><br><img src = "assets/img/jio.png"><br><br></div>
                    <div><br><img src = "assets/img/jkl.png"><br></div>
                    <div><br><img src = "assets/img/hui.png"></div>
                    <div><br><img src = "assets/img/hui.png"></div>
                    <div><br><img src = "assets/img/hui.png"></div>
                    <div><br><img src = "assets/img/hui.png"></div>
                    <div><br><img src = "assets/img/hui.png"></div>
                    
                  </div>
                  <br>
              </div>
              <hr style="width: 100%; color: black; border: bolder;">
              <br>

              <button class="accordion">Other</button>
              <div class="panel">
                  <div class = "insta-grid grid">
                    <div><br><img src = "assets/img/jio.png"><br><br></div>
                    <div><br><img src = "assets/img/jkl.png"><br></div>
                    <div><br><img src = "assets/img/hui.png"></div>
                    <div><br><img src = "assets/img/hui.png"></div>
                    <div><br><img src = "assets/img/hui.png"></div>
                    <div><br><img src = "assets/img/hui.png"></div>
                    <div><br><img src = "assets/img/hui.png"></div>
                  </div>
                  <br>
              </div>
              <hr style="width: 100%; color: black; border: bolder;">
              <br><br>

  </section>
  <!-- end of portfolio section -->

  <!--=============== FOOTER ===============-->
  <footer class="footer section">
    <div class="footer__container container grid">
        <a href="#" class="footer__logo">
            <img src="assets/img/icons8-diablo-3-64.png" alt="">
        </a>

        <div class="footer__content">
            <h3 class="footer__title">Products</h3>

            <ul class="footer__links">
                <li>
                    <a href="#" class="footer__link">Website Landing Page</a>
                </li>
                <li>
                    <a href="#" class="footer__link">Website Portofolio</a>
                </li>
                <li>
                    <a href="#" class="footer__link">Various websites</a>
                </li>
            </ul>
        </div>

        <div class="footer__content">
            <h3 class="footer__title">Support</h3>

            <ul class="footer__links">
                <li>
                    <a href="#" class="footer__link">Product help</a>
                </li>
                <li>
                    <a href="#" class="footer__link">Register</a>
                </li>
                <li>
                    <a href="#" class="footer__link">Updates</a>
                </li>
                <li>
                    <a href="#" class="footer__link">Provides</a>
                </li>
            </ul>
        </div>

        <div class="footer__content">
            <form action="" class="footer__form">
                <input type="email" placeholder="Email" class="footer__input">
                <button class="button button--flex">
                    <i class="ri-send-plane-line button__icon"></i> Contact
                </button>
            </form>

            <div class="footer__social">
                <a href="https://www.facebook.com/" target="_blank" class="footer__social-link">
                    <i class="ri-facebook-fill"></i>
                </a>
                <a href="https://www.instagram.com/" target="_blank" class="footer__social-link">
                    <i class="ri-instagram-line"></i>
                </a>
                <a href="https://twitter.com/" target="_blank" class="footer__social-link">
                    <i class="ri-twitter-line"></i>
                </a>
            </div>
        </div>
    </div>

    <p class="footer__copy">
        <a href="https://www.youtube.com/c/Bedimcode/" target="_blank" class="footer__copy-link">&#169; Devsite. All right reserved</a>
    </p>
</footer>

<!--=============== SCROLL UP ===============-->
<a href="#" class="scrollup" id="scroll-up">
    <i class="ri-arrow-up-s-line scrollup__icon"></i>
</a>

<script>
    var acc = document.getElementsByClassName("accordion");
    var i;
    
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
    
        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }</script>

<!--=============== SCROLL REVEAL ===============-->
<script src="https://unpkg.com/scrollreveal"></script>

<!--=============== MAIN JS ===============-->
<script src="assets/js/main.js"></script>



</body>
</html>
