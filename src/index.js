function init() {
    API.getImage()
        .then(image => ImageCard.addImage(image))
}

init()