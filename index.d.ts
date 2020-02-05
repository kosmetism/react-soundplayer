import * as React from 'react';

export interface SoundCloud {
  audio: HTMLMediaElement;
  resolve: (url: string, callback: () => void) => void;
  on: (e: string, fn: () => void) => void;
  off: (e: string, fn: () => void) => void;
  unbindAll: () => void;
  preload: (streamUrl: string, preloadType: 'none' | 'metadata' | 'auto') => void;
  play: (options?: { streamUrl?: string; playlistIndex?: number }) => void;
  pause: () => void;
  stop: () => void;
  next: (options?: { loop?: boolean }) => void;
  seek: (e: Event) => void;
  cleanData: () => void;
  setVolume: (volumePercentage: number) => void; // percent 0-1
  setTime: (setTime: number) => void; // seconds
}

export interface CoverProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  backgroundUrl: string;
  trackName: string;
  artistName: string;
}

export interface NextButtonProps {
  className?: string;
  style?: React.CSSProperties;
  onNextClick?: (e: Event) => void;
}

export interface PlayButtonProps {
  className?: string;
  style?: React.CSSProperties;
  seeking?: boolean;
  playing?: boolean;
  onTogglePlay?: (e: Event) => void;
  seekingIcon?: React.ReactNode;
}

export interface PrevButtonProps {
  className?: string;
  style?: React.CSSProperties;
  onPrevClick?: (e: Event) => void;
}

export interface ProgressProps {
  className?: string;
  style?: React.CSSProperties;
  innerClassName?: string;
  innerStyle?: React.CSSProperties;
  value?: number; // percent 0-100
  onSeekTrack?: (e: Event) => void;
}

export interface TimerProps {
  className?: string;
  style?: React.CSSProperties;
  duration?: string | number; // seconds
  currentTime?: string | number; // seconds
}

export interface VolumeControlProps {
  className?: string;
  style?: React.CSSProperties;
  buttonClassName?: string;
  rangeClassName?: string;
  volume?: number; // percent 0-1
  isMuted?: boolean;
  onVolumeChange?: (e: Event) => void;
  onToggleMute?: (e: Event) => void;
}

declare module 'react-soundplayer/addons' {
  export interface WrappedComponentProps {
    currentTime: number; // seconds
    duration: number; // seconds
    isMuted: boolean;
    playing: boolean;
    preloadType?: 'none' | 'metadata' | 'auto';
    seeking: boolean;
    loading?: boolean;
    soundCloudAudio: SoundCloud;
    streamUrl: string;
    volume: number; // percent 0-1
  }

  export interface WithAudioComponentProps {
    clientId?: string;
    resolveUrl?: string;
    streamUrl: WrappedComponentProps['streamUrl'];
    preloadType?: WrappedComponentProps['preloadType'];
    duration?: WrappedComponentProps['duration']; // seconds
    soundCloudAudio?: WrappedComponentProps['soundCloudAudio'];
    loading?: WrappedComponentProps['loading'];
    onReady?: () => void;
    onStartTrack?: () => void;
    onStopTrack?: () => void;
    onPauseTrack?: () => void;
  }

  export function withSoundCloudAudio(
    WrappedComponent: (props: WrappedComponentProps) => JSX.Element
  ): React.ComponentType<WithAudioComponentProps>;

  export function withCustomAudio(
    WrappedComponent: (props: WrappedComponentProps) => JSX.Element
  ): React.ComponentType<WithAudioComponentProps>;
}

declare module 'react-soundplayer/components' {
  export class Cover extends React.Component<CoverProps> {}

  export interface IconProps {
    children?: React.ReactNode;
  }

  export const Icons: {
    ButtonIconSVG: React.StatelessComponent<IconProps>;
    NextIconSVG: React.StatelessComponent;
    PauseIconSVG: React.StatelessComponent;
    PlayIconSVG: React.StatelessComponent;
    PrevIconSVG: React.StatelessComponent;
    SoundCloudLogoSVG: React.StatelessComponent;
    VolumeIconLoudSVG: React.StatelessComponent;
    VolumeIconMuteSVG: React.StatelessComponent;
    VolumeIconSVG: React.StatelessComponent<IconProps>;
  };

  export class NextButton extends React.Component<NextButtonProps> {}

  export class PlayButton extends React.Component<PlayButtonProps> {
    public static defaultProps: {
      playing: false;
      seeking: false;
    };
  }

  export class PrevButton extends React.Component<PrevButtonProps> {}

  export class Progress extends React.Component<ProgressProps> {
    public static defaultProps: {
      value: 0; // percent 0-100
    };
  }

  export class Timer extends React.Component<TimerProps> {
    public static defaultProps: {
      duration: 0; // seconds
      currentTime: 0; // seconds
    };
    public static prettyTime(time: number): string;
  }

  export class VolumeControl extends React.Component<VolumeControlProps> {
    public static defaultProps: {
      volume: 1; // percent 0-1
      isMuted: false;
    };
  }
}
