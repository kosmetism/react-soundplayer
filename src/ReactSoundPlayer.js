import SoundCloudAudio from 'soundcloud-audio';

import SoundCloudMixin from './SoundCloudMixin';
import SoundCloudPlayer from './SoundCloudPlayer';

export default class ReactSoundPlayer {
    constructor(clientId) {
        this.soundCloudAudio = SoundCloudAudio(clientId);

        return {
            SoundCloudPlayer: SoundCloudPlayer(this.soundCloudAudio)
        };
    }
}
