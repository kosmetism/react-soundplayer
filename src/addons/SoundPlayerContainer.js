// IMPORTANT NOTE!
// This container is deprecated, please use `withSoundCloudAudio` instead
// HOC pattern docs - https://reactjs.org/docs/higher-order-components.html

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SoundCloudAudio from 'soundcloud-audio';
import withSoundCloudAudio from './withSoundCloudAudio';

class SoundPlayerContainer extends Component {
  wrapChild(child) {
    return React.cloneElement(child, this.props);
  }

  componentWillMount() {
    console.warn(`
      <SoundPlayerContainer /> is deprecated! Please use HOC addons/withSoundCloudAudio instead.
      https://reactjs.org/docs/higher-order-components.html
      https://labs.voronianski.com/react-soundplayer/#Containers
    `);
  }

  render() {
    const { children } = this.props;

    if (!children) {
      return;
    }

    if (!Array.isArray(children)) {
      return this.wrapChild(children);
    }

    return (
      <span>
        {React.Children.map(children, ::this.wrapChild)}
      </span>
    );
  }
}

SoundPlayerContainer.propTypes = {
  streamUrl: PropTypes.string,
  resolveUrl: PropTypes.string,
  clientId: PropTypes.string,
  soundCloudAudio: PropTypes.instanceOf(SoundCloudAudio),
  onStartTrack: PropTypes.func,
  onStopTrack: PropTypes.func,
  onPauseTrack: PropTypes.func,
  onVolumeChange: PropTypes.func,
  onReady: PropTypes.func
};

export default withSoundCloudAudio(SoundPlayerContainer);
