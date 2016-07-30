import React, { PropTypes, Component } from 'react';
import ClassNames from 'classnames';
import { SoundPlayerContainer } from '../../addons';
import { PlayButton, PrevButton, NextButton, Progress, Timer } from '../../components';

class Player extends Component {
    constructor() {
        super();

        this.state = {
            activeIndex: 0
        };
    }

    playTrackAtIndex(playlistIndex) {
        let { soundCloudAudio } = this.props;
        this.setState({activeIndex: playlistIndex});
        soundCloudAudio.play({ playlistIndex });
    }

    nextIndex() {
        let { activeIndex } = this.state;
        let { playlist } = this.props;
        if (activeIndex >= playlist.tracks.length - 1) {
            return;
        }
        if (activeIndex || activeIndex === 0) {
            this.setState({activeIndex: ++activeIndex});
        }
    }

    prevIndex() {
        let { activeIndex } = this.state;
        if (activeIndex <= 0) {
            return;
        }
        if (activeIndex || activeIndex === 0) {
            this.setState({activeIndex: --activeIndex});
        }
    }

    renderTrackList() {
        let { playlist } = this.props;

        if (!playlist) {
            return <div>Loading...</div>;
        }

        let tracks = playlist.tracks.map((track, i) => {
            let classNames = ClassNames('flex flex-center full-width left-align button button-transparent', {
                'is-active': this.state.activeIndex === i
            });

            return (
                <button
                    key={track.id}
                    className={classNames}
                    onClick={this.playTrackAtIndex.bind(this, i)}
                >
                    <span className="flex-auto semibold">{track.user.username} - {track.title}</span>
                    <span className="h6 regular">{Timer.prettyTime(track.duration / 1000)}</span>
                </button>
            );
        });

        return (
            <div>{tracks}</div>
        );
    }

    render() {
        let { playlist, currentTime, duration } = this.props;

        return (
            <div className="bg-darken-1 red mt1 mb3 rounded">
                <div className="p2">
                    <div className="flex flex-center">
                        <h2 className="h4 flex-auto nowrap m0 semibold">{playlist ? playlist.user.username : ''}</h2>
                        <Timer className="h6 mr1 regular" duration={duration || 0} currentTime={currentTime} />
                    </div>
                    <h2 className="h2 nowrap caps mt0 mb2 semibold">{playlist ? playlist.title : ''}</h2>

                    <div className="flex flex-center">
                        <PrevButton
                            className="flex-none h3 button button-narrow button-transparent button-grow rounded"
                            onPrevClick={this.prevIndex.bind(this)}
                            {...this.props}
                        />
                        <PlayButton
                            className="flex-none h2 button button-transparent button-grow rounded"
                            {...this.props}
                        />
                        <NextButton
                            className="flex-none h3 button mr2 button-narrow button-transparent button-grow rounded"
                            onNextClick={this.nextIndex.bind(this)}
                            {...this.props}
                        />
                        <Progress
                            className="mt1 mb1 rounded"
                            innerClassName="rounded-left"
                            value={currentTime / duration * 100 || 0}
                            {...this.props}
                        />
                    </div>
                </div>
                {this.renderTrackList()}
            </div>
        );
    }
}

class PlaylistSoundPlayer extends Component {
    render() {
        return (
            <SoundPlayerContainer {...this.props}>
                <Player />
            </SoundPlayerContainer>
        );
    }
}

PlaylistSoundPlayer.propTypes = {
    resolveUrl: PropTypes.string.isRequired,
    clientId: PropTypes.string.isRequired
};

export default PlaylistSoundPlayer;
