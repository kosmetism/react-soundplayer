import React from 'react';
import ClassNames from 'classnames';
import SoundCloudAudio from 'soundcloud-audio';
import { NextIconSVG } from './Icons';

let { PropTypes } = React;

class NextButton extends React.Component {
    shouldComponentUpdate() {
        return false;
    }

    handleClick() {
        let { soundCloudAudio, onToggleNext } = this.props;

        soundCloudAudio && soundCloudAudio.next();
        onToggleNext && onToggleNext.call(this);
    }

    render() {
        let { className } = this.props;

        let classNames = ClassNames('sb-soundplayer-play-btn', className);

        return (
            <button className={classNames} onClick={this.handleClick.bind(this)}>
                <NextIconSVG />
            </button>
        );
    }
}

NextButton.propTypes = {
    className: PropTypes.string,
    onToggleNext: PropTypes.func,
    soundCloudAudio: PropTypes.instanceOf(SoundCloudAudio)
};

export default NextButton;
