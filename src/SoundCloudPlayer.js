import React from 'react/addons';

import SoundCloudComponent from './SoundCloudComponent';
import SimplePlayer from './components/SimplePlayer';

/**
 *  SoundCloud Player
 *
 * <SoundCloudPlayer
 *   soundCloudAudio={soundCloudAudio}
 *   resolveUrl="https://soundcloud.com/stepan-i-meduza-official/dolgo-obyasnyat"
 * />
 *
 */

let SoundCloudPlayer = React.createClass({
    render() {
        let { soundCloudAudio, resolveUrl, streamUrl } = this.props;

        return (
            <SoundCloudComponent
                soundCloudAudio={soundCloudAudio}
                resolveUrl={resolveUrl}
                streamUrl={streamUrl}
            >
                <SimplePlayer />
            </SoundCloudComponent>
        );
    }
});
