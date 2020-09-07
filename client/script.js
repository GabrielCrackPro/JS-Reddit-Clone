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
//Trending posts
const trendingPosts = document.querySelector('.trending-1')
//Date
const postDate = document.querySelector('#post-date')

let postDay = new Date().getDay()
let postMounth = new Date().getMonth()
const postYear = new Date().getFullYear()

if(postDay < 10){
    postDay = '0' + postDay
}if(postMounth < 10){
    postMounth = '0' + postMounth
}

postDate.textContent = postDay + '/' + postMounth + '/' + postYear
//Buttons
const upvoteBtn = document.querySelector('#upvote-button')
const downvoteBtn = document.querySelector('#downvote-button')
const awardBtn = document.querySelector('#award-button')
const commentBtn = document.querySelector('#comment-button')

const darkModeBtn = document.querySelector('#dark-mode-button')

const upvoteCount = document.querySelector('#upvote-count')
const downvoteCount = document.querySelector('#downvote-count')

upvoteBtn.addEventListener('click', ()=>{
    upvoteCount.textContent ++
})
downvoteBtn.addEventListener('click', ()=>{
    downvoteCount.textContent ++
})
darkModeBtn.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-mode')
})