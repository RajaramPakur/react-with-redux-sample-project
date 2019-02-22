import React from 'react'

const PostComments = () => {
    return (
        <div class="comments-form">
            <div class="comment-respond">
                <h3 class="comment-reply-title">Leave a comment</h3>
                <form class="comment-form">
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="url" placeholder="Website" />
                    <textarea rows="4" placeholder="Messages"></textarea>
                    <input type="submit" value="send message" />
                </form>
            </div>
        </div>
    )
}

export default PostComments;
