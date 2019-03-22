

document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  let imageId = 2246 //Enter the id from the fetched image here

  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

  const likeURL = `https://randopic.herokuapp.com/likes/`

  const commentsURL = `https://randopic.herokuapp.com/comments/`

})

const imageCardDiv = document.querySelector("#image_card")
// form is recognized in the console but not from js file
let form = imageCardDiv.querySelector("#comment_form")

// GET REQUEST
function getImage(){
  return fetch(`https://randopic.herokuapp.com/images/2246`)
  .then(resp => resp.json())
}


// Post Like (422 (Unprocessable Entity))
function postLike(image){
  return fetch('https://randopic.herokuapp.com/likes', {
  method: "POST",
  image_id: 2246,
  headers: { 'Accept': 'application/json',
  'Content-Type': 'application/json'},
  body: JSON.stringify(image),
  }).then(resp => resp.json())
}

//Add Image
function createImage(image){
  imageCardDiv.innerHTML = `
  <img src="${image.url}" id="image" data-id=""/>
          <h4 id="name">${image.name}</h4>
          <span>Likes:
            <span id="likes">${image.like_count}</span>
          </span>
          <button id="like_button">Like</button>
          <form id="comment_form">
            <input id="comment_input" type="text" name="comment" placeholder="Add Comment"/>
            <input type="submit" value="Submit"/>
          </form>
          <ul id="comments">
               <!-- <li> for each comment goes here -->
          </ul>
  `
  likeBtn = imageCardDiv.querySelector("#like_button")
  likeBtn.addEventListener("click", (event) => {
    event.preventDefault()
    ++image.like_count
    imageCardDiv.querySelector("#likes").innerText = image.like_count
    postLike(image)
  })
}

// Like Button
function likeButton(){
  likeBtn = imageCardDiv.querySelector("#like_button")
}


function initialize(){
  getImage()
  .then(createImage)
}

initialize()


