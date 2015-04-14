import React from 'react';
import ClassNames from 'classnames';

let { PropTypes } = React;

class Progress extends React.Component {
    handleSeekTrack(e) {
        let { seekTrack } = this.props;
        if (seekTrack) {
            let xPos = (e.pageX - e.currentTarget.getBoundingClientRect().left) / e.currentTarget.offsetWidth;
            seekTrack.call(this, xPos, e);
        }
    }

    render() {
        let { value, className } = this.props;

        value = parseInt(value, 10);

        if (value < 0) {
            value = 0;
        }
        if (value > 100) {
            value = 100;
        }

        let style = {width: `${value}%`};
        let classNames = ClassNames('sb-soundplayer-progress-container', className);

        return (
            <div className={classNames} onClick={this.handleSeekTrack.bind(this)}>
                <div className="sb-soundplayer-progress-inner" style={style} />
            </div>
        );
    }
}

Progress.propTypes = {
    className: PropTypes.string,
    value: PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number
    ]),
    seekTrack: PropTypes.func
};

Progress.defaultProps = {
    value: 0
};

export default Progress;
