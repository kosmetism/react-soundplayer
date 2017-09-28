import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import SoundCloudAudio from 'soundcloud-audio';
import { PrevIconSVG } from './Icons';

class PrevButton extends Component {
  shouldComponentUpdate() {
    return false;
  }

  handleClick(e) {
    const { soundCloudAudio, onPrevClick } = this.props;

    soundCloudAudio && soundCloudAudio.previous();
    onPrevClick && onPrevClick(e);
  }

  render() {
    const { className, style } = this.props;
    const classNames = ClassNames('sb-soundplayer-btn sb-soundplayer-prev-btn', className);

    return (
      <button type="button" className={classNames} style={style} onClick={::this.handleClick}>
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
