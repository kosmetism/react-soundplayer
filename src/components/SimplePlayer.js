import React from 'react';

import Timer from './Timer';
import Progress from './Progress';
import PlayButton from './PlayButton';

const noop = () => {};

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
        seeking: React.PropTypes.bool,
        togglePlay: React.PropTypes.func,
        seekTrack: React.PropTypes.func
    },

    getDefaultProps() {
        return {
            duration: 0,
            currentTime: 0,
            playing: false,
            seeking: false,
            togglePlay: noop,
            seekTrack: noop
        };
    },

    render() {
        let { currentTime, duration, playing, seeking, seekTrack, togglePlay } = this.props;
        let progressVal = (currentTime / duration) || 0;

        return (
            <div className="sb-soundplayer">
                <PlayButton playing={playing} seeking={seeking} onClick={togglePlay} />
                <Progress value={progressVal} onClick={seekTrack} />
                <Timer currentTime={currentTime} duration={duration} />
            </div>
        );
    }
});

export default Player;
