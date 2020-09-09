const API_URL = 'http://localhost:3000'
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