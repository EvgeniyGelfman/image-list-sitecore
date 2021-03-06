import React from 'react';

export const Loading = () => {
    return (
        <div className="ui" style={{'boxSizing': 'content-box'}}>
            <div className="ui active centered inline dimmer inverted">
                <div className="ui text loader">Loading</div>
                <p></p>
            </div>
        </div>
    );
};

export default Loading;
