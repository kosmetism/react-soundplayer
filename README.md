# <img src="http://www.officialpsds.com/images/thumbs/Soundcloud-Logo-psd47614.png" width="75" align="left">&nbsp;[react-soundplayer](http://labs.voronianski.com/react-soundplayer) 
[![npm version](http://badge.fury.io/js/react-soundplayer.svg)](http://badge.fury.io/js/react-soundplayer) 
[![Dependency Status](http://david-dm.org/kosmetism/react-soundplayer.svg)](http://david-dm.org/kosmetism/react-soundplayer) 
[![Download Count](http://img.shields.io/npm/dm/react-soundplayer.svg?style=flat)](http://www.npmjs.com/package/react-soundplayer)

> Create highly-customizable SoundCloud (or any audio) players with React.js.

[<img src="https://user-images.githubusercontent.com/974035/31037146-c21d53e2-a56f-11e7-9cd4-b4784f99040c.png" width="600" />](http://labs.voronianski.com/react-soundplayer#ExamplePlayers)

### [Documentation](http://labs.voronianski.com/react-soundplayer)

## Install

```
npm install react-soundplayer --save
```

## Examples

There are several examples [on the website](http://labs.voronianski.com/react-soundplayer/#ExamplePlayers). Here is the basic one to get you started:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { PlayButton, Timer } from 'react-soundplayer/components';
import { withSoundCloudAudio } from 'react-soundplayer/addons';

const clientId = 'YOUR CLIENT ID';
const resolveUrl = 'https://soundcloud.com/ksmtk/chronemics';

const Player = withSoundCloudAudio(props => {
    let { track, currentTime } = props;

    return (
      <div className="custom-player">
        <PlayButton
          className="custom-player-btn"
          onPlayClick={() => {
            console.log('play button clicked!');
          }}
          {...props} />
        <h2 className="custom-player-title">
          {track ? track.title : 'Loading...'}
        </h2>
        <Timer 
          className="custom-player-timer"
          duration={track ? track.duration / 1000 : 0} 
          currentTime={currentTime} 
          {...props} />
      </div>
    );
});

const App = () => {
  return (
    <Player
      clientId={clientId}
      resolveUrl={resolveUrl}
      onReady={() => console.log('track is loaded!')} />
  );
};

ReactDOM.render(
  <App />, 
  document.getElementById('#app')
);
```

### Custom Audio Example

It is also easy to built players **without** using SoundCloud API. You just need to pass audio source via `streamUrl` and all other necessary track meta information can be passed as custom props. Also you can choose `preloadType`, according to https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio#Attributes, by default this property is equal to 'auto'.

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { PlayButton, Timer } from 'react-soundplayer/components';

// it's just an alias for `withSoundCloudAudio` but makes code clearer
import { withCustomAudio } from 'react-soundplayer/addons';

// audio source
const streamUrl = 'https://s3-eu-west-1.amazonaws.com/react-soundplayer-examples/ksmtk-reborn-edit.mp3';

// some track meta information
const trackTitle = 'Ksmtk - Reborn';

const AWSSoundPlayer = withCustomAudio(props => {
  const { trackTitle } = props;

  return (
    <div>
      <PlayButton {...this.props} />
      <h2>{trackTitle}</h2>
      <Timer {...this.props} />
    </div>
  );
});

class App extends React.Component {
  render() {
    return (
      <AWSSoundPlayer
        streamUrl={streamUrl}
        trackTitle={trackTitle} 
        preloadType="auto" />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
```

## References

- simply the best CSS modular toolkit on the web - [BASSCSS](http://www.basscss.com/)
- easy management of HTML5 Audio API by [SoundCloudAudio.js](https://github.com/voronianski/soundcloud-audio.js/)
- inspired by [Plangular](http://jxnblk.com/plangular/)
- we all :heart: [SoundCloud API](https://developers.soundcloud.com/docs/api/reference)!
- generate standalone "copy-paste" version with [Soundplayer.js](labs.voronianski.com/get-soundplayer)
- follow updates on [Twitter](https://twitter.com/voronianski)

---

**MIT Licensed**
