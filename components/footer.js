const footerHTML = 
`
<link rel="stylesheet" href="css/footer.css">
<footer class="footer" id="footer">

    <div class="footer__group">
        <div class="footer__social__media">
            <div class="footer__social__media__title">JOIN CONVERSATION</div>
            <div class="footer__social__media__content">
                <a class="footer__link" href=""><i class='bx bxl-twitter'></i></a>
                <a class="footer__link" href=""><i class='bx bxl-instagram' ></i></a>
                <a class="footer__link" href=""><i class='bx bxl-twitch' ></i></a>
                <a class="footer__link" href=""><i class='bx bxl-facebook' ></i></a>
                <a class="footer__link" href=""><i class='bx bxl-youtube' ></i></a>
            </div>
        </div>
        <div class="footer__group__item">
            <a class="footer__link" href="about.html" class="footer__link">ABOUT</a>
            <a class="footer__link" href="maps.html" class="footer__link">MAPS</a>
            <a class="footer__link" href="legends.html" class="footer__link">LEGENDS</a>
            <a class="footer__link" href="registration.html" class="footer__link">REGISTRATION</a>
        </div>
    </div>

    <hr>

    <div class="footer__group">
        <img class="teen__esrb" src="assets/svg/apex-esrb-rating-t-interactive-june-2021.svg" alt="apex-esrb-rating-t-interactive-june-2021">
        <div class="footer__group__item">
            <div><img src="assets/img/apex-legends-logo.png" alt="apex-legends-logo"></div>
            <div><img src="assets/svg/apex-global-series-footer-logo.svg" alt="apex-global-series-footer-logo"></div>
            <div><img src="assets/svg/apex-mobile-footer-logo.svg" alt="apex-mobile-footer-logo"></div>
            <div><img src="assets/img/apex-respawn-white-logo.png" alt="apex-respawn-white-logo"></div>
        </div>
    </div>

</footer>
`
const footer = document.createElement('div')
footer.innerHTML = footerHTML
export default footer