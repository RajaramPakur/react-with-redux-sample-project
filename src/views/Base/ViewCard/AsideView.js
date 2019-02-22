import React from 'react';
import PostShare from './PostShare';

const AsideView = props => {

    console.log(props);
    return (
        <aside class="col-12 col-lg-3 offset-lg-1">
            <div class="entry-meta">
                <div class="posted-date">
                    <label>Date</label>
                    <span class="date-format"><a href="#">{props.postedAt}</a></span>
                </div>
                <div class="post-category">
                    <label>Category</label>
                    <span><a href="#">Photography</a></span>
                </div>
                <div class="posted-tags">
                    <label>tags</label>
                    <span><a href="#">Photography</a>, <a href="#">nature</a>, <a href="#">hat</a> </span>
                </div>

                <PostShare />
            </div>
        </aside>
    )
}

AsideView.propTypes = {

}

export default AsideView
