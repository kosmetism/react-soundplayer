import React from 'react';

let Progress = React.createClass({
    propTypes: {
        value: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.number
        ]),
        seekTrack: React.PropTypes.func
    },

    getDefaultProps() {
        return {
            value: 0
        };
    },

    render() {
        let { value, seekTrack } = this.props;

        value = parseInt(this.props.value, 10);

        if (value < 0) {
            value = 0;
        }
        if (value > 100) {
            value = 100;
        }

        let style = {width: `${value}%`};

        return (
            <div className="sb-soundplayer-progressbar-container" onClick={seekTrack}>
                <div className="sb-soundplayer-progressbar-inner" style={style} />
            </div>
        );
    }
});

export default Progress;
