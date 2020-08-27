import React from 'react';

class VideoShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        this.props.showVideo(this.props.match.params.videoId)
    }

    render() {

        if (!this.props.video) {
            return null
        }

        return (
           <div className="main-video-container">
               <div className="video-solo">
                    <h1 className="main-title">{this.props.video.title}</h1>
                    <div className="video-main">
                            <video
                            // onClick={}
                                width="600"
                                height="400">
                                <source src={`${this.props.video.videoUrl}#t=3`} type="video/mp4" ></source>
                            </video>
                    </div>
                    <div className="main-video-control-bar">
                        <button className="main-video-like-button"><i className="fas fa-plus-circle"></i></button>
                    </div>
                </div>
           </div>
        )
    }
}

export default VideoShow;

