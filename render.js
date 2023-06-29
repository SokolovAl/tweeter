const Renderer = (function () {
    const renderPosts = (posts) => {
        const postsContainer = $("#posts");
        postsContainer.empty();

        posts.forEach(post => {
            const postElement = createPostElement(post);
            postsContainer.append(postElement);
        });
    };

    const createPostElement = (post) => {
        const postElement = $("<div>").addClass("post").attr("data-id", post.id);

        const postTextElement = $("<h1>").addClass("post-text").text(post.text);
        postElement.append(postTextElement);

        const commentsElement = $("<div>").addClass("comments");
        post.comments.forEach(comment => {
            const commentElement = createCommentElement(comment);
            commentsElement.append(commentElement);
        });

        postElement.append(commentsElement);

        return postElement;
    };

    const createCommentElement = (comment) => {
        const commentElement = $("<ul>").addClass("comment").attr("data-id", comment.id);

        const commentTextElement = $("<li>").text(comment.text);
        commentElement.append(commentTextElement);

        return commentElement;
    };

    return {
        renderPosts
    };
});
