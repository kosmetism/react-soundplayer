import React from 'react';
import hljs from 'highlight.js';
import {
    PlayButton,
    NextButton,
    PrevButton,
    Progress,
    Timer,
    Cover
} from '../../components';
import { SoundPlayerComponent } from '../../addons';

const clientId = '08f79801a998c381762ec5b15e4914d5';
const resolveUrl = 'https://soundcloud.com/stepan-i-meduza-official/dolgo-obyasnyat';
const data = {
    image: 'https://d1v2xm8p2pd3wl.cloudfront.net/tracks/1a87a43ec633f01a917d23fc5e026bf9/640x400.jpg',
    artist: 'franiefroufrou',
    track: 'Exploding Whale by Sufjan Stevens'
};
const seekingIcon = (
    <img src="../assets/preloader.svg" className="sb-soundplayer-play-icon" />
);

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
                <h3 className="mt0">{track.user.username}</h3>
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

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            seeking: false,
            playing: false,
            currentTime: 0,
            progressVal: 0,
            duration: 300
        };
    }

    componentDidMount() {
        hljs.initHighlighting();
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

    seekTrack(xPos, xPosRound, e) {
        this.setState({
            currentTime: Math.round(xPos * this.state.duration),
            progressVal: Math.round(xPos * 100)
        });
    }

    render() {
        let { playing, seeking, duration, currentTime, progressVal } = this.state;

        return (
            <div className="container">
                {/* independent components */}
                <h1 className="h1 h1-responsive caps mt3">Pure Components</h1>
                <hr className="mt1 mb1 b2 border-orange" />

                <div className="mt3">
                    <strong>ReactSoundPlayer</strong> is bundled with several player related pure components inside.
                    All of them can be styled and customized as you wish, allowing you to create a player of your dream easily.
                    Each of the components accept className prop as regular DOM elements which makes it simple to apply different styles.
                </div>

                <h3 id="PlayButton" className="mb2 h4">
                    <a href="#PlayButton" className="black bg-yellow rounded">
                        <code>{'<PlayButton className={String} playing={Bool} seeking={Bool} seekingIcon={ReactElement} />'}</code>
                    </a>
                </h3>
                <PlayButton
                    className="button button-transparent button-grow"
                    playing={playing}
                    seeking={seeking}
                    seekingIcon={seekingIcon}
                    onTogglePlay={this.handleClick.bind(this)}
                />

                <h3 id="NextButton" className="mb2 h4">
                    <a href="#NextButton" className="black bg-yellow rounded">
                        <code>{'<NextButton className={String} />'}</code>
                    </a>
                </h3>
                <NextButton className="button button-transparent button-grow" />

                <h3 id="PrevButton" className="mb2 h4">
                    <a href="#PrevButton" className="black bg-yellow rounded">
                        <code>{'<PrevButton className={String} />'}</code>
                    </a>
                </h3>
                <PrevButton className="button button-transparent button-grow" />

                <h3 id="Progress" className="mb2 h4">
                    <a href="#Progress" className="black bg-yellow rounded">
                        <code>{'<Progress className={String} value={Number} seekTrack={Func} />'}</code>
                    </a>
                </h3>
                <Progress
                    value={progressVal}
                    seekTrack={this.seekTrack.bind(this)}
                />

                <h3 id="Timer" className="mb2 h4">
                    <a href="#Timer" className="black bg-yellow rounded">
                        <code>{'<Timer className={String} duration={Number} currentTime={Number} />'}</code>
                    </a>
                </h3>
                <Timer
                    duration={duration}
                    currentTime={currentTime}
                />

                <h3 id="Cover" className="mb2 h4">
                    <a href="#Cover" className="black bg-yellow rounded">
                        <code>{'<Cover className={String} backgroundUrl={String} artist={String} track={String} />'}</code>
                    </a>
                </h3>
                <Cover
                    trackName={data.track}
                    artistName={data.artist}
                    backgroundUrl={data.image}
                />

                {/* players */}
                <h1 className="h1 h1-responsive caps mt3">Built-in Players</h1>
                <hr className="mt1 mb1 b2 border-orange" />

                {/* container component */}
                <h1 className="h1 h1-responsive caps mt3">Container</h1>
                <hr className="mt1 mb1 b2 border-orange" />

                <div className="mt3">
                    In the heart of <strong>ReactSoundPlayer</strong> is container that incapsulates
                    interaction with browser's Audio object and passes all necessary state data as properties inside children.
                </div>
                <h3 id="SoundPlayerComponent" className="mb2 h4">
                    <a href="#SoundPlayerComponent" className="black bg-yellow rounded">
                        <code>{'<SoundPlayerComponent streamUrl={String} resolveUrl={String} clientId={String} soundCloudAudio={SoundCloudAudio} />'}</code>
                    </a>
                </h3>
                <div className="mt1">
                    <p>In order to use it just choose:</p>
                    <ul>
                        <li>what kind of data you're consuming (via <code className="black bg-darken-1 rounded">resolveUrl</code> or <code className="black bg-darken-1 rounded">streamUrl</code>)</li>
                        <li>will Audio element be global or created automagically per each player (via <code className="black bg-darken-1 rounded">clientId</code> or <a href="https://github.com/voronianski/soundcloud-audio.js/tree/master" target="_blank"><strong>SoundCloudAudio</strong></a>
                    &nbsp;instance passed).</li>
                    </ul>
                    <p>With this information in mind it's really easy to create your own custom players like on example below:</p>
                </div>
                <SoundPlayerComponent
                    clientId={clientId}
                    resolveUrl={resolveUrl}
                >
                    <CustomPlayer />
                </SoundPlayerComponent>
                <div className="mt2">
                    <pre><code className="javascript">{`import React from 'react';
import { SoundPlayerComponent } from 'react-soundplayer/addons';

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
            <SoundPlayerComponent resolveUrl={streamUrl} clientId={client}>
                <CustomPlayer />
            </SoundPlayerComponent>
        );
    }
}

React.render(<App />, document.body);`}</code></pre>
                </div>

                {/* icons */}
                <h1 className="h1 h1-responsive caps mt3">Icon Components</h1>
                <hr className="mt1 mb1 b2 border-orange" />

                {/* resources */}
                <h1 className="h1 h1-responsive caps mt3">Useful Resources</h1>
                <hr className="mt1 mb1 b2 border-orange" />
            </div>
        );
    }
}

React.render(<App />, document.getElementById('app'));
