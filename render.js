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

        const postTextElement = $("<h2>").addClass("post-text").text(post.text);
        postElement.append(postTextElement);

        const deletePost = createDeleteElement("post");
        postTextElement.append(deletePost);

        const commentsElement = $("<div>").addClass("comments");
        post.comments.forEach(comment => {
            const commentElement = createCommentElement(comment);
            commentsElement.append(commentElement);

        });
        postElement.append(commentsElement);

        const addCommentElement = createAddCommentElement();
        postElement.append(addCommentElement);

        return postElement;
    };

    const createCommentElement = (comment) => {
        const commentElement = $("<div>").addClass("comment").attr("data-id", comment.id);

        const commentTextElement = $("<p>").text(comment.text);
        commentElement.append(commentTextElement);

        const deletePost = createDeleteElement("comment");
        commentTextElement.append(deletePost);

        return commentElement;
    };

    const createDeleteElement = (context) => {
        let deleteElement;

        if (context === "post") {
            deleteElement = $("<span>").addClass("delete").text("X");
        } else if (context === "comment") {
            deleteElement = $("<span>").addClass("delete-comment").text("X");
        }
        return deleteElement;
    };

    const createAddCommentElement = () => {
        const addCommentElement = $("<div>").addClass("add-comment");
        const commentInput = $("<input>").attr("type", "text").attr("placeholder", "Comment this post");
        const addCommentButton = $("<div>").text("Add Comment").addClass("add-comment-button");

        addCommentElement.append(commentInput);
        addCommentElement.append(addCommentButton);

        return addCommentElement;
    };

    return {
        renderPosts
    };
});
