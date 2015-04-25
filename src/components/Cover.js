import React from 'react/addons';
import ClassNames from 'classnames';
import { SoundCloudLogoSVG } from './Icons';

let { PropTypes, Component } = React;

class Cover extends Component {
    render() {
        let { backgroundUrl, trackName, artistName, className, children } = this.props;
        let classNames = ClassNames('sb-soundplayer-cover', className);

        return (
            <div style={{backgroundImage: `url(${backgroundUrl})`}} className={classNames}>
                <div>
                    <SoundCloudLogoSVG />
                </div>
                <div>
                    <span className="sb-soundplayer-track sb-soundplayer-info-box">{trackName}</span>
                </div>
                <div>
                    <span className="sb-soundplayer-artist sb-soundplayer-info-box">by {artistName}</span>
                </div>
                {React.Children.map(children, React.addons.cloneWithProps)}
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
