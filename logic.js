const Tweeter = function () {

    let _posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                {id: "c1", text: "First comment on first post!"},
                {id: "c2", text: "Second comment on first post!!"},
                {id: "c3", text: "Third comment on first post!!!"}
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                {id: "c4", text: "Don't worry second poster, you'll be first one day."},
                {id: "c5", text: "Yeah, believe in yourself!"},
                {id: "c6", text: "Haha second place what a joke."}
            ]
        }
    ];

    let postIdCounter = 2;
    let commentIdCounter = 6;

    const getPosts = () => _posts;

    const addPost = (text) => {
        postIdCounter++;
        const newPost = {
            id: "p" + postIdCounter,
            text: text,
            comments: []
        };
        _posts.push(newPost);
    };

    const removePost = (postId) => {
        _posts = _posts.filter((post) => post.id !== postId);
    };

    const addComment = (postId, text) => {
        const post = _posts.find((post) => post.id === postId);
        if (post) {
            commentIdCounter++;
            const newComment = {
                id: "c" + commentIdCounter,
                text: text
            };
            post.comments.push(newComment);
        }
    };

    const removeComment = (postId, commentID) => {
        const post = _posts.find((post) => post.id === postId);
        if (post) {
            post.comments = post.comments.filter((comment) => comment.id !== commentID);
        }
    };

    return {
        getPosts,
        addPost,
        removePost,
        addComment,
        removeComment
    };
};
