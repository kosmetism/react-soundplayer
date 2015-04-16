import React from 'react/addons';
import ClassNames from 'classnames';
import { SoundCloudLogoSVG } from './Icons';

let { PropTypes } = React;

class Cover extends React.Component {
    render() {
        let { backgroundUrl, track, artist, className, children } = this.props;
        let classNames = ClassNames('sb-soundplayer-cover', className);

        return (
            <div style={{backgroundImage: `url(${backgroundUrl})`}} className={classNames}>
                <div>
                    <SoundCloudLogoSVG />
                </div>
                <div>
                    <span className="sb-soundplayer-track sb-soundplayer-info-box">{track}</span>
                </div>
                <div>
                    <span className="sb-soundplayer-artist sb-soundplayer-info-box">by {artist}</span>
                </div>
                {React.Children.map(children, React.addons.cloneWithProps)}
            </div>
        );
    }
}

Cover.propTypes = {
    className: PropTypes.string,
    backgroundUrl: PropTypes.string.isRequired,
    track: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired
};

export default Cover;
