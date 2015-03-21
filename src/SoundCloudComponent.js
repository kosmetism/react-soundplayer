import React from 'react/addons';
import assign from 'object-assign';
import SoundCloudAudio from 'soundcloud-audio';

let cloneWithProps = React.addons.cloneWithProps;

/**
 *  SoundCloud Component
 *
 * <SoundCloudComponent soundCloudAudio={soundCloudAudio} />
 *     <SimplePlayer streamUrl="https://api.soundcloud.com/tracks/196308250/stream" />
 * </SoundCloudComponent>
 */

let SoundCloudComponent = React.createClass({
    propTypes: {
        soundCloudAudio: React.PropTypes.instanceOf(
            SoundCloudAudio
        ).isRequired
    },

    getInitialState() {
        this.soundCloudAudio = this.props.soundCloudAudio;

        return {
            duration: 0,
            currentTime: 0,
            playing: false,
            seeking: false,
            resolving: false
        };
    },

    componentDidMount() {
        let { streamUrl, resolveUrl, soundCloudAudio } = this.props;
        if (streamUrl) {
            soundCloudAudio.preload(streamUrl);
        } else if (resolveUrl) {
            this.setState({resolving: true});
            soundCloudAudio.resolve(resolveUrl, (data) => {
                this.setState({
                    resolving: false,
                    [data.tracks ? 'playlist' : 'track']: data
                });
            });
        }

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

    togglePlay() {
        if (this.state.playing) {
            this.soundCloudAudio.pause();
        } else {
            this.soundCloudAudio.play();
        }

        this.setState({playing: this.soundCloudAudio.playing});
    },

    seekTrack(e) {
        var xPos = (e.pageX - e.target.getBoundingClientRect().left) / e.target.offsetWidth;
        this.soundCloudAudio.audio.currentTime = (xPos * this.soundCloudAudio.audio.duration);
    },

    wrapChild(child) {
        return cloneWithProps(child, assign({
            soundCloudAudio: this.soundCloudAudio,
            togglePlay: this.togglePlay,
            seekTrack: this.seekTrack
        }, this.state));
    },

    render() {
        let { children } = this.props;

        if (!children) {
            return null;
        }

        if (!Array.isArray(children)) {
            let child = children;
            return this.wrapChild(child);
        } else {
            return (
                <span>
                    {React.Children.map(children, this.wrapChild)}
                </span>
            );
        }
    }
});

export default SoundCloudComponent;
