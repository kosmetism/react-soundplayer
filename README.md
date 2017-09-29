# <img src="http://www.officialpsds.com/images/thumbs/Soundcloud-Logo-psd47614.png" width="75" align="left">&nbsp;[react-soundplayer](http://labs.voronianski.com/react-soundplayer) 
[![npm version](http://badge.fury.io/js/react-soundplayer.svg)](http://badge.fury.io/js/react-soundplayer) 
[![Dependency Status](http://david-dm.org/soundblogs/react-soundplayer.svg)](http://david-dm.org/soundblogs/react-soundplayer) 
[![Download Count](http://img.shields.io/npm/dm/react-soundplayer.svg?style=flat)](http://www.npmjs.com/package/react-soundplayer)

> Create highly-customizable SoundCloud (or HTML5 audio) players with React.

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

## References

- simply the best CSS modular toolkit on the web - [BASSCSS](http://www.basscss.com/)
- easy management of HTML5 Audio API by [SoundCloudAudio.js](https://github.com/voronianski/soundcloud-audio.js/)
- inspired by [Plangular](http://jxnblk.com/plangular/)
- we all :heart: [SoundCloud API](https://developers.soundcloud.com/docs/api/reference)!
- generate standalone "copy-paste" version with [Soundplayer.js](labs.voronianski.com/get-soundplayer)
- follow updates on [Twitter](https://twitter.com/voronianski)

---

**MIT Licensed**
