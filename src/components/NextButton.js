import React from 'react';
import ClassNames from 'classnames';
import SoundCloudAudio from 'soundcloud-audio';
import { NextIconSVG } from './Icons';

let { PropTypes, Component } = React;

class NextButton extends Component {
    shouldComponentUpdate() {
        return false;
    }

    handleClick() {
        let { soundCloudAudio, onNextClick } = this.props;

        soundCloudAudio && soundCloudAudio.next();
        onNextClick && onNextClick(e);
    }

    render() {
        let { className, styles } = this.props;
        let classNames = ClassNames('sb-soundplayer-play-btn', className);

        return (
            <button type="button" className={classNames} style={styles} onClick={this.handleClick.bind(this)}>
                <NextIconSVG />
            </button>
        );
    }
}

NextButton.propTypes = {
    className: PropTypes.string,
    styles: React.PropTypes.object,
    onNextClick: PropTypes.func,
    soundCloudAudio: PropTypes.instanceOf(SoundCloudAudio)
};

export default NextButton;
