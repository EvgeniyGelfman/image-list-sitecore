import React from 'react';
import PropTypes from 'prop-types';

import './ImageDetail.scss';  

export const ImageDetail = (props) => {
    const {imageSrc, alt} = props;

    return(
        <div>
            <figure>
                <img src={imageSrc} alt={alt} />
                <figcaption>{alt}</figcaption>  
            </figure>
        </div>
    );
};

ImageDetail.propTypes = {
    imageSrc: PropTypes.string,
    alt: PropTypes.string
};

ImageDetail.defaultProps = {
    imageSrc: '',
    alt: ''
};

export default ImageDetail;
