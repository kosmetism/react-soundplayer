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

`<SoundPlayerComponent />` is higher level container that propagates its' children with all necessary [data](https://github.com/soundblogs/react-soundplayer#state) you need in order to design an audio player. When using it just choose what kind of data you're consuming (via `resolveUrl` or `streamUrl`) and will be [`Audio`](https://developer.mozilla.org/en/docs/Web/API/HTMLMediaElement) element global or created per each player (via `clientId` or `soundCloudAudio` instance passed).

_If you're wondering "Why not mixin?!", please read ["Why Component Is Better Than Mixin"](https://github.com/acdlite/flummox/blob/master/docs/docs/guides/why-flux-component-is-better-than-flux-mixin.md) by [@acdlite](https://github.com/acdlite)._

### Props

##### `resolveUrl`

_(String)_ - this could be regular link from SoundCloud web app which points to track or playlist, example urls:

```javascript
// track
"https://soundcloud.com/thrilljockey/future-islands-balance"

// playlist
"https://soundcloud.com/stepan-i-meduza-official/sets/dolgo-obyasnyat-ep"
```

##### `streamUrl`

_(String)_ - pass here pure stream url as it's returned by [SoundCloud API](https://developers.soundcloud.com/docs/api/reference#tracks), it has higher priority than `resolveUrl`, example url: 

```javascript
"https://api.soundcloud.com/tracks/200494743/stream"
```

##### `clientId`

_(String)_ - your SoundCloud app's client ID, get at https://developers.soundcloud.com

[SoundCloudAudio](https://github.com/voronianski/soundcloud-audio.js) will be created per each component instance:

```javascript
import React from 'react';
import ReactSoundPlayer from 'react-soundplayer';

const { SoundPlayerComponent } = ReactSoundPlayer;
const clientId = 'YOUR CLIENT ID';
const streamUrl = 'https://api.soundcloud.com/tracks/200494743/stream';

class AppPlayer extends React.Component {
    render() {
        <div>
            <SoundPlayerComponent streamUrl={streamUrl} clientId={client}>
                {/* your custom player components */}
            </SoundPlayerComponent>
        </div>
    }
}

React.render(<AppPlayer />, document.body);
```

##### `soundCloudAudio` 

_(instance of [SoundCloudAudio](https://github.com/voronianski/soundcloud-audio.js))_ - with this prop you can benefit of global audio object:

```javascript
import React from 'react';
import SoundCloudAudio from 'soundcloud-audio';
import ReactSoundPlayer from 'react-soundplayer';

const { SoundPlayerComponent } = ReactSoundPlayer;
const clientId = 'YOUR CLIENT ID';
const streamUrl = 'https://api.soundcloud.com/tracks/200494743/stream';

let soundCloudAudio = new SoundCloudAudio(clientId);

class AppPlayer extends React.Component {
    render() {
        <div>
            <SoundPlayerComponent streamUrl={streamUrl} soundCloudAudio={soundCloudAudio}>
                {/* your custom player components */}
            </SoundPlayerComponent>
        </div>
    }
}

React.render(<AppPlayer />, document.body);
```

### State

All of these self-descriptive state properties are passed into `<SoundPlayerComponent />` children components as `props`:

- `playing` _(Boolean)_ - `true` if audio is playing currently
- `seeking` _(Boolean)_ - `true` if audio is seeking for position
- `track` _(Object)_ or `tracks` _(Array)_ - data object or array of such objects depends whether the url was pointing to track or playlist, see - https://developers.soundcloud.com/docs/api/reference#tracks
- `duration` _(Number)_ - audio duration in seconds
- `currentTime` _(Number)_ - audio current time in seconds
- `soundCloudAudio` _(instance of [SoundCloudAudio](https://github.com/voronianski/soundcloud-audio.js))_

```javascript
import React from 'react';
import SoundCloudAudio from 'soundcloud-audio';
import ReactSoundPlayer from 'react-soundplayer';

const { SoundPlayerComponent } = ReactSoundPlayer;
const clientId = 'YOUR CLIENT ID';
const resolveUrl = 'https://soundcloud.com/stepan-i-meduza-official/dolgo-obyasnyat';

class TrackInfo extends React.Component {
    render() {
        let { track } = this.props;
        
        if (!track) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <h2>{track.title}</h2>
                <h3>{track.user.username}</h3>
            </div>
        );
    }
}

class PlayPause extends React.Component {
    togglePlay() {
        let { playing, soundCloudAudio } = this.props;
        if (playing) {
            soundCloudAudio.pause();
        } else {
            soundCloudAudio.play();
        }
    }

    render() {
        let { playing } = this.props;
        let text = playing ? 'Pause' : 'Play';
        
        if (!track) {
            return <div>Loading...</div>;
        }

        return (
            <button onClick={this.togglePlay.bind(this)}>
                {text}
            </button>
        );
    }
}

class CustomPlayer extends React.Component {
    render() {
        return (
            <SoundPlayerComponent resolveUrl={resolveUrl} clientId={clientId}>
                <TrackInfo />
                <PlayPause />
            </SoundPlayerComponent>
        );
    }
}

React.render(<CustomPlayer />, document.body);
```

## SoundCloud API

If you're curious what data you can use inside player just take a look into official SoundCloud Developers docs for [tracks](https://developers.soundcloud.com/docs/api/reference#tracks).

## Troubleshooting

Please keep in mind that SoundCloud provides an option for users to prevent streaming to third-party apps. If your sound isn't playing check the [track](https://developers.soundcloud.com/docs/api/reference#tracks)'s `streamable` property. If it's set to `false`, there is no way to play that sound with the API.

## References

---

**MIT Licensed**
