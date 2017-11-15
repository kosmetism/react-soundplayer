import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withCustomAudio } from '../../addons';
import { PlayButton, Timer } from '../../components';

class AWSSoundPlayer extends Component {
  render() {
    const { trackTitle } = this.props;

    return (
      <div className="p1 mb3 mt1 flex flex-center bg-darken-1 orange rounded">
        <PlayButton
          className="flex-none h4 button button-transparent button-grow rounded mr2"
          {...this.props} />
        <h2 className="h5 nowrap caps flex-auto m0">{trackTitle}</h2>
        <Timer className="h6 mr1" {...this.props} />
      </div>
    );
  }
}

AWSSoundPlayer.propTypes = {
  preloadType: PropTypes.string,
  streamUrl: PropTypes.string.isRequired,
  trackTitle: PropTypes.string.isRequired
};

AWSSoundPlayer.defaultProps = {
  preloadType: 'auto'
};

export default withCustomAudio(AWSSoundPlayer);
