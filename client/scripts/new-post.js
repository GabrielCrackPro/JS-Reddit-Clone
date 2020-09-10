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
    const postContainer = document.querySelector('.post-container')
    postContainer.innerHTML += `
    <h4>${newPost.postText}</h4>
    <p>Posted by ${newPost.postUser} <small>at ${newPost.postDate}</small></p>

    <button id="upvote-button"><i class="fas fa-chevron-up"></i></button>
    <button id="downvote-button"><i class="fas fa-chevron-down"></i></button>
    <button id="award-button"><i class="fas fa-crown"></i></button>
    <button id="comment-button"><i class="fas fa-comment-dots"></i></button>
    <div class="post-divisor"></div>
    `
    const upvoteBtn = document.querySelector('#upvote-button')
    const downvoteBtn = document.querySelector('#downvote-button')
    const awardBtn = document.querySelector('#award-button')
    const commentBtn = document.querySelector('#comment-button')

    upvoteBtn.addEventListener('click', ()=>{
        const upvoteIcon = document.querySelector('#upvote-button i')
        upvoteIcon.style.color = '#000'
    })
    downvoteBtn.addEventListener('click', ()=>{
        const downvoteIcon = document.querySelector('#downvote-button i')
        downvoteIcon.style.color = '#000'
    })
    awardBtn.addEventListener('click', ()=>{
        const awardIcon = document.querySelector('#award-button i')
        awardIcon.style.color = '#000'
    })
    commentBtn.addEventListener('click', ()=>{
        const commentBox = document.createElement('div')
        commentBox.classList.add('comment-box')
        postContainer.appendChild(commentBox)
        commentBox.innerHTML = `
        <form id="comment-form">
        <textarea type="text" id="comment-input" placeholder="Give your opinion" name="comment-text"></textarea>
        <br>
        <button>Comment</button>
        </form>
        `
        const commentForm = document.querySelector('#comment-form')
        commentForm.addEventListener('submit', (event)=>{
            const commentData = new FormData(commentForm)
            const commentText = commentData.get('comment-text')

            const commentTime = new Date().getHours() + ':' + new Date().getMinutes()
            const commentDay = new Date().getDay().toLocaleString()
            const commentMounth = new Date().getMonth().toLocaleString()
            const commentYear = new Date().getFullYear().toLocaleString()
            const commentUser = newPost.postUser || 'admin'

            const commentDate = commentDay + '/' + commentMounth + '/' + commentYear + ` at ${commentTime} + h`

            const newComment = {
                commentText,
                commentDate,
                commentUser
            }
            if(commentText == ''){
                console.error('Please type something')
            }else{
                fetch(API_URL, {
                    method: "POST",
                    body: JSON.stringify(newComment),
                    headers: {
                        "content-type": "application/json"
                    }
                })
            }
            commentForm.reset()
            event.preventDefault()
        })

    })

    postForm.reset()
    event.preventDefault()
})
//Emojis
const emojiBtn = document.querySelector('#emoji-button')
const emojiBox = document.querySelector('.emoji-box')
const emojis = document.querySelectorAll('.emoji-box button')
emojiBtn.addEventListener('click', () => {
    emojiBox.classList.toggle('show')
})
const emojiList = []
for(var i = 0; i< emojis.length; i++){
    emojiList.push(emojis[i].textContent)
}

//Images
const imgBtn = document.querySelector('#image-button')
const imgBox = document.querySelector('.image-box')

imgBtn.addEventListener('click', ()=>{
    imgBox.classList.toggle('show-img')
    console.log(imgBox)
})