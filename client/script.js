const API_URL = 'http://localhost:3000'
//Register
const regForm = document.querySelector('#register-form')
regForm.addEventListener('submit', (event) => {
    const regData = new FormData(regForm)

    const regUsername = regData.get('register-username')
    const regEmail = regData.get('register-email')
    const regPassword = regData.get('register-password')

    const newUser = {
        regUsername,
        regEmail,
        regPassword
    }
    if (regUsername == '' || regEmail == '' || regPassword == '') {
        console.error('All fields are required')
    } else {
        const savedUser = localStorage.setItem('newUser', JSON.stringify(newUser))
        fetch(API_URL, {
            method: "POST",
            body: JSON.stringify(newUser),
            headers: {
                "content-type": "application/json"
            }
        })
    }
    regForm.reset()
    event.preventDefault()
})
//Login
const logForm = document.querySelector('#login-form')
logForm.addEventListener('submit', (event) => {
    const logFormData = new FormData(logForm)

    const logEmail = logFormData.get('login-email')
    const logPassword = logFormData.get('login-password')

    const existingUser = {
        logEmail,
        logPassword
    }
    if (logEmail == '' || logPassword == '') {
        console.error('All fields required')
    } else if (existingUser.logEmail == savedUser.regEmail && existingUser.logPassword == savedUser.regPassword) {
        fetch(API_URL, {
            method: "POST",
            body: JSON.stringify(existingUser),
            headers: {
                "content-type": "application/json"
            }
        })
    }
    event.preventDefault()
    logForm.reset()
})