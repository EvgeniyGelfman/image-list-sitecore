import React from 'react';
import PropTypes from 'prop-types';

import ImageDetail from '../image-detail/ImageDetail';

import './ImageList.scss';  

export const ImageList = (props) => {
    const {images} = props;

    const listImages = images.map(image =>
        (
            <ImageDetail
                key={image.id}
                alt={image.alt}
                imageSrc={image.src}   
            />
        )
    );

    return (
        <div className="ui segment image-list">
            {listImages}
        </div>
    );
};

ImageList.propTypes = {
    images: PropTypes.array.isRequired
};

export default ImageList;
