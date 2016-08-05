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
    Cover
} from '../components';

// ..and addons
import {
    SoundPlayerContainer
} from '../addons';

// example players
import BasicSoundPlayer from './players/BasicSoundPlayer';
import ProgressSoundPlayer from './players/ProgressSoundPlayer';
import PlaylistSoundPlayer from './players/PlaylistSoundPlayer';
import BackgroundSoundPlayer from './players/BackgroundSoundPlayer';

// dummy data
const stepanIMeduza = 'https://soundcloud.com/stepan-i-meduza-official/dolgo-obyasnyat';
const pedro = 'https://soundcloud.com/oscar-b-lewis/pedro-fm-theme';
const glassCandy = 'https://soundcloud.com/johnnyjewel/glass-candy-shell-game';
const sayLouLou = 'https://soundcloud.com/sayloulou/nothing-but-a-heartbeat';
const pcMusic = 'https://soundcloud.com/pcmus/sets/deep-trouble';
const data = {
    image: 'https://i1.sndcdn.com/artworks-000113169457-9bvvb7-t500x500.jpg',
    artist: 'franiefroufrou',
    track: 'Exploding Whale by Sufjan Stevens'
};

const clientId = '08f79801a998c381762ec5b15e4914d5';
const seekingIcon = (
    <img src="./assets/preloader.svg" className="sb-soundplayer-play-icon" />
);

class PureComponents extends React.Component {
    constructor() {
        super();

        this.state = {
            seeking: false,
            playing: false,
            currentTime: 24,
            progressVal: 8,
            duration: 300
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
                <h2 id="PureComponents" className="caps mt3">
                    <a href="#PureComponents" className="black">Pure Components</a>
                </h2>
                <hr className="mt1 mb1 b2 border-orange" />

                <div className="mt3 mb3">
                    Each component accepts <code className="black bg-darken-1 rounded">className</code> prop as regular DOM elements which makes it simple to use different styles with them.
                    Here is the list of all available so-called "dumb" components that accept data and callbacks with self-descriptive props:
                </div>

                <h3 id="PlayButton" className="mb2 h4">
                    <a href="#PlayButton" className="black bg-yellow rounded">
                        <code>{'<PlayButton />'}</code>
                    </a>
                </h3>
                <div className="mb2">Play or pause track.</div>
                <PlayButton
                    className="button button-big button-outline button-grow orange rounded mb2"
                    playing={playing}
                    seeking={seeking}
                    seekingIcon={seekingIcon}
                    onTogglePlay={this.handleClick.bind(this)}
                />
                <pre><code className="html">{`<PlayButton
    className={String}
    playing={Boolean}
    seeking={Boolean}
    seekingIcon={ReactElement}
    onTogglePlay={Function}
    soundCloudAudio={instanceof SoundCloudAudio}
/>
`}</code></pre>
                <hr />

                <h3 id="NextButton" className="mb2 h4">
                    <a href="#NextButton" className="black bg-yellow rounded">
                        <code>{'<NextButton />'}</code>
                    </a>
                </h3>
                <div className="mb2">Switch to the next track in a playlist.</div>
                <NextButton className="button button-big button-outline button-grow orange rounded mb2" />
                <pre><code className="html">{`<NextButton
    className={String}
    onNextClick={Function}
    soundCloudAudio={instanceof SoundCloudAudio}
/>
`}</code></pre>
                <hr />

                <h3 id="PrevButton" className="mb2 h4">
                    <a href="#PrevButton" className="black bg-yellow rounded">
                        <code>{'<PrevButton />'}</code>
                    </a>
                </h3>
                <div className="mb2">Return to the previous track in a playlist.</div>
                <PrevButton className="button button-big button-outline button-grow orange rounded mb2" />
                <pre><code className="html">{`<PrevButton
    className={String}
    onPrevClick={Function}
    soundCloudAudio={instanceof SoundCloudAudio}
/>
`}</code></pre>
                <hr />
                <div className="mt2">
                    <strong><i>Important note:</i></strong> All buttons accept <code className="black bg-darken-1 rounded">soundCloudAudio</code> prop which
                    when passed will add actions to buttons automagically (e.g. play or pause, go to prev or next track),
                    {' callback function used in '}<code className="black bg-darken-1 rounded">onTogglePlay</code>,
                     <code className="black bg-darken-1 rounded">onNextClick</code> and
                     <code className="black bg-darken-1 rounded">onPrevClick</code> will still be called after.
                </div>
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
                <pre><code className="html">{`<Progress
    className={String}
    innerClassName={String}
    value={Number}
    onSeekTrack={Function}
    soundCloudAudio={instanceof SoundCloudAudio}
/>
`}</code></pre>
                <hr />

                <h3 id="Timer" className="mb2 h4">
                    <a href="#Timer" className="black bg-yellow rounded">
                        <code>{'<Timer />'}</code>
                    </a>
                </h3>
                <div className="mb2">
                    {`Shows current time of the track and its' duration in`} <code className="black bg-darken-1 rounded">(hh:)mm:ss/(hh:)mm:ss</code> format.
                </div>
                <Timer
                    className="mb2"
                    duration={duration}
                    currentTime={currentTime}
                />
                <pre><code className="html">{`<Timer
    className={String}
    duration={Number}
    currentTime={Number}
/>
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
                <pre><code className="html">{`<Cover
    className={String}
    trackName={String}
    artistName={String}
    backgroundUrl={String}
/>
`}</code></pre>
            </div>
        );
    }
}

class CustomPlayer extends React.Component {
    play() {
        let { soundCloudAudio, playing } = this.props;
        if (playing) {
            soundCloudAudio.pause();
        } else {
            soundCloudAudio.play();
        }
    }

    render() {
        let { track, playing } = this.props;

        if (!track) {
            return <div>Loading...</div>;
        }

        return (
            <div className="mt3 mb3 border p2 rounded b2">
                <h2 className="m0">{track.title}</h2>
                <h3 className="mt0">by {track.user.username}</h3>
                <button
                    className="button button-small bg-teal"
                    onClick={this.play.bind(this)}
                >
                    {playing ? 'Pause' : 'Play'}
                </button>
            </div>
        );
    }
}

class ContainerComponents extends React.Component {
    render() {
        let { onStartTrack } = this.props;
        return (
            <div>
                <h2 id="Containers" className="mt3 caps">
                    <a href="#Containers" className="black">Higher-order Containers</a>
                </h2>
                <hr className="mt1 mb1 b2 border-orange" />

                <div className="mt3">
                    In the heart of <strong>ReactSoundPlayer</strong> there is a container that incapsulates
                    interaction with browser's Audio object and passes all necessary state data as properties inside children.
                </div>
                <h3 id="SoundPlayerContainer" className="mb2 mt3 h4">
                    <a href="#SoundPlayerContainer" className="black bg-yellow rounded">
                        <code>{'<SoundPlayerContainer />'}</code>
                    </a>
                </h3>
                <div className="mt1 mb2">
                    In order to use it just choose what kind of data you are consuming (via <code className="black bg-darken-1 rounded">resolveUrl</code> or <code className="black bg-darken-1 rounded">streamUrl</code>).
                </div>
                <pre><code className="javascript">{`render() {
    return (
        <SoundPlayerContainer
            clientId={String}
            resolveUrl={String}
            streamUrl={String}
            onStartTrack={Function}
            onStopTrack={Function}
        >
        {/*Children get props full of useful data!*/}
        </SoundPlayerContainer>
    );
}`}</code></pre>
                <div className="mb2">With this information in mind it is really easy to create your own custom players like on example below:</div>
                <SoundPlayerContainer
                    clientId={clientId}
                    resolveUrl={stepanIMeduza}
                    onStartTrack={onStartTrack}
                >
                    <CustomPlayer />
                </SoundPlayerContainer>
                <div className="mt2">
                    <pre><code className="javascript">{`import React from 'react';
import { SoundPlayerContainer } from 'react-soundplayer/addons';

const clientId = 'YOUR CLIENT ID';
const resolveUrl = 'https://soundcloud.com/stepan-i-meduza-official/dolgo-obyasnyat';

class CustomPlayer extends React.Component {
    play() {
        let { soundCloudAudio, playing } = this.props;
        if (playing) {
            soundCloudAudio.pause();
        } else {
            soundCloudAudio.play();
        }
    }

    render() {
        let { track, playing } = this.props;

        if (!track) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <h2>{track.title}</h2>
                <h3>{track.user.username}</h3>
                <button onClick={this.play.bind(this)}>
                    {playing ? 'Pause' : 'Play'}
                </button>
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <SoundPlayerContainer resolveUrl={streamUrl} clientId={clientId}>
                <CustomPlayer />
            </SoundPlayerContainer>
        );
    }
}

React.render(<App />, document.body);`}</code></pre>
                </div>
            </div>
        );
    }
}

class BuiltInPlayers extends React.Component {
    render() {
        return (
            <div>
                <h2 id="ExamplePlayers" className="caps mt3">
                    <a href="#ExamplePlayers" className="black">Example Players</a>
                </h2>
                <hr className="mt1 mb1 b2 border-orange" />
                <div className="mt3">
                    These beautiful players are built using <a href="http://labs.voronianski.com/react-soundplayer#PureComponents">pure components</a> and <a href="http://labs.voronianski.com/react-soundplayer#SoundPlayerContainer">SoundPlayerContainer</a>.
                    What makes them extremely pretty is a low-level modular CSS toolkit named <a href="http://www.basscss.com"><strong>BASSCSS</strong></a>. {`It's easy to create your own!`}
                </div>
                <BasicSoundPlayer
                    clientId={clientId}
                    resolveUrl={pedro}
                    {...this.props}
                />
                <ProgressSoundPlayer
                    clientId={clientId}
                    resolveUrl={sayLouLou}
                    {...this.props}
                />
                <PlaylistSoundPlayer
                    clientId={clientId}
                    resolveUrl={pcMusic}
                    {...this.props}
                />
                <BackgroundSoundPlayer
                    clientId={clientId}
                    resolveUrl={glassCandy}
                    {...this.props}
                />
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
                    <p className="h3 mt1 mb2">Create custom SoundCloud players with React.js</p>
                    <a href="https://github.com/soundblogs/react-soundplayer" className="h4 button button-outline button-big mb3 mt2 mr2 b2">View on Github</a>
                    <a href="#ExamplePlayers" className="h4 button bg-orange button-big mb3 mt2 b2">Check Examples</a>
                </header>
                <div className="container">
                    {/* getting started */}
                    <h2 id="GettingStarted" className="caps mt3">
                        <a href="#GettingStarted" className="black">Getting Started</a>
                    </h2>
                    <hr className="mt1 mb1 b2 border-orange" />
                    <pre className="mt3 mb2"><code className="bash">{`npm install react-soundplayer --save`}</code></pre>
                    <div className="mb2">
                        ReactSoundPlayer is bundled with <a href="#PureComponents">components</a> and <a href="#Containers">addons</a> inside, both should be required separately.
                    </div>
                    <pre><code className="javascript">{`// all examples use ES6 syntax
import { PlayButton, Progress, Icons } from 'react-soundplayer/components';
import { SoundPlayerContainer } from 'react-soundplayer/addons';

const { SoundCloudLogoSVG } = Icons;

// ...`}</code></pre>
                    <div className="mt2 mb2">
                        Module depends on <a href="https://facebook.github.io/react/"><strong>React.js</strong></a> 0.13.x (or higher) and <a href="https://github.com/voronianski/soundcloud-audio.js"><strong>SoundCloudAudio</strong></a> for managing HTML5 Audio.
                    </div>

                    {/* independent components */}
                    <PureComponents />

                    {/* container component */}
                    <ContainerComponents />

                    {/* players */}
                    <BuiltInPlayers />

                    {/* icons */}
                    <h2 id="IconComponents" className="caps mt3">
                        <a href="#IconComponents" className="black">Icon Components</a>
                    </h2>
                    <hr className="mt1 mb1 b2 border-orange" />
                    <div className="mt3 mb2">
                        Icons for buttons and SoundCloud logo can be used on their own as well. All of them are pure <a href="http://caniuse.com/#search=svg"><strong>SVG</strong></a> right now.
                    </div>
                    <pre><code className="javascript">{`import { Icons } from 'react-soundplayer/components';

// the list of available icons:
const {
SoundCloudLogoSVG,
PlayIconSVG,
PauseIconSVG,
NextIconSVG,
PrevIconSVG
} = Icons;
`}</code></pre>

                    {/* troubleshooting */}
                    <h2 id="Troubleshooting" className="caps mt3">
                        <a href="#Troubleshooting" className="black">Troubleshooting</a>
                    </h2>
                    <hr className="mt1 mb1 b2 border-orange" />
                    <div className="mt3">
                        Please keep in mind that SoundCloud provides an option for users to prevent streaming to third-party apps.
                        {`If your sound isn't playing check the `}<a href="https://developers.soundcloud.com/docs/api/reference#tracks">track</a> <code className="black bg-darken-1 rounded">streamable</code> property.
                        If it is set to <code className="black bg-darken-1 rounded">false</code>, there is no way to play that sound with the API.
                    </div>

                    {/* resources */}
                    <h2 id="UsefulResources" className="caps mt3">
                        <a href="#UsefulResources" className="black">Useful Resources</a>
                    </h2>
                    <hr className="mt1 mb1 b2 border-orange" />
                    <ul className="mt3 mb4">
                        <li>simply the best CSS modular toolkit on the web - <a href="http://www.basscss.com"><strong>BASSCSS</strong></a></li>
                        <li>easy management of HTML5 Audio API by <a href="https://github.com/voronianski/soundcloud-audio.js">SoundCloudAudio</a></li>
                        <li>inspired by <a href="http://jxnblk.com/plangular">Plangular</a></li>
                        <li>we all 💛 <a href="https://developers.soundcloud.com/docs/api/reference">SoundCloud API</a>!</li>
                        <li>follow updates on <a href="https://twitter.com/voronianski">Twitter</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
