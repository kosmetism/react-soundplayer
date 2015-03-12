import React from 'react';
import Timer from './Timer.jsx';

let Player = React.createClass({
    propTypes: {
        duration: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.number
        ]),
        currentTime: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.number
        ]),
        playing: React.PropTypes.bool,
        seeking: React.PropTypes.bool
    },

    getDefaultProps() {
        return {
            duration: 0,
            currentTime: 0,
            playing: false,
            seeking: false
        };
    },

    render() {
        let { currentTime, duration } = this.state;

        return (
            <div className="sb-soundplayer">
                <div className="play-btn" onClick={this.playPauseTrack}>
                    <img src={btnIcon} />
                </div>
                <div className="waveform">
                    <progress onClick={this.seekTrack} value={progressVal}></progress>
                </div>
                <Timer currentTime={currentTime} duration={duration} />
            </div>
        );
    }
});

export default Player;
