$(document).ready(function () {
    const tweeter = Tweeter();
    const renderer = Renderer();

    $("#post").click(() => {
        const input = $("#input");
        const text = input.val();

        if (text === "" || /^\s*$/.test(text)) {
            alert("Field should not be empty");
            return;
        }

        tweeter.addPost(text);
        input.val("");

        renderer.renderPosts(tweeter.getPosts());
    });

    $("#posts").on("click", ".delete", (event) => {
        const postId = $(event.target).closest(".post").attr("data-id");

        tweeter.removePost(postId);
        renderer.renderPosts(tweeter.getPosts());
    });

    $("#posts").on("click", ".delete-comment", () => {
        const postId = $(event.target).closest(".post").attr("data-id");
        const commentId = $(event.target).closest(".comment").attr("data-id");

        tweeter.removeComment(postId, commentId);
        renderer.renderPosts(tweeter.getPosts());
    });

    renderer.renderPosts(tweeter.getPosts());
});
