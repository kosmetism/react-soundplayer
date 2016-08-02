import React from 'react';
import { SoundPlayerContainer } from '../../addons';
import { PlayButton, Timer } from '../../components';

const { PropTypes, Component } = React;

class Player extends Component {
    render() {
        let { track, currentTime } = this.props;
        return (
            <div className="p1 mb3 mt3 flex items-center bg-darken-1 red rounded">
                <PlayButton className="flex-none h4 mr2 btn btn-transparent btn-grow rounded" {...this.props} />
                <h2 className="h5 nowrap caps flex-auto m0">{track ? track.title : 'Loading...'}</h2>
                <Timer className="h6 mr1" duration={track ? track.duration / 1000 : 0} currentTime={currentTime} />
            </div>
        );
    }
}

class BasicSoundPlayer extends Component {
    render() {
        return (
            <SoundPlayerContainer {...this.props}>
                <Player />
            </SoundPlayerContainer>
        );
    }
}

BasicSoundPlayer.propTypes = {
    resolveUrl: PropTypes.string.isRequired,
    clientId: PropTypes.string.isRequired
};

export default BasicSoundPlayer;
