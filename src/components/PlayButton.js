import React from 'react';
import ClassNames from 'classnames';
import SoundCloudAudio from 'soundcloud-audio';
import { PlayIconSVG, PauseIconSVG } from './Icons';

let { PropTypes, Component } = React;

class PlayButton extends Component {
    shouldComponentUpdate(nextProps) {
        let { playing, seeking } = this.props;
        return (
            playing !== nextProps.playing || seeking !== nextProps.seeking
        );
    }

    handleClick(e) {
        let { playing, soundCloudAudio, onTogglePlay } = this.props;

        if (!playing) {
            soundCloudAudio && soundCloudAudio.play();
        } else {
            soundCloudAudio && soundCloudAudio.pause();
        }

        onTogglePlay && onTogglePlay(e);
    }

    render() {
        let { playing, seekingIcon, seeking, className, styles } = this.props;

        let iconNode;
        if (seeking && seekingIcon) {
            iconNode = React.cloneElement(seekingIcon);
        } else if (playing) {
            iconNode = <PauseIconSVG />;
        } else {
            iconNode = <PlayIconSVG />;
        }

        let classNames = ClassNames('sb-soundplayer-play-btn', className);

        return (
            <button type="button" className={classNames} style={styles} onClick={this.handleClick.bind(this)}>
                {iconNode}
            </button>
        );
    }
}

PlayButton.propTypes = {
    className: PropTypes.string,
    styles: PropTypes.object,
    seeking: PropTypes.bool,
    playing: PropTypes.bool,
    onTogglePlay: PropTypes.func,
    seekingIcon: PropTypes.node,
    soundCloudAudio: PropTypes.instanceOf(SoundCloudAudio)
};

PlayButton.defaultProps = {
    playing: false,
    seeking: false
};

export default PlayButton;
