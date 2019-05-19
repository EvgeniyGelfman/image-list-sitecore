import React from 'react';

import throttle from 'lodash/fp/throttle';

import executeGetRequest from '../apis/api-unsplash';

import ImageList from './image-list/ImageList';
import Loading from './loading/Loading';
import {THROTTLER_TIME, IMAGES_PER_REQUEST, SEARCH_TERM, IMAGES_PER_BIG_REQUEST} from '../constants';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [],
            pageNumber: 1,
            error: null,
            isLoading: true,
            shouldShowButton: false
        };

        this.checkWindowScroll = this.checkWindowScroll.bind(this);
        this.getImages = this.getImages.bind(this);
        this.imageList = null;
    }

    componentWillMount() {
        this.getImages(IMAGES_PER_REQUEST);
    }

    componentDidMount() {
        const handleScroll = throttle(THROTTLER_TIME, this.checkWindowScroll);
        const handleResize = throttle(THROTTLER_TIME, this.checkWindowScroll);
        this.imageList = document.querySelector('.image-list');

        this.imageList.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
    }

    checkWindowScroll() {
        const {error, isLoading} = this.state;

        if (error || isLoading) return;

        if (this.imageList.scrollTop + window.innerHeight >= this.imageList.scrollHeight) {
            this.getImages(IMAGES_PER_REQUEST);
        }
    }

    getImages(per_page) {
        const {pageNumber} = this.state;

        this.setState({isLoading: true});   

        executeGetRequest(SEARCH_TERM, pageNumber, per_page)
            .then(response => {
                const {results} = response.data;
                const imageCollection = results.map(item => { 
                    return ({
                        id: item.id,
                        src: item.urls.regular,
                        alt: item.alt_description
                    });
                });

                this.setState(state => ({
                    images: [...state.images, ...imageCollection],
                    isLoading: false,
                    pageNumber: state.pageNumber + 1
                }));

                // the reason behind 60 and not 200 is that api returns only 30 items as a max for a free account
                if(this.state.images.length > 60) {
                    this.setState({shouldShowButton: true});
                    window.removeEventListener('scroll');
                    window.removeEventListener('resize');
                }
            })
            .catch(error => {
                this.setState({isLoading: false, error});
            })
    }

    render() {
        const {images, isLoading, shouldShowButton} = this.state;

        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                {
                    isLoading &&
                    <Loading />
                }

                <ImageList images={images} />

                {
                    shouldShowButton &&
                    <button
                        className="ui primary button"
                        onClick={() => this.getImages(IMAGES_PER_BIG_REQUEST)}
                    >
                        Show more
                    </button>
                }
            </div>
        );
    }
}

export default App;
