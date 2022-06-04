const submit = document.getElementById('submit')
const errorTexts = document.getElementById('errorTexts')
const errorPopup = document.getElementById('errorPopup')
const closeBtn = document.getElementById('closeBtn')

submit.addEventListener('click', e => {
    e.preventDefault()

    const username = document.getElementById('username').value
    const fullname = document.getElementById('fullname').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const address = document.getElementById('address').value
    const male = document.getElementById('male').checked
    const female = document.getElementById('female').checked
    
    let errors = []
    let errorElements = []

    if (username === '' ||
        fullname === '' ||
        email === '' ||
        password === '' ||
        address === '') {
        
            errors.push("ALL FIELD MUST BE FILLED")
            
        }

    if (username.length < 5) errors.push("USERNAME MUST BE BETWEEN 5 AND 10 CHARACTERS")
    if (!isValidEmail(email)) errors.push("EMAIL MUST BE VALID")
    if (password.length < 8 || password.length > 20) errors.push("PASSWORD MUST BE BETWEEN 8 AND 20 CHARACTERS")
    if (!address.endsWith(' Street')) errors.push("ADDRESS MUST BE ENDS WITH \" STREET\"")
    if (!male && !female) errors.push("GENDER MUST BE CHOOSED")

    if (errors.length > 0) {
        errors.map(error => {
            const hr = document.createElement('hr')
            const errorElement = document.createElement('p')
            errorElement.textContent = error
            errorElements.push(hr)
            errorElements.push(errorElement)
        })
        errorTexts.replaceChildren(...errorElements)
        errorPopup.classList.add('show')
        return
    }

    location.href = 'index.html'
})

closeBtn.addEventListener('click', () => {
    errorPopup.classList.remove('show')
})


function isValidEmail(email) {

    let at = 0
    let dotAfterAt = 0

    if (email.startsWith('.') || email.startsWith('@') || email.endsWith('.') || email.endsWith('@')) return false

    for (let i = 0; i < email.length; i++) {

        let ch = email.charAt(i)

        if ((s => s.raw)`${email}`[0].charAt(i) === '\\') return false
        if (!((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z') || (ch >= '0' && ch <= '9') || ch === '@' || ch === '.')) return false
        if (ch === '@') {
            if (email.charAt(i+1) === '.') return false
            at++
        }
        if (ch === '.') {
            if (email.charAt(i+1) === '.' || email.charAt(i+1) === '@') return false
            if (at > 0) dotAfterAt++
        }
    }

    if (at < 1 || at > 1) return false 
    if (dotAfterAt < 1 || dotAfterAt > 2) return false

    return true
}
