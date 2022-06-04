const width = document.body.clientWidth

const arenaLeft = document.getElementById('arenaLeft')
const arenaRight = document.getElementById('arenaRight')
const arenaSlider = document.getElementById('arenaSlider')
let arenaCount = 0

arenaRight.addEventListener('click', () => {
    arenaCount++
    if (arenaCount > 6) arenaCount = 0
    arenaSlider.querySelectorAll('.map__img').forEach(img => {
        img.style.left = `-${arenaCount * width}px`
    })
})

arenaLeft.addEventListener('click', () => {
    arenaCount--
    if (arenaCount < 0) arenaCount = 6
    arenaSlider.querySelectorAll('.map__img').forEach(img => {
        img.style.left = `-${arenaCount * width}px`
    })
})

const battleRoyaleLeft = document.getElementById('battleRoyaleLeft')
const battleRoyaleRight = document.getElementById('battleRoyaleRight')
const battleRoyaleSlider = document.getElementById('battleRoyaleSlider')
let battleRoyaleCount = 0

battleRoyaleRight.addEventListener('click', () => {
    battleRoyaleCount++
    if (battleRoyaleCount > 3) battleRoyaleCount = 0
    battleRoyaleSlider.querySelectorAll('.map__img').forEach(img => {
        img.style.left = `-${battleRoyaleCount * width}px`
    })
})

battleRoyaleLeft.addEventListener('click', () => {
    battleRoyaleCount--
    if (battleRoyaleCount < 0) battleRoyaleCount = 3
    battleRoyaleSlider.querySelectorAll('.map__img').forEach(img => {
        img.style.left = `-${battleRoyaleCount * width}px`
    })
})