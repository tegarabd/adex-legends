const path = 'assets/img/legends/'
const template = document.getElementById('legendCardTemplate')
const container = document.getElementById('legendsContent')
const legends = [
    {
        name: 'Crypto',
        desc: 'Surveillance Expert',
    },
    {
        name: 'Fuse',
        desc: 'Bombastic Explosives Expert',
    },
    {
        name: 'Gibraltar',
        desc: 'Shielded Fortress',
    },
    {
        name: 'Horizon',
        desc: 'Gravitational Manipulator',
    },
    {
        name: 'Lifeline',
        desc: 'Combat Medic',
    },
    {
        name: 'Loba',
        desc: 'Translocating Thief',
    },
    {
        name: 'Maggie',
        desc: 'Rebel Warlord',
    },
    {
        name: 'Mirage',
        desc: 'Holographic Trickster',
    },
    {
        name: 'Newcastle',
        desc: 'Heroic Defender',
    },
    {
        name: 'Octane',
        desc: 'High-Speed Daredevil',
    },
    {
        name: 'Pathfinder',
        desc: 'Forward Scout',
    },
    {
        name: 'Rampart',
        desc: 'Amped Modder',
    },
    {
        name: 'Wraith',
        desc: 'Interdimensional Skirmisher',
    },
]


legends.map(legend => {
    const card = document.createElement('div')
    card.classList.add('legend__card')
    card.innerHTML = template.cloneNode(true).innerHTML

    card.querySelector('.legend__name').textContent = legend.name
    card.querySelector('.legend__desc').textContent = legend.desc
    card.querySelector('.legend__img').setAttribute('src', path + legend.name.toLocaleLowerCase() + '.png')
    
    container.appendChild(card)
})