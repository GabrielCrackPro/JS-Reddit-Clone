const API_URL = 'http://localhost:3000'
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