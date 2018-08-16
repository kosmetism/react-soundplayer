import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import { withSoundCloudAudio } from '../../addons';
import {
  PlayButton,
  PrevButton,
  NextButton,
  Progress,
  Timer,
  VolumeControl
} from '../../components';

class PlaylistSoundPlayer extends Component {
  constructor() {
    super();

    this.state = {
      activeIndex: 0
    };
  }

  playTrackAtIndex(playlistIndex) {
    const { soundCloudAudio } = this.props;

    this.setState({activeIndex: playlistIndex});

    soundCloudAudio.play({ playlistIndex });
  }

  nextIndex() {
    const { playlist } = this.props;
    let { activeIndex } = this.state;

    if (activeIndex >= playlist.tracks.length - 1) {
      return;
    }

    if (activeIndex || activeIndex === 0) {
      this.setState({activeIndex: ++activeIndex});
    }
  }

  prevIndex() {
    let { activeIndex } = this.state;

    if (activeIndex <= 0) {
      return;
    }

    if (activeIndex || activeIndex === 0) {
      this.setState({activeIndex: --activeIndex});
    }
  }

  renderTrackList() {
    const { playlist } = this.props;

    if (!playlist) {
      return <div className="p2 center">Loading...</div>;
    }

    const tracks = playlist.tracks.map((track, i) => {
      const classNames = ClassNames('flex flex-center full-width left-align button button-transparent', {
        'is-active': this.props.soundCloudAudio._playlistIndex === i
      });

      return (
        <button
          key={track.id}
          className={classNames}
          onClick={this.playTrackAtIndex.bind(this, i)}>
          <span className="flex-auto semibold">{track.user.username} - {track.title}</span>
          <span className="h6 regular">{Timer.prettyTime(track.duration / 1000)}</span>
        </button>
      );
    });

    return (
      <div>{tracks}</div>
    );
  }

  render() {
    let { playlist, currentTime, duration } = this.props;

    return (
      <div className="bg-darken-1 red mt1 mb3 rounded">
        <div className="p2">
          <div className="flex flex-center">
            <h2 className="h4 flex-auto nowrap m0 semibold">{playlist ? playlist.user.username : ''}</h2>
            <Timer className="h6 mr1 regular" duration={duration || 0} currentTime={currentTime} {...this.props} />
          </div>
          <h2 className="h2 nowrap caps mt0 mb2 semibold">{playlist ? playlist.title : ''}</h2>
          <div className="flex flex-center">
            <PrevButton
              className="flex-none h3 button button-narrow button-transparent button-grow rounded"
              onPrevClick={this.prevIndex.bind(this)}
              {...this.props} />
            <PlayButton
              className="flex-none h2 button button-transparent button-grow rounded"
              {...this.props} />
            <NextButton
              className="flex-none h3 button button-narrow button-transparent button-grow rounded"
              onNextClick={this.nextIndex.bind(this)}
              {...this.props} />
            <VolumeControl
              className='flex flex-center mr2'
              buttonClassName="flex-none h4 button button-transparent button-grow rounded"
              {...this.props} />
            <Progress
              className="mt1 mb1 rounded"
              innerClassName="rounded-left"
              value={(currentTime / duration) * 100 || 0}
              {...this.props} />
          </div>
        </div>
        {this.renderTrackList()}
      </div>
    );
  }
}

PlaylistSoundPlayer.propTypes = {
  resolveUrl: PropTypes.string.isRequired,
  clientId: PropTypes.string.isRequired
};

export default withSoundCloudAudio(PlaylistSoundPlayer);
