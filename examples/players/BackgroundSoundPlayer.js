import React, { PropTypes, Component } from 'react';
import { SoundPlayerContainer } from '../../addons';
import { PlayButton, Progress } from '../../components';

const nasaBg = './assets/player-bg.jpg';

class Player extends Component {
    render() {
        let { track, duration, currentTime } = this.props;
        return (
            <div className="py2 white bg-cover bg-top rounded relative" style={{backgroundImage: `url(${nasaBg})`}}>
                <div className="bg-black absolute top-0 right-0 left-0 bottom-0 muted" />
                <div className="center py4 relative z1">
                    <h3 className="h4 nowrap caps mb0">{track ? track.user.username : ''}</h3>
                    <h2 className="h0 nowrap caps m0">{track ? track.title : ''}</h2>
                </div>
                <div className="flex flex-center px2 relative z1">
                    <PlayButton
                        className="flex-none h2 mr2 button button-transparent button-grow rounded"
                        {...this.props}
                    />
                    <Progress
                        className="flex-auto bg-darken-3 rounded"
                        innerClassName="rounded-left bg-white"
                        value={currentTime / duration * 100 || 0}
                        {...this.props}
                    />
                </div>
            </div>
        );
    }
}

class BackgroundSoundPlayer extends Component {
    render() {
        return (
            <SoundPlayerContainer {...this.props}>
                <Player />
            </SoundPlayerContainer>
        );
    }
}

BackgroundSoundPlayer.propTypes = {
    resolveUrl: PropTypes.string.isRequired,
    clientId: PropTypes.string.isRequired
};

export default BackgroundSoundPlayer;
