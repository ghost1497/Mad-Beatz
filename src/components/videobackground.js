import React, {Component} from 'react';

class VideoBackground extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videoURL: 'https://www.youtube.com/embed/cQVaR-PTpOQ'
        }
    }

    render() {
        return (
            <div className="video-wrapper">
                <iframe width="120%" height="140%"
                        src="https://www.youtube.com/embed/MnfZeToSTL4?controls=0&loop=1&list=PLvNxGp1V1dOwpDBl7L3AJIlkKYdNDKUEs&autoplay=1"
                        frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
            </div>
        )
    }
};

export default VideoBackground;
