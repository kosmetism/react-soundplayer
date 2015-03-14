import React from 'react';

let SoundPlayer = React.createClass({
    propTypes: {
        imageUrl: React.PropTypes.string.isRequired,
        streamUrl: React.PropTypes.string.isRequired,
        trackTitle: React.PropTypes.string.isRequired,
        artistName: React.PropTypes.string.isRequired
    },

    render() {
        let { imageUrl, streamUrl, artistName, trackTitle } = this.props;

        return (
            <div>
                <div className="soundcloud-logo"><img src="assets/soundcloud-logo.svg" /></div>
                <h2><span className="track info-box">{trackTitle}</span></h2>
                <h3><span className="artist info-box">by {artistName}</span></h3>
                <Player streamUrl={streamUrl} />
            </div>
        );
    }
});

export default SoundPlayer;
