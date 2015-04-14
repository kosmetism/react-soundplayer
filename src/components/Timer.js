import React from 'react';

let { PropTypes } = React;

class Timer extends React.Component {
    prettyTime(time) {
        let hours = Math.floor(time / 3600);
        let mins = '0' + Math.floor((time % 3600) / 60);
        let secs = '0' + Math.floor((time % 60));

        mins = mins.substr(mins.length - 2);
        secs = secs.substr(secs.length - 2);

        if (!isNaN(secs)) {
            if (hours) {
                return `${hours}:${mins}:${secs}`;
            } else {
                return `${mins}:${secs}`;
            }
        } else {
            return '00:00';
        }
    }

    render() {
        let { duration, currentTime } = this.props;

        return (
            <div className="sb-soundplayer-timer">
                {this.prettyTime(currentTime)} / {this.prettyTime(duration)}
            </div>
        );
    }
}

Timer.propTypes = {
    duration: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    currentTime: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired
};

export default Timer;
