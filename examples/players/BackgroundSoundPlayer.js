import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withSoundCloudAudio } from '../../addons';
import { PlayButton, Progress, VolumeControl } from '../../components';

const nasaBg = './assets/player-bg.jpg';

class BackgroundSoundPlayer extends Component {
  render() {
    const { track, duration, currentTime } = this.props;

    return (
      <div className="py2 white bg-cover bg-top rounded relative" style={{backgroundImage: `url(${nasaBg})`}}>
        <div className="bg-black absolute top-0 right-0 left-0 bottom-0 muted" />
        <div className="center py4 relative z1">
          <h3 className="h4 nowrap caps mb0">{track ? track.user.username : ''}</h3>
          <h2 className="h0 nowrap caps m0">{track ? track.title : ''}</h2>
        </div>
        <div className="flex flex-center px2 relative z1">
          <PlayButton
            className="flex-none h2 mr2 button button-transparent button-grow rounded"
            {...this.props} />
          <VolumeControl
            className='mr2 flex flex-center'
            buttonClassName="flex-none h2 button button-transparent button-grow rounded"
            rangeClassName="custom-track-bg"
            {...this.props} />
          <Progress
            className="flex-auto bg-darken-3 rounded"
            innerClassName="rounded-left bg-white"
            value={(currentTime / duration) * 100 || 0}
            {...this.props} />
        </div>
      </div>
    );
  }
}

BackgroundSoundPlayer.propTypes = {
  resolveUrl: PropTypes.string.isRequired,
  clientId: PropTypes.string.isRequired
};

export default withSoundCloudAudio(BackgroundSoundPlayer);
