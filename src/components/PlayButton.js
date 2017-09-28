import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import SoundCloudAudio from 'soundcloud-audio';
import { PlayIconSVG, PauseIconSVG } from './Icons';

class PlayButton extends Component {
  shouldComponentUpdate(nextProps) {
    const { playing, seeking } = this.props;

    return (
      playing !== nextProps.playing || seeking !== nextProps.seeking
    );
  }

  handleClick(e) {
    const { playing, soundCloudAudio, onTogglePlay } = this.props;

    if (!playing) {
      soundCloudAudio && soundCloudAudio.play({
        playlistIndex: soundCloudAudio._playlistIndex
      });
    } else {
      soundCloudAudio && soundCloudAudio.pause();
    }

    onTogglePlay && onTogglePlay(e);
  }

  render() {
    const { playing, seekingIcon, seeking, className, style } = this.props;

    let iconNode;

    if (seeking && seekingIcon) {
      iconNode = React.cloneElement(seekingIcon);
    } else if (playing) {
      iconNode = <PauseIconSVG />;
    } else {
      iconNode = <PlayIconSVG />;
    }

    const classNames = ClassNames('sb-soundplayer-btn sb-soundplayer-play-btn', className);

    return (
      <button type="button" className={classNames} style={style} onClick={::this.handleClick}>
        {iconNode}
      </button>
    );
  }
}

PlayButton.propTypes = {
  className: PropTypes.string,
  seeking: PropTypes.bool,
  playing: PropTypes.bool,
  onTogglePlay: PropTypes.func,
  seekingIcon: PropTypes.node,
  soundCloudAudio: PropTypes.instanceOf(SoundCloudAudio)
};

PlayButton.defaultProps = {
  playing: false,
  seeking: false
};

export default PlayButton;
