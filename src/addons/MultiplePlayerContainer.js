import React from 'react/addons';
import assign from 'object-assign';

import SoundPlayerComponent from './SoundPlayerComponent';

let { Component } = React;
let { cloneWithProps } = React.addons;

class PlayStore {
    constructor() {
        this._audios = [];
    }

    add(soundCloudAudio) {
        let isPresent = false;
        const audios = this._audios;
        const len = audios.length;

        for (let i = 0; i < len; i++) {
            let _soundCloudAudio = audios[i];
            if (_soundCloudAudio.playing === soundCloudAudio.playing) {
                isPresent = true;
                break;
            }
        }
        if (!isPresent) {
            this._audios.push(soundCloudAudio);
        }
    }

    stopAll(playing) {
        this._audios.forEach((soundCloudAudio) => {
            if (soundCloudAudio.playing && soundCloudAudio.playing !== playing) {
                soundCloudAudio.stop();
            }
        });
    }
}

class MultiplePlayerContainer extends Component {
    constructor() {
        super();

        // handling multiple audio instances on the page
        this.playStore = new PlayStore();

        this.wrapChild = this.wrapChild.bind(this);
        this.handleStartPlay = this.handleStartPlay.bind(this);
    }

    handleStartPlay(soundCloudAudio, playing) {
        this.playStore.stopAll(playing);
        this.playStore.add(soundCloudAudio);
    }

    wrapChild(child) {
        console.log(child instanceof SoundPlayerComponent);
        const newProps = assign({}, { onStartTrack: this.handleStartPlay }, this.state);
        return cloneWithProps(child, newProps);
    }

    render() {
        const { children } = this.props;
        return (
            <span>
                {React.Children.map(children, this.wrapChild)}
            </span>
        );
    }
}

export default MultiplePlayerContainer;
