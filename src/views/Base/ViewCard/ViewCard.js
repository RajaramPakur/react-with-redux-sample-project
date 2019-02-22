import React, { Component } from 'react';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import RenderImg from '../Gallery/RenderImg';
import Comments from './Comments';
import PostComments from './PostComments';
import AsideView from './AsideView';

class ViewCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cards: props.location.state,
            asideDetail : {}
        };
    }

    getAsideDetail(){
        const {card} = this.state.cards;
        this.setState = {
            asideDetail : {
                postedAt : card.postedAt,
                category : card.cardType,
                tags : card.cardTags,
            }
        }
    }

    componentDidMount(){
        this.getAsideDetail();
    }

    render() {
        const { card } = this.state.cards;
        const{asideDetail} = this.state.asideDetail;
        console.log(asideDetail);
        let menu = ['Home', 'Comment', 'Title'];
    
        return (
            <div class="outer-container">
                <div class="single-post">
                    <div class="container">
                        <Breadcrumbs menuLists={menu} />
                        <div class="row">
                            <div class="col-12">
                                <div class="featured-img">
                                    <RenderImg imgDir={card.cardDir} imgDes={card.cardDes} />
                                </div>
                            </div>

                            <div class="col-12 col-lg-8">
                                <div class="content-area">
                                    <header class="entry-header">
                                        <h1>Open Portfolio Items With Custom Links in Portfolio Grid in New Tab</h1>
                                        <span class="byline">by <span class="author"><a href="#">Phil Martinez</a></span></span>
                                    </header>

                                    <div class="entry-content">
                                        <p>Get the latest fashion tips and outfit ideas from your favorite celebrities and designers. Click through runway and front row photos from fashion week shows in New York, London, Paris, and Milan. Plus: browse key accessories like bags, shoes, and sunglasses, must-have denim </p>

                                        <p>Liusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qui s nostrud exercitation ullamLorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>

                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                    </div>
                                </div>
                            </div>

                            <AsideView asideDetail={this.state.asideDetail}/>
                            <div class="col-12 col-lg-7">
                                <div class="content-area">
                                    <Comments />
                                    <PostComments />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewCard;
