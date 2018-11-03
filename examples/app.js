import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import hljs from 'highlight.js';

// built-in components..
import {
  PlayButton,
  NextButton,
  PrevButton,
  Progress,
  Timer,
  Cover,
  VolumeControl
} from '../components';

// ..and addons
import { withSoundCloudAudio } from '../addons';

// example players
import BasicSoundPlayer from './players/BasicSoundPlayer';
import ProgressSoundPlayer from './players/ProgressSoundPlayer';
import PlaylistSoundPlayer from './players/PlaylistSoundPlayer';
import BackgroundSoundPlayer from './players/BackgroundSoundPlayer';

// dummy data
const ksmtkChronemics = 'https://soundcloud.com/kosmetism/chronemics';
const ksmtkNightcall = 'https://soundcloud.com/kosmetism/nightcall';
const haghorrorDerNeueKult = 'https://soundcloud.com/kosmetism/haghorror-der-neue-kult-preview';
const glassCandy = 'https://soundcloud.com/johnnyjewel/glass-candy-shell-game';
const haghorrorSet = 'https://soundcloud.com/kosmetism/sets/haghorror';
const data = {
  image: 'https://i1.sndcdn.com/artworks-000168705014-y0hq07-t500x500.jpg',
  artist: 'Chromatics',
  track: 'Cherry (Full Album)'
};

const users = [{
  title: 'Fanburst',
  url: 'https://fanburst.com',
  logo: 'https://pbs.twimg.com/profile_images/783752771950350336/Rq7dfxia.jpg'
}, {
  title: 'Properllerhead Software',
  url: 'https://www.propellerheads.se',
  logo: 'https://pbs.twimg.com/profile_images/558288234363367424/qChNU38G_400x400.png'
}, {
  title: 'Braille Face "Kōya"',
  url: 'https://koya.brailleface.co',
  logo: 'https://koya.brailleface.co/static/media/Artwork.62b8ca22.jpg'
}, {
  title: 'Abakus',
  url: 'https://abakus.no',
  logo: 'https://i.imgur.com/n2Rr3Ly.png'
}];

const clientId = process.env.CLIENT_ID || ''; // OR PUT YOUR CLIENT ID HERE

const seekingIcon = (
  <img src="./assets/preloader.svg" className="sb-soundplayer-icon" />
);

class PureComponents extends React.Component {
  constructor() {
    super();

    this.state = {
      seeking: false,
      playing: false,
      currentTime: 24,
      progressVal: 8,
      duration: 300,
      volume: 0.75,
      isMuted: false
    };
  }

  handleClick() {
    let { playing } = this.state;

    if (!playing) {
      this.setState({seeking: true});
      setTimeout(() => {
        this.setState({seeking: false, playing: !!!this.state.playing});
      }, 1500);
    } else {
      this.setState({playing: !!!this.state.playing});
    }
  }

  handleVolumeChange(volume) {
    this.setState({volume});
  }

  handleMuteToggle(isMuted) {
    this.setState({isMuted});
  }

  seekTrack(xPos) {
    this.setState({
      currentTime: Math.round(xPos * this.state.duration),
      progressVal: Math.round(xPos * 100)
    });
  }

  render() {
    let { playing, seeking, duration, currentTime, progressVal } = this.state;

    return (
      <div>
        <h2 id="PureComponents" className="caps mt4">
          <a href="#PureComponents" className="black">Pure Components</a>
        </h2>
        <hr className="mt1 mb1 b2 border-orange" />

        <div className="mt3 mb3">
          Each component accepts <code className="black bg-darken-1 rounded">className</code> prop as regular DOM elements do. This allows to use different styles with them easily.
          There is a list of all available so-called "dumb" components that accept data and callbacks with self-descriptive props:
        </div>

        <h3 id="PlayButton" className="mb2 h4">
          <a href="#PlayButton" className="black bg-yellow rounded">
            <code>{'<PlayButton />'}</code>
          </a>
        </h3>
        <div className="mb2">Play or pause track.</div>
        <PlayButton
          className="button btn-big button-outline button-grow orange rounded mb2"
          playing={playing}
          seeking={seeking}
          seekingIcon={seekingIcon}
          onTogglePlay={this.handleClick.bind(this)}
        />
        <pre><code className="javascript">{`<PlayButton
  className={String}
  playing={Boolean}
  seeking={Boolean}
  seekingIcon={ReactElement}
  onTogglePlay={Function}
  soundCloudAudio={instanceof SoundCloudAudio} />
`}</code></pre>
        <hr />

        <h3 id="NextButton" className="mb2 h4">
          <a href="#NextButton" className="black bg-yellow rounded">
            <code>{'<NextButton />'}</code>
          </a>
        </h3>
        <div className="mb2">Switch to the next track in a playlist.</div>
        <NextButton className="button btn-big button-outline button-grow orange rounded mb2" />
        <pre><code className="javascript">{`<NextButton
  className={String}
  onNextClick={Function}
  soundCloudAudio={instanceof SoundCloudAudio} />
`}</code></pre>
        <hr />

        <h3 id="PrevButton" className="mb2 h4">
          <a href="#PrevButton" className="black bg-yellow rounded">
            <code>{'<PrevButton />'}</code>
          </a>
        </h3>
        <div className="mb2">Return to the previous track in a playlist.</div>
        <PrevButton className="button btn-big button-outline button-grow orange rounded mb2" />
        <pre><code className="javascript">{`<PrevButton
  className={String}
  onPrevClick={Function}
  soundCloudAudio={instanceof SoundCloudAudio} />
`}</code></pre>
        <hr />
        <div className="mt2">
          <strong><i>Important note:</i></strong> All buttons accept <code className="black bg-darken-1 rounded">soundCloudAudio</code> prop which
          when passed will add actions to buttons automagically (e.g. play or pause, go to prev or next track), {' callback function used in '}<code className="black bg-darken-1 rounded">onTogglePlay</code>, <code className="black bg-darken-1 rounded">onNextClick</code> and <code className="black bg-darken-1 rounded">onPrevClick</code> will still be called after.
        </div>
        <hr />

        <h3 id="VolumeControl" className="mb2 h4">
          <a href="#VolumeControl" className="black bg-yellow rounded">
            <code>{'<VolumeControl />'}</code>
          </a>
        </h3>
        <div className="mb2">Adjust volume or mute sound output.</div>
        <VolumeControl
          volume={this.state.volume}
          isMuted={this.state.isMuted}
          onVolumeChange={this.handleVolumeChange.bind(this)}
          onToggleMute={this.handleMuteToggle.bind(this)}
          className='mb2 flex flex-center'
          buttonClassName="flex-none button btn-big button-outline button-grow orange rounded"
        />
        <pre><code className="javascript">{`<VolumeControl
  className={String}
  buttonClassName={String}
  rangeClassName={String}
  volume={Number} // in range 0-1
  onVolumeChange={Function}
  onToggleMute={Function}
  soundCloudAudio={instanceof SoundCloudAudio} />
`}</code></pre>
        <hr />

        <h3 id="Progress" className="mb2 h4">
          <a href="#Progress" className="black bg-yellow rounded">
            <code>{'<Progress />'}</code>
          </a>
        </h3>
        <div className="mb2">
          Component that replaces native <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress" target="_blank"><code>{'<progress>'}</code> DOM element</a>.
          If <code className="black bg-darken-1 rounded">soundCloudAudio</code> prop is passed it automagically updates track audio time due to clicked progress position.
        </div>
        <Progress
          className="mb2"
          value={progressVal}
          onSeekTrack={this.seekTrack.bind(this)}
        />
        <pre><code className="javascript">{`<Progress
  className={String}
  innerClassName={String}
  value={Number} // in range 0-100
  onSeekTrack={Function}
  soundCloudAudio={instanceof SoundCloudAudio} />
`}</code></pre>
        <hr />

        <h3 id="Timer" className="mb2 h4">
          <a href="#Timer" className="black bg-yellow rounded">
            <code>{'<Timer />'}</code>
          </a>
        </h3>
        <div className="mb2">
          {'Shows current time of the track and its\' duration in'} <code className="black bg-darken-1 rounded">(hh:)mm:ss/(hh:)mm:ss</code> format.
        </div>
        <Timer
          className="mb2"
          duration={duration}
          currentTime={currentTime}
        />
        <pre><code className="javascript">{`<Timer
  className={String}
  duration={Number} // in seconds
  currentTime={Number} /> // in seconds
`}</code></pre>
        <hr />

        <h3 id="Cover" className="mb2 h4">
          <a href="#Cover" className="black bg-yellow rounded">
            <code>{'<Cover />'}</code>
          </a>
        </h3>
        <div className="mb2">Nice looking cover box inspired by original SoundCloud players.</div>
        <Cover
          className="mb2"
          trackName={data.track}
          artistName={data.artist}
          backgroundUrl={data.image}
        />
        <pre><code className="javascript">{`<Cover
  className={String}
  trackName={String}
  artistName={String}
  backgroundUrl={String} />
`}</code></pre>
      </div>
    );
  }
}

const CustomPlayer = withSoundCloudAudio(props => {
  const { soundCloudAudio, playing, track } = props;
  const play = () => {
    if (playing) {
      soundCloudAudio.pause();
    } else {
      soundCloudAudio.play();
    }
  };

  if (!track) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt3 mb3 border p2 rounded b2">
      <h2 className="m0">{track.title}</h2>
      <h3 className="mt0">by {track.user.username}</h3>
      <button
        className="button button-small bg-teal white rounded"
        onClick={() => play()}>
        {playing ? 'Pause' : 'Play'}
      </button>
    </div>
  );
});


class ContainerComponents extends React.Component {
  render() {
    const { onStartTrack } = this.props;

    return (
      <div>
        <h2 id="Containers" className="mt4 caps">
          <a href="#Containers" className="black">Higher-order Components</a>
        </h2>
        <hr className="mt1 mb1 b2 border-orange" />

        <div className="mt3">
          In the core of <strong>ReactSoundPlayer</strong> there are addon functions that incapsulate
          interaction with browser's Audio object and passes all necessary state data as properties inside children.
          In order to know more and understand this pattern you can check <a href="https://reactjs.org/docs/higher-order-components.html" target="_blank">article in React.js docs</a>.
        </div>
        <h3 id="withSoundCloudAudio" className="mb2 mt3 h4">
          <a href="#withSoundCloudAudio" className="black bg-yellow rounded">
            <code>{'withSoundCloudAudio(WrappedComponent)'}</code>
          </a>
        </h3>
        <div className="mt1 mb2">
          In order to use it just choose what kind of data you are consuming (via <code className="black bg-darken-1 rounded">resolveUrl</code> or <code className="black bg-darken-1 rounded">streamUrl</code>).
        </div>
        <pre><code className="javascript">{`// Player component will get props full of useful data!
const EnhancedPlayer = withSoundCloudAudio(Player)

<EnhancedPlayer
  clientId={String}
  resolveUrl={String}
  streamUrl={String}
  onStartTrack={Function}
  onStopTrack={Function}
  onReady={Function} />
`}</code></pre>
        <div className="mb2">With this information in mind it is really easy to create your own custom players like on example below:</div>
        <CustomPlayer
          clientId={clientId}
          resolveUrl={haghorrorDerNeueKult}
          onReady={() => {
            console.log('player url ready!');
          }}
          onStartTrack={onStartTrack} />
        <div className="mt2">
          <pre><code className="javascript">{`import React from 'react';
import { withSoundCloudAudio } from 'react-soundplayer/addons';

const clientId = 'YOUR CLIENT ID';
const resolveUrl = 'https://soundcloud.com/ksmtk/chronemics';

// you can even use functional components!
const CustomPlayer = withSoundCloudAudio(props => {
  const { soundCloudAudio, playing, track } = props;
  const play = () => {
    if (playing) {
      soundCloudAudio.pause();
    } else {
      soundCloudAudio.play();
    }
  };

  if (!track) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{track.title}</h2>
      <h3>{track.user.username}</h3>
      <button onClick={() => play()}>
        {playing ? 'Pause' : 'Play'}
      </button>
    </div>
  );
});

class App extends React.Component {
  render() {
    return (
      <CustomPlayer
        resolveUrl={resolveUrl}
        clientId={clientId}
        onReady={() => {
          console.log('player url ready!');
        }} />
    );
  }
}

React.render(<App />, document.getElementById('app'));`}</code></pre>
        </div>
      </div>
    );
  }
}

class BuiltInPlayers extends React.Component {
  render() {
    return (
      <div>
        <h2 id="ExamplePlayers" className="caps mt4">
          <a href="#ExamplePlayers" className="black">Example Players</a>
        </h2>
        <hr className="mt1 mb1 b2 border-orange" />
        <div className="mt3">
          Example players on this page are built using <a href="http://labs.voronianski.com/react-soundplayer#PureComponents">pure components</a> and <a href="http://labs.voronianski.com/react-soundplayer#withSoundCloudAudio">withSoundCloudAudio</a> addon.
          What makes them extremely pretty is a low-level modular CSS toolkit named <a href="http://www.basscss.com"><strong>BASSCSS</strong></a>. {'It\'s easy to create your own!'}
        </div>

        <h3 className="mb1 mt3 h5">
          <a href="https://github.com/kosmetism/react-soundplayer/blob/master/examples/players/BasicSoundPlayer.js" className="black">
            BasicSoundPlayer.js
          </a>
        </h3>
        <BasicSoundPlayer
          clientId={clientId}
          resolveUrl={ksmtkChronemics}
          {...this.props} />

        <h3 className="mb1 mt3 h5">
          <a href="https://github.com/kosmetism/react-soundplayer/blob/master/examples/players/ProgressSoundPlayer.js" className="black">
            ProgressSoundPlayer.js
          </a>
        </h3>
        <ProgressSoundPlayer
          clientId={clientId}
          resolveUrl={ksmtkNightcall}
          {...this.props} />

        <h3 className="mb1 mt3 h5">
          <a href="https://github.com/kosmetism/react-soundplayer/blob/master/examples/players/PlaylistSoundPlayer.js" className="black">
            PlaylistSoundPlayer.js
          </a>
        </h3>
        <PlaylistSoundPlayer
          clientId={clientId}
          resolveUrl={haghorrorSet}
          {...this.props} />

        <h3 className="mb1 mt3 h5">
          <a href="https://github.com/kosmetism/react-soundplayer/blob/master/examples/players/BackgroundSoundPlayer.js" className="black">
            BackgroundSoundPlayer.js
          </a>
        </h3>
        <BackgroundSoundPlayer
          clientId={clientId}
          resolveUrl={glassCandy}
          {...this.props} />
      </div>
    );
  }
}

class CustomAudioExample extends React.Component {
  render() {
    return (
      <div>
        <h2 id="CustomAudioExample" className="caps mt4">
          <a href="#CustomAudioExample" className="black">Custom Audio Example</a>
        </h2>
        <hr className="mt1 mb1 b2 border-orange" />
        <div className="mt3">
          It is also easy to built players <strong>without</strong> using SoundCloud API. You just need to pass audio source via <code className="black bg-darken-1 rounded">streamUrl</code> and
          all other necessary track meta information can be passed as custom props.
        </div>
        <h3 className="mb1 mt3 h5">
          <a href="https://github.com/kosmetism/react-soundplayer/blob/master/examples/players/AWSSoundPlayer.js" className="black">
            AWSSoundPlayer.js
          </a>
        </h3>
        <div className="mt2">
          <pre><code className="javascript">{`import React from 'react';
import { PlayButton, Timer } from 'react-soundplayer/components';

// it's just an alias for 'withSoundCloudAudio' but makes code clearer
import { withCustomAudio } from 'react-soundplayer/addons';

// audio source
const streamUrl = 'https://example.org/path/to/file.mp3';

// some track meta information
const trackTitle = 'Great song by random artist';

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
        preloadType="metadata" />
    );
  }
}

React.render(<App />, document.getElementById('app'));`}</code></pre>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  componentDidMount() {
    hljs.initHighlighting();
  }

  render() {
    return (
      <div>
        <header className="center px3 py4 white mb4">
          <img src="./assets/soundcloud.png" width="90" className="mt2" />
          <h1 className="h1 caps mt2 mb0">React Sound Player</h1>
          <p className="h3 mt1 mb2">Create custom SoundCloud (or any audio) players with React.js</p>
          <a href="https://github.com/kosmetism/react-soundplayer" className="h4 button button-outline btn-big mb3 mt2 mr2 b2">View on Github</a>
          <a href="#ExamplePlayers" className="h4 button bg-orange btn-big mb3 mt2 b2 white rounded">Check Examples</a>
        </header>
        <div className="container">
          {/* getting started */}
          <h2 id="GettingStarted" className="caps mt4">
            <a href="#GettingStarted" className="black">Getting Started</a>
          </h2>
          <hr className="mt1 mb1 b2 border-orange" />
          <pre className="mt3 mb2"><code className="bash">{'npm install react-soundplayer --save'}</code></pre>
          <div className="mb2">
            ReactSoundPlayer is bundled with <a href="#PureComponents">components</a> and <a href="#Containers">addons</a> inside, both should be required separately.
          </div>
          <pre><code className="javascript">{`// all examples use ES6 syntax
import { PlayButton, Progress, Icons } from 'react-soundplayer/components';
import { withSoundCloudAudio } from 'react-soundplayer/addons';

const { SoundCloudLogoSVG } = Icons;

// ...`}</code></pre>
          <div className="mt2 mb2">
            Module depends on <a href="https://facebook.github.io/react/"><strong>React.js</strong></a> and <a href="https://github.com/voronianski/soundcloud-audio.js"><strong>SoundCloudAudio.js</strong></a> for managing HTML5 Audio.
          </div>

          {/* independent components */}
          <PureComponents />

          {/* container component */}
          <ContainerComponents />

          {/* players */}
          <BuiltInPlayers />

          {/* non-soundcloud audio source */}
          <CustomAudioExample />

          {/* icons */}
          <h2 id="IconComponents" className="caps mt4">
            <a href="#IconComponents" className="black">Icon Components</a>
          </h2>
          <hr className="mt1 mb1 b2 border-orange" />
          <div className="mt3 mb2">
            Icons for buttons and SoundCloud logo can be used on their own as well. All of them are pure <a href="http://caniuse.com/#search=svg"><strong>SVG</strong></a> right now.
          </div>
          <pre><code className="javascript">{`import { Icons } from 'react-soundplayer/components';

// the list of available icons
const {
  SoundCloudLogoSVG,
  PlayIconSVG,
  PauseIconSVG,
  NextIconSVG,
  PrevIconSVG
} = Icons;
`}</code></pre>

          {/* troubleshooting */}
          <h2 id="Troubleshooting" className="caps mt4">
            <a href="#Troubleshooting" className="black">Troubleshooting</a>
          </h2>
          <hr className="mt1 mb1 b2 border-orange" />
          <div className="mt3">
            Please keep in mind that SoundCloud provides an option for users to prevent streaming to third-party apps.
            {'If your sound isn\'t playing check the '}<a href="https://developers.soundcloud.com/docs/api/reference#tracks">track</a> <code className="black bg-darken-1 rounded">streamable</code> property.
            If it is set to <code className="black bg-darken-1 rounded">false</code>, there is no way to play that sound with the API.
          </div>

          {/* who's using */}
          <h2 id="WhosUsing" className="caps mt4">
            <a href="#WhosUsing" className="black">Who's Using?</a>
          </h2>
          <hr className="mt1 mb1 b2 border-orange" />
          <div className="mt3">
            <div className="clearfix mxn2">
              {users.map(user => {
                return (
                  <div key={user.title} className="col col-6 sm-col-4 md-col-3 lg-col-2 px2 mb1">
                    <a href={user.url} className="block black" target="_blank">
                      <img className="block" src={user.logo} />
                      <div className="mt1">{user.title}</div>
                    </a>
                  </div>
                );
              })}
              <div className="col col-6 sm-col-4 md-col-3 lg-col-2 px2 mb1" />
              <div className="col col-6 sm-col-4 md-col-3 lg-col-2 px2 mb1">
                <a href="https://github.com/kosmetism/react-soundplayer/issues/58" className="block black" target="_blank">
                  <div className="mt1 bold right-align">+ Add your<br />website<br />here!</div>
                </a>
              </div>
            </div>
          </div>

          {/* resources */}
          <h2 id="UsefulResources" className="caps mt4">
            <a href="#UsefulResources" className="black">Useful Resources</a>
          </h2>
          <hr className="mt1 mb1 b2 border-orange" />
          <ul className="mt3 mb4">
            <li>simply the best CSS modular toolkit on the web - <a href="http://www.basscss.com"><strong>BASSCSS</strong></a></li>
            <li>easy management of HTML5 Audio API by <a href="https://github.com/voronianski/soundcloud-audio.js">SoundCloudAudio.js</a></li>
            <li>inspired by <a href="http://jxnblk.com/plangular">Plangular</a></li>
            <li>we all 💛 <a href="https://developers.soundcloud.com/docs/api/reference">SoundCloud API</a>!</li>
            <li>generate standalone "copy-paste" version with <a href="http://labs.voronianski.com/get-soundplayer">Soundplayer.js</a></li>
            <li>follow updates on <a href="https://twitter.com/voronianski">Twitter</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
