import React from 'react';
import PlayButton from '../../lib/components/PlayButton';
import Progress from '../../lib/components/Progress';

const seekIconUrl = 'http://icons.iconarchive.com/icons/iconsmind/outline/256/Eci-Icon-icon.png';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            seeking: false,
            playing: false,
            currentTime: 0,
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

    seekTrack(xPos, e) {
        this.setState({currentTime: xPos});
    }

    render() {
        let { playing, seeking, currentTime } = this.state;
        return (
            <div>
                <PlayButton
                    playing={playing}
                    seeking={seeking}
                    togglePlay={this.handleClick.bind(this)}
                    seekingIcon={
                        <img src={seekIconUrl} className="sb-soundplayer-play-icon" />
                    }
                />
                <Progress value={currentTime} seekTrack={this.seekTrack.bind(this)} />
            </div>
        );
    }
}

React.render(<App />, document.body);
