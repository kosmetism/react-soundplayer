import React, { PropTypes, Component } from 'react';
import ClassNames from 'classnames';
import SoundCloudAudio from 'soundcloud-audio';
import { PrevIconSVG } from './Icons';

class PrevButton extends Component {
    shouldComponentUpdate() {
        return false;
    }

    handleClick(e) {
        let { soundCloudAudio, onPrevClick } = this.props;

        soundCloudAudio && soundCloudAudio.previous();
        onPrevClick && onPrevClick(e);
    }

    render() {
        let { className, style } = this.props;

        let classNames = ClassNames('sb-soundplayer-play-btn', className);

        return (
            <button type="button" className={classNames} style={style} onClick={this.handleClick.bind(this)}>
                <PrevIconSVG />
            </button>
        );
    }
}

PrevButton.propTypes = {
    className: PropTypes.string,
    onPrevClick: PropTypes.func,
    soundCloudAudio: PropTypes.instanceOf(SoundCloudAudio)
};

export default PrevButton;
