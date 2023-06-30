$(document).ready(function () {
    const tweeter = Tweeter();
    const renderer = Renderer();

    //add post
    $("#post").click(() => {
        const postInput = $("#input");
        const postText = postInput.val();

        if (postText === "" || /^\s*$/.test(postText)) {
            alert("Field should not be empty");
            return;
        }
        tweeter.addPost(postText);
        postInput.val("");

        renderer.renderPosts(tweeter.getPosts());
    });

    //delete post
    $("#posts").on("click", ".delete", (event) => {
        const postId = $(event.target).closest(".post").attr("data-id");

        tweeter.removePost(postId);

        renderer.renderPosts(tweeter.getPosts());
    });

    //add comment
    $("#posts").on("click", ".add-comment-button", (event) => {
        const postId = $(event.target).closest(".post").attr("data-id");
        const commentText = $(event.target).closest(".post").find(".add-comment input").val();
        const commentInput = $(event.target).closest(".post").find(".add-comment input");

        if (commentText === "" || /^\s*$/.test(commentText)) {
            alert("Comment cannot be empty");
            return;
        }
        tweeter.addComment(postId, commentText);
        commentInput.val("");

        renderer.renderPosts(tweeter.getPosts());
    });

    //delete comment
    $("#posts").on("click", ".delete-comment", (event) => {
        const postId = $(event.target).closest(".post").attr("data-id");
        const commentId = $(event.target).closest(".comment").attr("data-id");

        tweeter.removeComment(postId, commentId);

        renderer.renderPosts(tweeter.getPosts());
    });
    renderer.renderPosts(tweeter.getPosts());
});
