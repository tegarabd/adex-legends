const navigationHTML = 
`
<link rel="stylesheet" href="css/navigation.css">
<nav class="nav" id="nav">
    <div class="nav__item">
        <a href="index.html" class="nav__logo">
            <h1 class="nav__logo__big">ADEX</h1>
            <p class="nav__logo__small">LEGENDS</p>
        </a>
    </div>
    <nav class="subnav" id="subNav">
        <div class="nav__item nav__group">
            <a href="about.html" class="nav__link">ABOUT</a>
            <a href="maps.html" class="nav__link">MAPS</a>
            <a href="legends.html" class="nav__link">LEGENDS</a>
        </div>
        <div class="nav__item">
            <a href="registration.html" class="nav__link"><i class='bx bx-log-in'></i> REGISTER</a>
        </div>
    </nav>
    <i class='bx bx-menu' id='menuBtn' ></i>
</nav>
`

const navigation = document.createElement('div')
navigation.innerHTML = navigationHTML

const menuBtn = navigation.querySelector('#menuBtn')
const subNav = navigation.querySelector('#subNav')
menuBtn.addEventListener('click', () => {
    if (subNav.classList.contains('show')) {
        menuBtn.classList.add('bx-menu')
        menuBtn.classList.remove('bx-x')
        subNav.classList.remove('show')
    }
    else {
        menuBtn.classList.remove('bx-menu')
        menuBtn.classList.add('bx-x')
        subNav.classList.add('show')
    }
})

export default navigation