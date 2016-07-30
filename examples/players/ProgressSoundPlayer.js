import React, { PropTypes, Component } from 'react';
import { SoundPlayerContainer } from '../../addons';
import { PlayButton, Progress } from '../../components';

class Player extends Component {
    render() {
        let { track, currentTime, duration } = this.props;

        return (
            <div className="p2 border navy mt1 mb3 flex flex-center rounded">
                <PlayButton className="flex-none h4 mr2 button white button-big button-outline button-grow bg-orange circle" {...this.props} />
                <div className="flex-auto">
                    <h2 className="h4 nowrap m0">{track ? track.user.username : ''}</h2>
                    <h2 className="h4 nowrap caps m0">{track ? track.title : ''}</h2>
                    <Progress
                        className="mt1 mb1 rounded"
                        innerClassName="rounded-left"
                        value={currentTime / duration * 100 || 0}
                        {...this.props}
                    />
                </div>
            </div>
        );
    }
}

class ProgressSoundPlayer extends Component {
    render() {
        return (
            <SoundPlayerContainer {...this.props}>
                <Player />
            </SoundPlayerContainer>
        );
    }
}

ProgressSoundPlayer.propTypes = {
    resolveUrl: PropTypes.string.isRequired,
    clientId: PropTypes.string.isRequired
};

export default ProgressSoundPlayer;
