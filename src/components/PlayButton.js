import React from 'react';

let { PropTypes } = React;

class ButtonIconSVG extends React.Component {
    render() {
        return (
            <svg
                className="sb-soundplayer-play-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                fill="currentColor"
            >
                {this.props.children}
            </svg>
        );
    }
}

class PlayIcon extends React.Component {
    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <ButtonIconSVG>
                <path d="M0 0 L32 16 L0 32 z"></path>
            </ButtonIconSVG>
        );
    }
}

class PauseIcon extends React.Component {
    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <ButtonIconSVG>
                <path d="M0 0 H12 V32 H0 z M20 0 H32 V32 H20 z"></path>
            </ButtonIconSVG>
        );
    }
}

class PlayButton extends React.Component {
    shouldComponentUpdate(nextProps) {
        let { playing, seeking } = this.props;
        return (
            playing !== nextProps.playing || seeking !== nextProps.seeking
        );
    }

    render() {
        let { playing, seekingIcon, seeking, togglePlay } = this.props;

        let iconNode;
        if (seeking && seekingIcon) {
            iconNode = React.cloneElement(seekingIcon);
        } else if (playing) {
            iconNode = <PauseIcon />;
        } else {
            iconNode = <PlayIcon />;
        }

        return (
            <button className="sb-soundplayer-play-btn" onClick={togglePlay}>
                {iconNode}
            </button>
        );
    }
}

PlayButton.propTypes = {
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
