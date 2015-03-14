import React from 'react';
import SoundCloudMixin from './SoundCloudMixin';

export default function (clientId) {
    let SoundCloudComponent = React.createClass({
        getInitialState() {
            this.soundCloudAudio = this.props.soundCloudAudio;

            return {
                duration: 0,
                currentTime: 0,
                playing: false,
                seeking: false
            };
        },

        componentDidMount() {
            this.soundCloudAudio.on('timeupdate', this.getCurrentTime);
            this.soundCloudAudio.on('loadedmetadata', this.getDuration);
            this.soundCloudAudio.on('seeking', this.onSeekingTrack);
            this.soundCloudAudio.on('seeked', this.onSeekedTrack);
            this.soundCloudAudio.on('ended', this.onAudioEnded);
        },

        componentWillUnmount() {
            this.soundCloudAudio.unbindAll();
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
            this.setState({currentTime: this.soundCloudAudio.audio.currentTime});
        },

        getDuration() {
            this.setState({duration: this.soundCloudAudio.audio.duration});
        },

        render() {
            let { children } = this.props;
        }
    });

    return { SoundCloudComponent };
}



// <SoundCloudPlayer audio={scAudio} streamUrl={streamUrl} player="simple" />
let SoundCloudPlayer = React.createClass({
    mixins: [SoundCloudMixin(scAudio)],

    componentDidMount() {
        this.scAudio.preload(streamUrl);
    },

    render() {
        <div>
            <SimplePlayer
                playing={playing}
                seeking={seeking}
                currentTime={currentTime}
                duration={duration}
                onTogglePlay={this.togglePlay}
                onSeekTrack={this.seekTrack}
            />
        </div>
    }

});

export default SoundCloudPlayer;
