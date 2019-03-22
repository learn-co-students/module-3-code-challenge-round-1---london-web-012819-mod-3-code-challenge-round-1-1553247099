
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  let imageId = 2245 //Enter the id from the fetched image here

  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

  const likeURL = `https://randopic.herokuapp.com/likes/`

  const commentsURL = `https://randopic.herokuapp.com/comments/`

  const imgCardEl = document.querySelector('#image_card')
  const img = document.querySelector('#image')
  const name = document.querySelector('#name')
  let likes = document.querySelector('#likes')
  const likeButton = document.querySelector('#like_button')
  const commentForm = document.querySelector('#comment_form')
  let commentsList = document.querySelector('#comments')


//get image from database
function getImage() {
  return fetch(imageURL)
  .then(resp => resp.json())
}

//display image on page
//adding delete button to attempts bonus, currently no functionality, can be removed
function showImage(image) {
img.src = image.url
name.innerText = image.name
likes.innerText = image.like_count
image.comments.forEach(comment => commentsList.innerHTML += `<li> ${comment.content} <button id="delete_button">Delete</button></li>`)

likeImageListener(image)
commentFormListener(image)
}

//like functionality frontend and optimitsic rendering
function likeImageListener(image) {
likeButton.addEventListener('click', () => {
  likes.innerText = `${++image.like_count}`
  updateLike(image)
})
}

//update backend likes
function updateLike(image) {
  fetch('https://randopic.herokuapp.com/likes', {
    method: 'POST',
    headers: { 'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
    body:    JSON.stringify({
        image_id: image.id
      })
  })
}

//comment functionality frontend and optiistic rendering
//adding delete button to attempts bonus, currently no functionality, can be removed
function commentFormListener(image) {
  commentForm.addEventListener('submit', event => {
      event.preventDefault()
      let content = (commentForm.comment.value)
      commentsList.innerHTML += `<li> ${content} <button id="delete_button">Delete</button> </li> `
      createComment(image, content)
      commentForm.comment.value = ''
  })
}

//update backend comments
function createComment(image, content) {
  fetch('https://randopic.herokuapp.com/comments', {
    method: 'POST',
    headers: {'Accept': 'application/json',
              'Content-Type': 'application/json'
             },
    body: JSON.stringify({
            image_id: image.id,
            content: content
          })
  })

}

//delete comment backend attempt
function deleteComment(image) {
  fetch(`https://randopic.herokuapp.com/comments/${image.comments[-1].id}`, {
    method: 'DELETE'
  })
  }



function initialize() {
  getImage()
  .then(showImage)

}


initialize()
