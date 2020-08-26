import { connect } from 'react-redux';
import { showVideo } from '../../actions/video_actions';
import VideosItem from './videos_item.jsx';


const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        video: state.entities.videos[ownProps.match.params.videoId]
    }
};

const mapDispatchToProps = dispatch => {
    return {
    showVideo: (videoId) => dispatch(showVideo(videoId))
}
};

export default connect(mapStateToProps, mapDispatchToProps)(VideosItem);