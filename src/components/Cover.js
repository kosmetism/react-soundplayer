import React, { PropTypes, Component } from 'react';
import ClassNames from 'classnames';
import { SoundCloudLogoSVG } from './Icons';

class Cover extends Component {
    render() {
        let { backgroundUrl, trackName, artistName, className, style, children } = this.props;
        let classNames = ClassNames('sb-soundplayer-cover', className);

        return (
            <div className={classNames} style={Object.assign(style, {backgroundImage: `url(${backgroundUrl})`})}>
                <div>
                    <SoundCloudLogoSVG />
                </div>
                <div>
                    <span className="sb-soundplayer-track sb-soundplayer-info-box">{trackName}</span>
                </div>
                <div>
                    <span className="sb-soundplayer-artist sb-soundplayer-info-box">by {artistName}</span>
                </div>
                {React.Children.map(children, React.cloneElement)}
            </div>
        );
    }
}

Cover.propTypes = {
    className: PropTypes.string,
    backgroundUrl: PropTypes.string.isRequired,
    trackName: PropTypes.string.isRequired,
    artistName: PropTypes.string.isRequired
};

export default Cover;
