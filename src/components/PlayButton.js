import React from 'react';

let PlayIcon = React.createClass({
    shouldComponentUpdate() {
        return false;
    },

    render() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="sb-soundplayer-play-icon">
                <path d="M0 0 L32 16 L0 32 z"></path>
            </svg>
        );
    }
});

let PauseIcon = React.createClass({
    shouldComponentUpdate() {
        return false;
    },

    render() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="sb-soundplayer-pause-icon">
                <path d="M0 0 H12 V32 H0 z M20 0 H32 V32 H20 z"></path>
            </svg>
        );
    }
});

let PlayButton = React.createClass({
    propTypes: {
        loadingImageUrl: React.PropTypes.string,
        seeking: React.PropTypes.bool,
        playing: React.PropTypes.oneOfType([
            React.PropTypes.bool,
            React.PropTypes.string
        ]),
        togglePlay: React.PropTypes.func
    },

    getDefaultProps() {
        return {playing: false, seeking: false};
    },

    render() {
        let { loadingImageUrl, playing, seeking, togglePlay } = this.props;

        return (
            <button className="sb-soundplayer-play-pause-btn" onClick={togglePlay}>
                <PlayIcon />
            </button>
        );
    }
});

export default PlayButton;
