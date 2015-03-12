export default function (soundcloud) {
    return {

        componentDidMount: function () {
            soundcloud.preload(this.props.streamUrl);

            soundcloud.on('timeupdate', this.getCurrentTime);
            soundcloud.on('loadedmetadata', this.getDuration);
            soundcloud.on('seeking', this.onSeekingTrack);
            soundcloud.on('seeked', this.onSeekedTrack);
            soundcloud.on('ended', this.onAudioEnded);
        },

        componentWillUnmount: function () {
            soundcloud.pause();
            soundcloud.unbindAll();
        },

        onSeekingTrack: function () {
            this.setState({seeking: true});
        },

        onSeekedTrack: function () {
            this.setState({seeking: false});
        },

        onAudioEnded: function () {
            this.setState({playing: false});
        },

        getCurrentTime: function () {
            this.setState({currentTime: soundcloud.audio.currentTime});
        },

        getDuration: function () {
            this.setState({duration: soundcloud.audio.duration});
        },

    }
};
