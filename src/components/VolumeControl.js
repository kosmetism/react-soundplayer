import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SoundCloudAudio from 'soundcloud-audio';
import ClassNames from 'classnames';
import { VolumeIconLoudSVG, VolumeIconMuteSVG } from './Icons';

class VolumeControl extends Component {
  handleVolumeChange(e) {
    const {
      onVolumeChange,
      onToggleMute,
      soundCloudAudio,
      isMuted
    } = this.props;
    const xPos = (e.target.value / 100);
    const mute = (xPos <= 0 && !isMuted);

    if (soundCloudAudio && !isNaN(soundCloudAudio.audio.volume)) {
      soundCloudAudio.audio.volume = xPos;
      soundCloudAudio.audio.muted = mute;
    }

    if (mute !== isMuted) {
      onToggleMute && onToggleMute.call(this, mute, e);
    }

    onVolumeChange && onVolumeChange.call(this, xPos, e);
  }

  handleMute(e) {
    const { onToggleMute, soundCloudAudio } = this.props;

    if (soundCloudAudio && !isNaN(soundCloudAudio.audio.muted)) {
      soundCloudAudio.audio.muted = !soundCloudAudio.audio.muted;
    }

    onToggleMute && onToggleMute.call(this, !this.props.isMuted, e);
  }

  render() {
    const { className, buttonClassName, rangeClassName, volume, isMuted } = this.props;

    let value = volume * 100 || 0;

    if (value < 0 || isMuted) {
      value = 0;
    }

    if (value > 100) {
      value = 100;
    }

    const classNames = ClassNames('sb-soundplayer-volume', className);
    const buttonClassNames = ClassNames('sb-soundplayer-btn sb-soundplayer-volume-btn', buttonClassName);
    const rangeClassNames = ClassNames('sb-soundplayer-volume-range', rangeClassName);

    return (
      <div className={classNames}>
        <button className={buttonClassNames} onClick={::this.handleMute}>
          {isMuted ? <VolumeIconMuteSVG /> : <VolumeIconLoudSVG />}
        </button>
        <div>
          <input className={rangeClassNames} type="range" min="0" max="100" step="1" value={value} onChange={::this.handleVolumeChange} />
        </div>
      </div>
    );
  }
}

VolumeControl.propTypes = {
  className: PropTypes.string,
  buttonClassName: PropTypes.string,
  rangeClassName: PropTypes.string,
  volume: PropTypes.number,
  onVolumeChange: PropTypes.func,
  onToggleMute: PropTypes.func,
  soundCloudAudio: PropTypes.instanceOf(SoundCloudAudio)
};

VolumeControl.defaultProps = {
  volume: 1,
  isMuted: 0
};

export default VolumeControl;
