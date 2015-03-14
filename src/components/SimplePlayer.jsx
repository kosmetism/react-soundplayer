import React from 'react';
import Timer from './Timer.jsx';
import Progress from './Progress.jsx';
import PlayButton from './PlayButton.jsx';

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
        let { currentTime, duration, playing, seeking } = this.state;
        const progressVal = (currentTime / duration) || 0;

        return (
            <div className="sb-soundplayer">
                <PlayButton playing={playing} seeking={seeking} onClick={this.togglePlay} />
                <Progress value={progressVal} onClick={this.seekTrack} />
                <Timer currentTime={currentTime} duration={duration} />
            </div>
        );
    }
});

export default Player;
