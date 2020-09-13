const API_URL = 'http://localhost:3000'
const profileContainer = document.querySelector('.profile-container')
//Set random data

const username = document.querySelector('#username')
const postCount = document.querySelector('#post-count')
const commentsCount = document.querySelector('#comments-count')
const awardsCount = document.querySelector('#awards-count')

function randomNumber(min, max) {
    return Math.floor(Math.random() * max) + min
}
function setNumbers() {
    postCount.textContent = randomNumber(7, 150)
    commentsCount.textContent = randomNumber(25, 200)
    awardsCount.textContent = randomNumber(10, 100)
}
const possibleUsernames =
    ['emanvAnt',
        'ariBlEnz',
        'IeNInste',
        'ToNFOrpi',
        'AnoRIbLE',
        'AnoRIbLE',
        'erBENduL',
        'YNETemOR']
function getUsername() {
    const number = randomNumber(0, 8)
    switch (number) {
        case 0:
            username.textContent = possibleUsernames[0]
            break
        case 1:
            username.textContent = possibleUsernames[1]
            break
        case 2:
            username.textContent = possibleUsernames[2]
            break
        case 3:
            username.textContent = possibleUsernames[3]
            break
        case 4:
            username.textContent = possibleUsernames[4]
            break
        case 5:
            username.textContent = possibleUsernames[5]
            break
        case 6:
            username.textContent = possibleUsernames[6]
            break
        case 7:
            username.textContent = possibleUsernames[7]
            break
        case 8:
            username.textContent = possibleUsernames[8]
            break
    }
}
window.onload = setNumbers()
window.onload = getUsername()
//Social buttons
const messageBtn = document.querySelector('#message-button')
const followBtn = document.querySelector('#follow-button')
const reportBtn = document.querySelector('#report-button')
const editBtn = document.querySelector('#edit-profile-button')

messageBtn.addEventListener('click', () => {
    const messageBox = document.createElement('div')
    messageBox.classList.add('message-box')
    messageBox.innerHTML = `
    <form id="message-form">
    <textarea id="message-text" name="message-text" placeholder="Message"></textarea>
    <br>
    <button id="message-button">Send</button>
    </form>
    `
    profileContainer.appendChild(messageBox)
})
const messageForm = document.querySelector('#message-form')
messageForm.addEventListener('submit', (event) => {
    const messageData = new FormData(messageForm)
    const messageText = messageData.get('message-text')

    const messageDay = new Date().getDay().toLocaleString()
    const messageMounth = new Date().getMonth().toLocaleString()
    const messageYear = new Date().getFullYear().toLocaleString()

    const messageDate = messageDay + '/' + messageMounth + '/' + messageYear
    const messageUser = 'admin'

    const newMessage = {
        messageText,
        messageDate,
        messageUser
    }
    if (messageText == '') {
        console.error('Please type something')
    } else {
        fetch(API_URL, {
            method: "POST",
            body: newMessage,
            headers: {
                "content-type": "application/json"
            }
        })
    }
    messageForm.reset()
    event.preventDefault()
})