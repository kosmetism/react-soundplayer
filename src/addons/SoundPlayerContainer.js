import React, { PropTypes, Component } from 'react';
import SoundCloudAudio from 'soundcloud-audio';
import withSoundCloudAudio from './withSoundCloudAudio';

class SoundPlayerContainer extends Component {
    wrapChild(child) {
        return React.cloneElement(child, this.props);
    }

    render() {
        const { children } = this.props;

        if (!children) {
            return;
        }

        if (!Array.isArray(children)) {
            return this.wrapChild(children);
        }

        return (
            <span>
                {React.Children.map(children, ::this.wrapChild)}
            </span>
        );
    }
}

SoundPlayerContainer.propTypes = {
    streamUrl: PropTypes.string,
    resolveUrl: PropTypes.string,
    clientId: PropTypes.string,
    soundCloudAudio: PropTypes.instanceOf(SoundCloudAudio),
    onStartTrack: PropTypes.func,
    onStopTrack: PropTypes.func,
    onPauseTrack: PropTypes.func
};

export default withSoundCloudAudio(SoundPlayerContainer);
