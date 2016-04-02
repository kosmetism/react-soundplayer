import React from 'react';
import ClassNames from 'classnames';
import SoundCloudAudio from 'soundcloud-audio';
import { PrevIconSVG } from './Icons';

let { PropTypes, Component } = React;

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
        let { className, styles } = this.props;

        let classNames = ClassNames('sb-soundplayer-play-btn', className);

        return (
            <button type="button" className={classNames} style={styles} onClick={this.handleClick.bind(this)}>
                <PrevIconSVG />
            </button>
        );
    }
}

PrevButton.propTypes = {
    className: PropTypes.string,
    styles: PropTypes.object,
    onPrevClick: PropTypes.func,
    soundCloudAudio: PropTypes.instanceOf(SoundCloudAudio)
};

export default PrevButton;
