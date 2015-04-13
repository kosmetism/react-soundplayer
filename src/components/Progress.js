import React from 'react';

let { PropTypes } = React;

class Progress extends React.Component {
    handleSeekTrack(e) {
        let { seekTrack } = this.props;
        if (seekTrack) {
            let xPos = (e.pageX - e.currentTarget.getBoundingClientRect().left) / e.currentTarget.offsetWidth;
            seekTrack.call(this, Math.round(xPos * 100), e);
        }
    }

    render() {
        let { value } = this.props;

        value = parseInt(value, 10);

        if (value < 0) {
            value = 0;
        }
        if (value > 100) {
            value = 100;
        }

        let style = {width: `${value}%`};

        return (
            <div className="sb-soundplayer-progress-container" onClick={this.handleSeekTrack.bind(this)}>
                <div className="sb-soundplayer-progress-inner" style={style} />
            </div>
        );
    }
}

Progress.propTypes = {
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
