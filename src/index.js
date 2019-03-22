const state = { image: null}


const cardContainerDiv = document.querySelector('#image_card')
const form = document.querySelector('#comment_form')

  console.log("howdy")
  console.log(API.imageUrl)

  //get data, display data
  function showData(data) {
    cardContainerDiv.innerHTML =
    `
      <img src="${data.url}" id="image" data-id="${data.id}"/>
      <h4 id="name">${data.name}</h4>
      <span>Likes:
        <span id="likes">${data.like_count}</span>
      </span>
      <button id="like_button">Like</button>
      <form id="comment_form">
        <input id="comment_input" type="text" name="comment" placeholder="Add Comment"/>
        <input type="submit" value="Submit"/>
      </form>
      <ul id="comments">
           <!-- <li> for each comment goes here -->
      </ul>
    </div>
    `
    commentsUl = document.querySelector('#comments')

    data.comments.forEach(comment => commentsUl.innerHTML += `<li>${comment.content}</li>`)
    increaseLikesEventListener(data)
  }


  // add event listener to like button
  function increaseLikesEventListener(data) {
    likebtn = document.querySelector('#like_button')
    likes = document.querySelector('#likes')

      likebtn.addEventListener('click', () => {
        ++data.like_count
        likes.innerText = `${data.like_count}`
        API.postData(data)
      })
    }

    //add comments to display from form
    function addCommentsFromForm() {
      commentsUl = document.querySelector('#comments')

      form.addEventListener('submit', event => {
        event.preventDefault()

        let comment = {}

        comment.content = form.name
        comment.image_id = state.image.id
        comment.created_at = new Date()
        comment.updated_at = new Date()

        const commentsUl = document.querySelector('#comments')

        commentsUl.innerHTML += `<li>${comment.content}</li>`
      })
    }







// })


function initialize() {
  API.getData()
    .then(image => {
      state.image = image
      showData(state.image)
    })
}

initialize()
addCommentsFromForm()

// document.addEventListener('DOMContentLoaded', () => {
//   console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  // let imageId = 2243 //Enter the id from the fetched image here

  // const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  //
  // const likeURL = `https://randopic.herokuapp.com/likes/`
  //
  // const commentsURL = `https://randopic.herokuapp.com/comments/`
