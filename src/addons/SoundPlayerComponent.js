import React from 'react/addons';
import SoundCloudAudio from 'soundcloud-audio';
import assign from 'object-assign';

let { PropTypes, Component } = React;
let { cloneWithProps } = React.addons;

class SoundPlayerComponent extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            duration: 0,
            currentTime: 0,
            seeking: false,
            playing: false
        };
        this.wrapChild = this.wrapChild.bind(this);
    }

    componentDidMount() {
        let { clientId, resolveUrl, streamUrl } = this.props;

        if (!clientId) {
            throw new Error(
                `You need to get clientId from SoundCloud
                https://github.com/soundblogs/react-soundplayer#usage`
            );
        }

        this.soundCloudAudio = new SoundCloudAudio(clientId);

        if (streamUrl) {
            this.soundCloudAudio.preload(streamUrl);
        } else if (resolveUrl) {
            this.soundCloudAudio.resolve(resolveUrl, (data) => {
                this.setState({
                    [data.tracks ? 'playlist' : 'track']: data
                });
            });
        }

        // https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Media_events
        this.soundCloudAudio.on('playing', this.onAudioStarted.bind(this));
        this.soundCloudAudio.on('timeupdate', this.getCurrentTime.bind(this));
        this.soundCloudAudio.on('loadedmetadata', this.getDuration.bind(this));
        this.soundCloudAudio.on('seeking', this.onSeekingTrack.bind(this));
        this.soundCloudAudio.on('seeked', this.onSeekedTrack.bind(this));
        this.soundCloudAudio.on('pause', this.onAudioEnded.bind(this));
        this.soundCloudAudio.on('ended', this.onAudioEnded.bind(this));
    }

    playPause() {
        let { playing } = this.state;
        if (!playing) {
            this.soundCloudAudio.play();
        } else {
            this.soundCloudAudio.pause();
        }
    }

    next() {

    }

    prev() {

    }

    componentWillUnmount() {
        this.soundCloudAudio.unbindAll();
    }

    onSeekingTrack() {
        this.setState({seeking: true});
    }

    onSeekedTrack() {
        this.setState({seeking: false});
    }

    onAudioStarted() {
        let { onStartTrack } = this.props;
        this.setState({playing: true});
        onStartTrack && onStartTrack(this.soundCloudAudio, this.soundCloudAudio.playing);
    }

    onAudioEnded() {
        let { onStopTrack } = this.props;
        this.setState({playing: false});
        onStopTrack && onStopTrack(this.soundCloudAudio);
    }

    getCurrentTime() {
        this.setState({currentTime: this.soundCloudAudio.audio.currentTime});
    }

    getDuration() {
        this.setState({duration: this.soundCloudAudio.audio.duration});
    }

    wrapChild(child) {
        const newProps = assign({}, {
            soundCloudAudio: this.soundCloudAudio,
            onTogglePlay: this.playPause.bind(this)
        }, this.state);
        return cloneWithProps(child, newProps);
    }

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
}

SoundPlayerComponent.propTypes = {
    streamUrl: PropTypes.string,
    resolveUrl: PropTypes.string,
    clientId: PropTypes.string.isRequired,
    onStartTrack: PropTypes.func,
    onStopTrack: PropTypes.func
};

export default SoundPlayerComponent;
