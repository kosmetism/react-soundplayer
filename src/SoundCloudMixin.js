export default function (soundCloudAudio) {
    return {
        getInitialState() {
            return {
                duration: 0,
                currentTime: 0,
                playing: false,
                seeking: false
            };
        },

        componentDidMount() {
            soundCloudAudio.on('timeupdate', this.getCurrentTime);
            soundCloudAudio.on('loadedmetadata', this.getDuration);
            soundCloudAudio.on('seeking', this.onSeekingTrack);
            soundCloudAudio.on('seeked', this.onSeekedTrack);
            soundCloudAudio.on('ended', this.onAudioEnded);
        },

        componentWillUnmount() {
            soundCloudAudio.unbindAll();
        },

        onSeekingTrack() {
            this.setState({seeking: true});
        },

        onSeekedTrack() {
            this.setState({seeking: false});
        },

        onAudioEnded() {
            this.setState({playing: false});
        },

        getCurrentTime() {
            this.setState({currentTime: soundCloudAudio.audio.currentTime});
        },

        getDuration() {
            this.setState({duration: soundCloudAudio.audio.duration});
        }
    };
}
