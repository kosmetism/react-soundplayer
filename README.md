# <img src="http://www.officialpsds.com/images/thumbs/Soundcloud-Logo-psd47614.png" width="75" align="left">&nbsp;react-soundplayer

![](http://img.shields.io/badge/Status-Work%20In%20Progress-brightgreen.svg?style=flat)

> Create highly-customizable SoundCloud players with React.

![](https://dl.dropboxusercontent.com/u/100463011/react-soundplayer-screen.png)

```
npm install react-soundplayer --save
```

# API

## Pure Components

## SoundPlayerComponent

### Props

- `resolveUrl` _(String)_ - 
- `streamUrl` _(String)_ -
- `clientId` _(String)_ - your SoundCloud app's client ID, get at https://developers.soundcloud.com, [SoundCloudAudio](https://github.com/voronianski/soundcloud-audio.js) will be create per each component instance:

```javascript
import React from 'react';
import ReactSoundPlayer from 'react-soundplayer';

const { SoundPlayerComponent } = ReactSoundPlayer;
const clientId = 'YOUR CLIENT ID';

class AppPlayer extends React.Component {
    render() {
        <div>
            <SoundPlayerComponent clientId={client}>
            </SoundPlayerComponent>
        </div>
    }
}

React.render(<AppPlayer />, document.body);
```

- `soundCloudAudio` _(instance of [SoundCloudAudio](https://github.com/voronianski/soundcloud-audio.js))_ - with this prop you can benefit of global singleton audio object:

```javascript
import React from 'react';
import SoundCloudAudio from 'soundcloud-audio';
import ReactSoundPlayer from 'react-soundplayer';

const { SoundPlayerComponent } = ReactSoundPlayer;
const clientId = 'YOUR CLIENT ID';
const soundCloudAudio = new SoundCloudAudio(clientId);

class AppPlayer extends React.Component {
    render() {
        <div>
            <SoundPlayerComponent streamUrl={} soundCloudAudio={soundCloudAudio}>
            </SoundPlayerComponent>
        </div>
    }
}

React.render(<AppPlayer />, document.body);
```

---

**MIT Licensed**
