document.addEventListener('DOMContentLoaded', function () {
    const tweeter = Tweeter()
    const renderer = Renderer()

    renderer.renderPosts(tweeter.getPosts())

});