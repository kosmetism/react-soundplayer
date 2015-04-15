import React from 'react';
import PlayButton from '../../lib/components/PlayButton';
import Progress from '../../lib/components/Progress';
import Timer from '../../lib/components/Timer';
import Cover from '../../lib/components/Cover';
import SoundPlayerComponent from '../../lib/SoundPlayerComponent';

const clientId = '08f79801a998c381762ec5b15e4914d5';
const resolveUrl = 'https://soundcloud.com/stepan-i-meduza-official/dolgo-obyasnyat';
const data = {
    image: 'https://d1v2xm8p2pd3wl.cloudfront.net/tracks/1a87a43ec633f01a917d23fc5e026bf9/640x400.jpg',
    artist: 'franiefroufrou',
    track: 'Exploding Whale by Sufjan Stevens'
};
const seekingIcon = (
    <img src="./preloader.gif" className="sb-soundplayer-play-icon" />
);

class CustomPlayer extends React.Component {
    play() {
        let { soundCloudAudio } = this.props;
        soundCloudAudio.play();
    }

    render() {
        let { track } = this.props;

        if (!track) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <h2>{track.title}</h2>
                <h3>{track.user.username}</h3>
                <PlayButton {...this.props} togglePlay={this.play.bind(this)} />
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
            <div className="example-container">
                {/* independent components */}
                <div className="example-text">
                    <strong>ReactSoundPlayer</strong> is bundled with several player related pure components inside.
                    All of them can be styled and customized as you wish, allowing you to create a player of your dream easily.
                </div>

                <h3><code>{'<PlayButton />'}</code></h3>
                <PlayButton
                    playing={playing}
                    seeking={seeking}
                    seekingIcon={seekingIcon}
                    togglePlay={this.handleClick.bind(this)}
                />

                <h3><code>{'<Progress />'}</code></h3>
                <Progress
                    value={progressVal}
                    seekTrack={this.seekTrack.bind(this)}
                />

                <h3><code>{'<Timer />'}</code></h3>
                <Timer
                    duration={duration}
                    currentTime={currentTime}
                />

                <h3><code>{'<Cover />'}</code></h3>
                <Cover
                    track={data.track}
                    artist={data.artist}
                    backgroundUrl={data.image}
                />

                <hr />

                {/* container component */}
                <div className="example-text">
                    In the heart of <strong>ReactSoundPlayer</strong> is container <code>{'<SoundPlayerComponent />'}</code> that drives creation of players.
                </div>
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
