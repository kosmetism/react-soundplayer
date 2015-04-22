import React from 'react';
import { SoundPlayerComponent } from '../addons';
import { PlayButton, Timer } from '../components';

const { PropTypes, Component } = React;

class BasicSoundPlayer extends Component {
    render() {
        return (
            <SoundPlayerComponent {...this.props}>
                <PlayButton />
                <Timer />
            </SoundPlayerComponent>
        );
    }
}

export default BasicSoundPlayer;
