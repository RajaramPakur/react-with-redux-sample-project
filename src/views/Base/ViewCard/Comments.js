import React from 'react'
import PropTypes from 'prop-types'

const Comments = props => {
    return (
        <div class="post-comments">
            <h3 class="comments-title"><span class="comments-number">02 Comments</span></h3>
            <ol class="comment-list">
                <li class="comment">
                    <article class="comment-body">
                        <figure class="comment-author-avatar">
                            <img src={require(`../../../assets/images/sofia-joelsson.jpg`)} alt="Sofia" />
                        </figure>
                        <div class="comment-wrap">
                            <div class="comment-author">
                                <span class="fn">
                                    <a href="#">Sofia Joelsson,</a>
                                </span>
                                <span class="comment-meta">
                                    <a href="#">Dec 018 2018</a>
                                </span>
                            </div>
                            <p>Neque porro qui squam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.</p>
                            <div class="reply">
                                <a href="#">like</a>
                                <a href="#">reply</a>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                    </article>
                    <ol class="children">
                        <li class="comment">
                            <article class="comment-body">
                                <figure class="comment-author-avatar">
                                    <img src={require(`../../../assets/images/dave-dubois.jpg`)} alt="Dave" />
                                </figure>
                                <div class="comment-wrap">
                                    <div class="comment-author">
                                        <span class="fn">
                                            <a href="#">Dave Dubois,</a>
                                        </span>
                                        <span class="comment-meta">
                                            <a href="#">Aug 11, 2018</a>
                                        </span>
                                    </div>
                                    <p>Neque porro qui squam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>

                                    <div class="reply">
                                        <a href="#">like</a>
                                        <a href="#">reply</a>
                                    </div>
                                </div>
                                <div class="clearfix"></div>
                            </article>
                        </li>
                    </ol>
                </li>
            </ol>
        </div>
    )
}

Comments.propTypes = {

}

export default Comments
