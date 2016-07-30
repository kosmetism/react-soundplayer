import React, { PropTypes, Component } from 'react';
import ClassNames from 'classnames';

class Timer extends Component {
    static prettyTime(time) {
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
        let { duration, currentTime, className, style, soundCloudAudio } = this.props;
        let classNames = ClassNames('sb-soundplayer-timer', className);

        if (!duration && soundCloudAudio.duration) {
            duration = soundCloudAudio.duration
        }

        return (
            <div className={classNames} style={style}>
                {Timer.prettyTime(currentTime)} / {Timer.prettyTime(duration)}
            </div>
        );
    }
}

Timer.propTypes = {
    className: PropTypes.string,
    duration: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    currentTime: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
};

Timer.defaultProps = {
    duration: 0,
    currentTime: 0
};

export default Timer;
