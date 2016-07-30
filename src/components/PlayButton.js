import React, { PropTypes, Component } from 'react';
import ClassNames from 'classnames';
import SoundCloudAudio from 'soundcloud-audio';
import { PlayIconSVG, PauseIconSVG } from './Icons';

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
            soundCloudAudio && soundCloudAudio.play({ playlistIndex: soundCloudAudio._playlistIndex });
        } else {
            soundCloudAudio && soundCloudAudio.pause();
        }

        onTogglePlay && onTogglePlay(e);
    }

    render() {
        let { playing, seekingIcon, seeking, className, style } = this.props;

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
            <button type="button" className={classNames} style={style} onClick={this.handleClick.bind(this)}>
                {iconNode}
            </button>
        );
    }
}

PlayButton.propTypes = {
    className: PropTypes.string,
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
