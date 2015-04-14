import React from 'react';
import PlayButton from '../../lib/components/PlayButton';
import Progress from '../../lib/components/Progress';
import Timer from '../../lib/components/Timer';
import Cover from '../../lib/components/Cover';

const data = {
    image: 'https://d1v2xm8p2pd3wl.cloudfront.net/tracks/1a87a43ec633f01a917d23fc5e026bf9/640x400.jpg',
    artist: 'franiefroufrou',
    track: 'Exploding Whale by Sufjan Stevens'
};

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
            <div>
                <PlayButton
                    playing={playing}
                    seeking={seeking}
                    togglePlay={this.handleClick.bind(this)}
                    seekingIcon={
                        <img src="./preloader.gif" className="sb-soundplayer-play-icon" />
                    }
                />
                <Progress value={progressVal} seekTrack={this.seekTrack.bind(this)} />
                <Timer duration={duration} currentTime={currentTime} />
                <Cover backgroundUrl={data.image} artist={data.artist} track={data.track} />
            </div>
        );
    }
}

React.render(<App />, document.body);
