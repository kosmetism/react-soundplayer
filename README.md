# <img src="http://www.officialpsds.com/images/thumbs/Soundcloud-Logo-psd47614.png" width="75" align="left">&nbsp;react-soundplayer

![](http://img.shields.io/badge/Status-Work%20In%20Progress-brightgreen.svg?style=flat)

> Create highly-customizable SoundCloud players with React.

![](https://dl.dropboxusercontent.com/u/100463011/react-soundplayer-screen.png)

```
npm install react-soundplayer --save
```

# API

## Pure Components

With **ReactSoundPlayer** creation of SoundCloud players becomes as easy as pointing different controls in the right places. Here is the list of available pure so-called ["dumb"](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) components that accept data and callbacks only as `props`:

### PlayButton

Plays/pauses audio in the player. 

```javascript
<PlayButton 
    className={String}
    playing={Bool}
    seeking={Bool}
seekingIcon={ReactElement /*optional icon that will be showed when track is seeking new position to play*/}
    soundCloudAudio={instanceof SoundCloudAudio /*if passed automagically handles play and pause*/}
    onTogglePlay={Func} 
/>
```

### NextButton

Goes to the next track in the playlist.

```javascript
<NextButton 
    className={String} 
    soundCloudAudio={instanceof SoundCloudAudio /*if passed automagically calls its' `next()` method on click*/}
    onNextClick={Func}
/>
```

### PrevButton

Returns back to the previous track in the playlist.

```javascript
<PrevButton 
    className={String} 
    soundCloudAudio={instanceof SoundCloudAudio /*if passed automagically calls its' `previous()` method on click*/}
    onPrevClick={Func}
/>
```

### Timer

Shows current time of the track and its' duration in `mm:ss/mm:ss` format.

```javascript
<Timer 
    className={String} 
    duration={Number}
    currentTime={Number}
/>
```

### Progress

Component that replaces native [`<progress>` DOM element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress)

```javascript
<Progress 
    className={String}
    value={Number}
    seekTrack={Func /*receives `x` position as first argument and `event` as second*/} 
/>
```

### Cover

Nice looking cover box inspire by original SoundCloud players.

```javascript
<Cover 
    className={String}
    trackName={String}
    artistName={String}
    backgroundUrl={String}
/>
```

As you see each component contains a set of self-descriptive properties. One of them is `className` which allows you to setup custom classnames as on regular DOM elements and style components as you wish.

## SoundPlayerComponent

`<SoundPlayerComponent />` is high level container that propagates its' children with all necessary [data](https://github.com/soundblogs/react-soundplayer#state) which you might need in order to design an audio player. When using it, just choose:

- what kind of SoundCloud data you're consuming (via `resolveUrl` or `streamUrl`)
- will [`Audio element`](https://developer.mozilla.org/en/docs/Web/API/HTMLMediaElement) be present globally or created per each player (via `clientId` or `soundCloudAudio` instance passed).

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
import { SoundPlayerComponent } from 'react-soundplayer/addons';

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
import { SoundPlayerComponent } from 'react-soundplayer/addons';

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

As you can see it's really easy to create your own components from scratch and wrap them with `SoundPlayerComponent` which will provide all the necessary data to them.

```javascript
import React from 'react';
import SoundCloudAudio from 'soundcloud-audio';
import { SoundPlayerComponent } from 'react-soundplayer/addons';

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
