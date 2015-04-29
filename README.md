# <img src="http://www.officialpsds.com/images/thumbs/Soundcloud-Logo-psd47614.png" width="75" align="left">&nbsp;react-soundplayer

[![npm version](http://badge.fury.io/js/react-soundplayer.svg)](http://badge.fury.io/js/react-soundplayer)
[![Dependency Status](http://david-dm.org/soundblogs/react-soundplayer.svg)](http://david-dm.org/soundblogs/react-soundplayer)
[![Download Count](http://img.shields.io/npm/dm/react-soundplayer.svg?style=flat)](http://www.npmjs.com/package/react-soundplayer)

> Create highly-customizable SoundCloud players with React.

[![](https://dl.dropboxusercontent.com/u/100463011/react-soundplayer-example.png)](http://labs.voronianski.com/react-soundplayer#ExamplePlayers)

### [Demo](http://labs.voronianski.com/react-soundplayer)

<!-- ![](https://dl.dropboxusercontent.com/u/100463011/react-soundplayer-screen.png) -->

## Usage

```
npm install react-soundplayer --save
```

ReactSoundPlayer is bundled with **[components](https://github.com/soundblogs/react-soundplayer#pure-components)** and **[addons](https://github.com/soundblogs/react-soundplayer#soundplayercontainer)** inside. You can require them in..

..plain-old ES5:

```javascript
// require components and addons
var SoundPlayerComponents = require('react-soundplayer/components');
var SoundPlayerAddons = require('react-soundplayer/addons');

var PlayButton = SoundPlayerComponents.PlayButton;
var Progress = SoundPlayerComponents.Progress;

// icons are components too!
var SoundCloudLogoSVG = SoundPlayerComponents.Icons.SoundCloudLogoSVG

var SoundPlayerContainer = SoundPlayerAddons.SoundPlayerContainer;

// ...
```

..or ES6 syntax:

```javascript
import { PlayButton, Progress, Icons } from 'react-soundplayer/components';
import { SoundPlayerContainer } from 'react-soundplayer/addons';

const { SoundCloudLogoSVG } = Icons;

// ...
```

ReactSoundPlayer depends on [React.js](http://facebook.github.io/react/index.html) 0.13.x (or higher) and [SoundCloudAudio](https://github.com/voronianski/soundcloud-audio.js) for managing HTML5 Audio.

# API

## Pure Components

With **ReactSoundPlayer** creation of SoundCloud players becomes as easy as pointing different controls in the right places. Here is the list of available pure so-called ["dumb"](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) components that accept data and callbacks only as `props`:

### PlayButton

Play or pause track. 

```javascript
<PlayButton 
    className={String}
    playing={Boolean}
    seeking={Boolean}
    seekingIcon={
        ReactElement 
        /*optional icon that will be showed when track is seeking new position to play*/
    }
    onTogglePlay={Function}
    soundCloudAudio={instanceof SoundCloudAudio}
/>
```

### NextButton

Switch to the next track in a playlist.

```javascript
<NextButton 
    className={String}
    onNextClick={Function}
    soundCloudAudio={instanceof SoundCloudAudio}
/>
```

### PrevButton

Return to the previous track in the playlist.

```javascript
<PrevButton
    className={String}
    onPrevClick={Function}
    soundCloudAudio={instanceof SoundCloudAudio}
/>
```

_Important note:_ All buttons accept `soundCloudAudio` prop which when passed will add actions to buttons automagically (e.g. play/pause, go to prev/next track), callback function used in `onTogglePlay`, `onNextClick` and `onPrevClick` will still be called after.

### Progress

Component that replaces native [`<progress>` DOM element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress).  If `soundCloudAudio` prop is passed it automagically updates track audio time due to clicked progress position.

```javascript
<Progress 
    className={String}
    innerClassName={String}
    value={Number}
    onSeekTrack={
        Function 
        /*receives `x` position as first argument and `event` as second*/
    } 
/>
```

### Timer

Shows current time of the track and its' duration in `(hh:)mm:ss/(hh:)mm:ss` format.

```javascript
<Timer
    className={String} 
    duration={Number}
    currentTime={Number}
/>
```

### Cover

Nice looking cover box inspired by original SoundCloud players.

```javascript
<Cover
    className={String}
    trackName={String}
    artistName={String}
    backgroundUrl={String}
/>
```

As you see each component contains a set of self-descriptive properties. One of them is `className` which allows you to setup custom class names as on regular DOM elements and style components as you wish.

## SoundPlayerContainer

`<SoundPlayerContainer />` is higher level container that propagates its' children with all necessary [props](https://github.com/soundblogs/react-soundplayer#state) which you might need in order to design an audio player.

When using it, just choose what kind of SoundCloud data you're consuming (via `resolveUrl` or `streamUrl`)

_If you're wondering "Why not mixin?", please read ["Why Component Is Better Than Mixin"](https://github.com/acdlite/flummox/blob/master/docs/docs/guides/why-flux-component-is-better-than-flux-mixin.md) by [@acdlite](https://github.com/acdlite)._

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

_(String)_ - pass here pure stream url as it's returned by [SoundCloud API](https://developers.soundcloud.com/docs/api/reference#tracks), it has higher priority than `resolveUrl`, example: 

```javascript
"https://api.soundcloud.com/tracks/200494743/stream"
```

##### `clientId`

_(String)_ - your SoundCloud app's client ID, get it at https://developers.soundcloud.com

[SoundCloudAudio](https://github.com/voronianski/soundcloud-audio.js) will be created per each component instance:

```javascript
import React from 'react';
import { SoundPlayerContainer } from 'react-soundplayer/addons';

const clientId = 'YOUR CLIENT ID';
const streamUrl = 'https://api.soundcloud.com/tracks/200494743/stream';

class AppPlayer extends React.Component {
    render() {
        <div>
            <SoundPlayerContainer streamUrl={streamUrl} clientId={client}>
                {/* your custom player components */}
            </SoundPlayerContainer>
        </div>
    }
}

React.render(<AppPlayer />, document.body);
```

### Children Props

All of these self-descriptive state properties are passed into `<SoundPlayerContainer />` children components as `props`:

- `playing` _(Boolean)_ - `true` if audio is playing currently
- `seeking` _(Boolean)_ - `true` if audio is seeking for position
- `track` _(Object)_ or `tracks` _(Array)_ - data object or array of such objects depends whether the url was pointing to track or playlist, see - https://developers.soundcloud.com/docs/api/reference#tracks (**will be available only while using [`resolveUrl` prop](https://github.com/soundblogs/react-soundplayer#resolveurl)**)
- `duration` _(Number)_ - audio duration in seconds
- `currentTime` _(Number)_ - audio current time in seconds
- `soundCloudAudio` _(instance of [SoundCloudAudio](https://github.com/voronianski/soundcloud-audio.js))_

As you can see it's really easy to create your own components from scratch and wrap them with `SoundPlayerContainer` which will provide all the necessary data to them.

```javascript
import React from 'react';
import { SoundPlayerContainer } from 'react-soundplayer/addons';

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
            <SoundPlayerContainer resolveUrl={resolveUrl} clientId={clientId}>
                <TrackInfo />
                <PlayPause />
            </SoundPlayerContainer>
        );
    }
}

React.render(<CustomPlayer />, document.body);
```

## Icon Components

Icons for buttons and SoundCloud logo can be used on their own as well. All of them are pure [**SVG**](http://caniuse.com/#search=svg).

```javascript
import { Icons } from 'react-soundplayer/components';

// the list of available icons:
const {
    SoundCloudLogoSVG,
    PlayIconSVG,
    PauseIconSVG,
    NextIconSVG,
    PrevIconSVG
} = Icons;
```

## SoundCloud API

If you're curious what data you can use inside player just take a look into official SoundCloud Developers docs for [tracks](https://developers.soundcloud.com/docs/api/reference#tracks).

## Troubleshooting

Please keep in mind that SoundCloud provides an option for users to prevent streaming to third-party apps. If your sound isn't playing check the [track](https://developers.soundcloud.com/docs/api/reference#tracks)'s `streamable` property. If it's set to `false`, there is no way to play that sound with the API.

## References

- simply the best CSS modular toolkit on the web - [BASSCSS](http://www.basscss.com/)
- easy management of HTML5 Audio API by [SoundCloudAudio](https://github.com/voronianski/soundcloud-audio.js/)
- inspired by [Plangular](http://jxnblk.com/plangular/)
- we all :heart: [SoundCloud API](https://developers.soundcloud.com/docs/api/reference)!
- follow updates on [Twitter](https://twitter.com/voronianski)

---

**MIT Licensed**
