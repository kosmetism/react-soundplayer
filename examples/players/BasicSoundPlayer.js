import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withSoundCloudAudio } from '../../addons';
import { PlayButton, Timer, VolumeControl } from '../../components';

class BasicSoundPlayer extends Component {
  render() {
    const { track } = this.props;

    return (
      <div className="p1 mb3 mt1 flex flex-center bg-darken-1 red rounded">
        <PlayButton
          className="flex-none h4 button button-transparent button-grow rounded"
          {...this.props} />
        <VolumeControl
          className='flex flex-center mr2'
          buttonClassName="flex-none h4 button button-transparent button-grow rounded"
          {...this.props} />
        <h2 className="h5 nowrap caps flex-auto m0">
          {track ? track.title : 'Loading...'}
        </h2>
        <Timer
          className="h6 mr1"
          duration={track ? track.duration / 1000 : 0}
          {...this.props} />
      </div>
    );
  }
}

BasicSoundPlayer.propTypes = {
  resolveUrl: PropTypes.string.isRequired,
  clientId: PropTypes.string.isRequired
};

export default withSoundCloudAudio(BasicSoundPlayer);
