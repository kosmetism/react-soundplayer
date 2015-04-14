import React from 'react';
import PlayButton from '../../lib/components/PlayButton';
import Progress from '../../lib/components/Progress';
import Timer from '../../lib/components/Timer';

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
            </div>
        );
    }
}

React.render(<App />, document.body);
