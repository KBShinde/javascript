document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault()
    let isValid = true

    const username = document.getElementById('username').value.trim()
    const usernameError = document.getElementById('usernameError')

    if(username ===  '') {
        usernameError.textContent = 'Username is required'
        isValid = false
    }
    else {
        usernameError.textContent = ''
    }

    const email = document.getElementById('email').value.trim()
    const emailError = document.getElementById('emailError')
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(email === '') {
        emailError.textContent = 'Email is required'
        isValid = false
    }
    else if (!emailPattern.test(email)) {
        emailError.textContent  = ' please enter a valid email'
        isValid = false
    }
    else {
        emailError.textContent = ''
    }

    const password = document.getElementById('password').value.trim()
    const passwordError = document.getElementById('passwordError')

    if(password === '') {
        passwordError.textContent = 'Password is required'
        isValid = false
    }
    else if(password.length < 6) {
        passwordError.textContent = 'Password must at least 6 charcters'
        isValid = false
    }
    else {
        passwordError.textContent = ''
    }

    if(isValid) {
        alert('Form submitted')
    }
})