import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import SoundCloudAudio from 'soundcloud-audio';
import { NextIconSVG } from './Icons';

class NextButton extends Component {
  shouldComponentUpdate() {
    return false;
  }

  handleClick(e) {
    const { soundCloudAudio, onNextClick } = this.props;

    soundCloudAudio && soundCloudAudio.next();
    onNextClick && onNextClick(e);
  }

  render() {
    const { className, style } = this.props;
    const classNames = ClassNames('sb-soundplayer-btn sb-soundplayer-next-btn', className);

    return (
      <button type="button" className={classNames} style={style} onClick={::this.handleClick}>
        <NextIconSVG />
      </button>
    );
  }
}

NextButton.propTypes = {
  className: PropTypes.string,
  onNextClick: PropTypes.func,
  soundCloudAudio: PropTypes.instanceOf(SoundCloudAudio)
};

export default NextButton;
