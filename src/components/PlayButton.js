import React from 'react';
import ClassNames from 'classnames';
import { PlayIconSVG, PauseIconSVG } from './Icons';

let { PropTypes } = React;

class PlayButton extends React.Component {
    shouldComponentUpdate(nextProps) {
        let { playing, seeking } = this.props;
        return (
            playing !== nextProps.playing || seeking !== nextProps.seeking
        );
    }

    render() {
        let { playing, seekingIcon, seeking, togglePlay, className } = this.props;

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
            <button className={classNames} onClick={togglePlay}>
                {iconNode}
            </button>
        );
    }
}

PlayButton.propTypes = {
    className: PropTypes.string,
    seeking: PropTypes.bool,
    playing: PropTypes.bool,
    togglePlay: PropTypes.func,
    seekingIcon: PropTypes.node
};

PlayButton.defaultProps = {
    playing: false,
    seeking: false
};

export default PlayButton;
