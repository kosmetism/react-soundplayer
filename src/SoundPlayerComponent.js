import React from 'react/addons';
import SoundCloudAudio from 'soundcloud-audio';
import assign from 'object-assign';

let { PropTypes } = React;
let { cloneWithProps } = React.addons;

class SoundPlayerComponent extends React.Component {
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

        this.soundCloudAudio.on('playing', this.onAudioStarted.bind(this));
        this.soundCloudAudio.on('timeupdate', this.getCurrentTime.bind(this));
        this.soundCloudAudio.on('loadedmetadata', this.getDuration.bind(this));
        this.soundCloudAudio.on('seeking', this.onSeekingTrack.bind(this));
        this.soundCloudAudio.on('seeked', this.onSeekedTrack.bind(this));
        this.soundCloudAudio.on('ended', this.onAudioEnded.bind(this));
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
        this.setState({playing: true});
    }

    onAudioEnded() {
        this.setState({playing: false});
    }

    getCurrentTime() {
        this.setState({currentTime: this.soundCloudAudio.audio.currentTime});
    }

    getDuration() {
        this.setState({duration: this.soundCloudAudio.audio.duration});
    }

    wrapChild(child) {
        const newProps = assign({}, { soundCloudAudio: this.soundCloudAudio }, this.state);
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
    clientId: PropTypes.string
};

export default SoundPlayerComponent;
