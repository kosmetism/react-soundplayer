import React from 'react';
import PlayButton from '../../lib/components/PlayButton';
import Progress from '../../lib/components/Progress';
import Timer from '../../lib/components/Timer';
import Cover from '../../lib/components/Cover';
import SoundPlayerComponent from '../../lib/SoundPlayerComponent';
import {
    SoundCloudLogoSVG,
    PlayButtonSVG,
    PrevButtonSVG,
    NextButtonSVG
} from '../../lib/components/Icons';

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

                <h3 id="PlayButton" className="mb2 h5">
                    <a href="#PlayButton" className="black bg-yellow rounded">
                        <code>{'<PlayButton className={String} playing={Bool} seeking={Bool} />'}</code>
                    </a>
                </h3>
                <PlayButton
                    className="button button-transparent button-grow"
                    playing={playing}
                    seeking={seeking}
                    seekingIcon={seekingIcon}
                    togglePlay={this.handleClick.bind(this)}
                />

                <h3 id="Progress" className="mb2 h5">
                    <a href="#Progress" className="black bg-yellow rounded">
                        <code>{'<Progress className={String} value={Number} seekTrack={Func} seekingIcon={ReactElement} />'}</code>
                    </a>
                </h3>
                <Progress
                    value={progressVal}
                    seekTrack={this.seekTrack.bind(this)}
                />

                <h3 id="Timer" className="mb2 h5">
                    <a href="#Timer" className="black bg-yellow rounded">
                        <code>{'<Timer className={String} duration={Number} currentTime={Number} />'}</code>
                    </a>
                </h3>
                <Timer
                    duration={duration}
                    currentTime={currentTime}
                />

                <h3 id="Cover" className="mb2 h5">
                    <a href="#Cover" className="black bg-yellow rounded">
                        <code>{'<Cover className={String} backgroundUrl={String} artist={String} track={String} />'}</code>
                    </a>
                </h3>
                <Cover
                    track={data.track}
                    artist={data.artist}
                    backgroundUrl={data.image}
                />

                {/* icons */}
                <h1 className="h1 h1-responsive caps mt3">Icons</h1>
                <hr className="mt1 mb1 b2 border-orange" />

                {/* players */}
                <h1 className="h1 h1-responsive caps mt3">Built-in Players</h1>
                <hr className="mt1 mb1 b2 border-orange" />

                {/* container component */}
                <h1 className="h1 h1-responsive caps mt3">Containers</h1>
                <hr className="mt1 mb1 b2 border-orange" />

                <div className="mt3">
                    In the heart of <strong>ReactSoundPlayer</strong> is container that incapsulates
                    interaction with browser's audio object and passes all necessary state data as properties inside children.
                </div>
                <h3 id="SoundPlayerComponent" className="mb2 h5">
                    <a href="#SoundPlayerComponent" className="black bg-yellow rounded">
                        <code>{'<SoundPlayerComponent streamUrl={String} resolveUrl={String} clientId={String} soundCloudAudio={SoundCloudAudio} />'}</code>
                    </a>
                </h3>
                <SoundPlayerComponent
                    clientId={clientId}
                    resolveUrl={resolveUrl}
                >
                    <CustomPlayer />
                </SoundPlayerComponent>
            </div>
        );
    }
}

React.render(<App />, document.body);
