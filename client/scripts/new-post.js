const API_URL = 'http://localhost:3000'

//New post
const postForm = document.querySelector('#post-box')
postForm.addEventListener('submit', (event) => {
    const postData = new FormData(postForm)

    const postText = postData.get('post-text')

    const postTime = new Date().getHours() + ':' + new Date().getMinutes() + ' ' + 'h'
    const postDay = new Date().getDay().toLocaleString()
    const postMounth = new Date().getMonth().toLocaleString()
    const postYear = new Date().getFullYear().toLocaleString()

    const postDate = postDay + '/' + postMounth + '/' + postYear + ` at ${postTime}`
    const postUser = localStorage.getItem('newUser') || 'admin'

    const newPost = {
        postText,
        postDate,
        postUser
    }
    if (postText == '') {
        console.error('Please type something')
    } else {
        fetch(API_URL, {
            method: "POST",
            body: JSON.stringify(newPost),
            headers: {
                "content-type": "application/json"
            }
        })
    }
    postForm.reset()
    event.preventDefault()
})
//Emojis
const emojiBtn = document.querySelector('#emoji-button')
const emojiBox = document.querySelector('.emoji-box')
const emojis = document.querySelectorAll('.emoji-box button')
emojiBtn.addEventListener('click', () => {
    emojiBox.classList.toggle('show-img')
})
const emojiList = []
for(var i = 0; i< emojis.length; i++){
    emojiList.push(emojis[i].textContent)
}
console.log(emojiList)

//Images
const imgBtn = document.querySelector('#image-button')
const imgBox = document.querySelector('.image-box')
console.log(imgBox)
imgBtn.addEventListener('click', ()=>{
    imgBox.classList.toggle('show-img')
})