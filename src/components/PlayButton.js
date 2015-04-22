import React from 'react';
import ClassNames from 'classnames';
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
        let { onTogglePlay } = this.props;
        onTogglePlay && onTogglePlay(e);
    }

    render() {
        let { playing, seekingIcon, seeking, className } = this.props;

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
            <button className={classNames} onClick={this.handleClick.bind(this)}>
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
    seekingIcon: PropTypes.node
};

PlayButton.defaultProps = {
    playing: false,
    seeking: false
};

export default PlayButton;
