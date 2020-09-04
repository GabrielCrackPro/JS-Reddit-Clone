const API_URL = 'http://localhost:3000'
//Register
const regForm = document.querySelector('#register-form')
regForm.addEventListener('submit', (event)=>{
    const regData = new FormData(regForm)

    const regUsername = regData.get('register-username')
    const regEmail = regData.get('register-email')
    const regPassword = regData.get('register-password')

    const newUser = {
        regUsername,
        regEmail,
        regPassword
    }
    if(regUsername == '' || regEmail == '' || regPassword == ''){
        console.error('All fields are required')
    }else{
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