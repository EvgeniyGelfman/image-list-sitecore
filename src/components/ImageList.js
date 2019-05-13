import React from 'react';
import ImageDetail from './ImageDetail';

import './ImageList.scss';  

const ImageList = (props) => {
    const {images} = props;

    const listImages = images.map(image => 
        <ImageDetail
            imageSrc={image.url}   
            alt={image.alt}
            key={image.id}
        />
    );

    return (
        <div className="image-list">
            {listImages}
        </div>
    )
};

export default ImageList;
