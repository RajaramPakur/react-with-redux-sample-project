import { TOP_NEWS, SEARCH_NEWS, NEWS_SOURCES, SEARCH_BY_SOURCES } from '../constants/actionTypes';

const initialState = {
    news: {},
    sources: {}
}

export default function (state = initialState, action) {
    switch (action.type) {

        case TOP_NEWS:
            return {
                ...state,
                news: action.payload,
            };
        case NEWS_SOURCES:
            return {
                ...state,
                sources: action.payload,
            };
        case SEARCH_NEWS:
            return {
                ...state,
                news: action.payload,
            };
        default:
            return state;
    }

}