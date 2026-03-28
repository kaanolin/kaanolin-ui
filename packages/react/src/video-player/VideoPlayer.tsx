import * as React from "react";
import type { VariantProps } from "class-variance-authority";
import { cx } from "@kaanolin/utils";
import {
  videoPlayerWrapperStyles,
  controlsBarStyles,
  controlButtonStyles,
  seekBarStyles,
  volumeSliderStyles,
  timeDisplayStyles,
  bufferingOverlayStyles,
} from "./VideoPlayer.styles";

/* ========== Helpers ========== */

function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

/* ========== Types ========== */

export interface VideoPlayerProps
  extends VariantProps<typeof videoPlayerWrapperStyles> {
  /** Video source URL. */
  src: string;
  /** Poster image URL. */
  poster?: string;
  /** Auto-play the video on mount. */
  autoPlay?: boolean;
  /** Loop the video. */
  loop?: boolean;
  /** Start muted. */
  muted?: boolean;
  /** Aspect ratio variant. */
  aspectRatio?: "16/9" | "4/3" | "1/1" | "21/9";
  /** Additional className for the wrapper. */
  className?: string;
  /** HTML id attribute. */
  id?: string;
  /** Called when playback starts. */
  onPlay?: (e: React.SyntheticEvent<HTMLVideoElement>) => void;
  /** Called when playback pauses. */
  onPause?: (e: React.SyntheticEvent<HTMLVideoElement>) => void;
  /** Called when video ends. */
  onEnded?: (e: React.SyntheticEvent<HTMLVideoElement>) => void;
  /** Called on time updates during playback. */
  onTimeUpdate?: (e: React.SyntheticEvent<HTMLVideoElement>) => void;
}

/* ========== Component ========== */

const VideoPlayer = React.forwardRef<HTMLDivElement, VideoPlayerProps>(
  (
    {
      src,
      poster,
      autoPlay = false,
      loop = false,
      muted: mutedProp = false,
      aspectRatio = "16/9",
      className,
      id,
      onPlay,
      onPause,
      onEnded,
      onTimeUpdate,
    },
    ref,
  ) => {
    const videoRef = React.useRef<HTMLVideoElement>(null);

    const [playing, setPlaying] = React.useState(false);
    const [currentTime, setCurrentTime] = React.useState(0);
    const [duration, setDuration] = React.useState(0);
    const [volume, setVolume] = React.useState(1);
    const [isMuted, setIsMuted] = React.useState(mutedProp);
    const [buffering, setBuffering] = React.useState(false);

    /* ---- Playback controls ---- */

    const togglePlay = React.useCallback(() => {
      const video = videoRef.current;
      if (!video) return;
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }, []);

    const toggleMute = React.useCallback(() => {
      const video = videoRef.current;
      if (!video) return;
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }, []);

    const handleSeek = React.useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const video = videoRef.current;
        if (!video) return;
        const time = Number(e.target.value);
        video.currentTime = time;
        setCurrentTime(time);
      },
      [],
    );

    const handleVolumeChange = React.useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const video = videoRef.current;
        if (!video) return;
        const vol = Number(e.target.value);
        video.volume = vol;
        setVolume(vol);
        if (vol === 0) {
          video.muted = true;
          setIsMuted(true);
        } else if (video.muted) {
          video.muted = false;
          setIsMuted(false);
        }
      },
      [],
    );

    const toggleFullscreen = React.useCallback(() => {
      const wrapper = (ref as React.RefObject<HTMLDivElement>)?.current
        ?? videoRef.current?.parentElement;
      if (!wrapper) return;
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        wrapper.requestFullscreen();
      }
    }, [ref]);

    /* ---- Video event handlers ---- */

    const handlePlay = React.useCallback(
      (e: React.SyntheticEvent<HTMLVideoElement>) => {
        setPlaying(true);
        onPlay?.(e);
      },
      [onPlay],
    );

    const handlePause = React.useCallback(
      (e: React.SyntheticEvent<HTMLVideoElement>) => {
        setPlaying(false);
        onPause?.(e);
      },
      [onPause],
    );

    const handleEnded = React.useCallback(
      (e: React.SyntheticEvent<HTMLVideoElement>) => {
        setPlaying(false);
        onEnded?.(e);
      },
      [onEnded],
    );

    const handleTimeUpdate = React.useCallback(
      (e: React.SyntheticEvent<HTMLVideoElement>) => {
        const video = e.currentTarget;
        setCurrentTime(video.currentTime);
        onTimeUpdate?.(e);
      },
      [onTimeUpdate],
    );

    const handleLoadedMetadata = React.useCallback(
      (e: React.SyntheticEvent<HTMLVideoElement>) => {
        setDuration(e.currentTarget.duration);
      },
      [],
    );

    const handleWaiting = React.useCallback(() => setBuffering(true), []);
    const handleCanPlay = React.useCallback(() => setBuffering(false), []);

    /* ---- Keyboard shortcuts ---- */

    const handleKeyDown = React.useCallback(
      (e: React.KeyboardEvent<HTMLDivElement>) => {
        const video = videoRef.current;
        if (!video) return;

        switch (e.key) {
          case " ":
            e.preventDefault();
            togglePlay();
            break;
          case "m":
          case "M":
            toggleMute();
            break;
          case "f":
          case "F":
            toggleFullscreen();
            break;
          case "ArrowLeft":
            e.preventDefault();
            video.currentTime = Math.max(0, video.currentTime - 5);
            break;
          case "ArrowRight":
            e.preventDefault();
            video.currentTime = Math.min(
              video.duration || 0,
              video.currentTime + 5,
            );
            break;
        }
      },
      [togglePlay, toggleMute, toggleFullscreen],
    );

    /* ---- Controls visibility logic ---- */

    const controlsOpacity = playing
      ? "opacity-0 group-hover:opacity-100"
      : "opacity-100";

    return (
      <div
        ref={ref}
        id={id}
        className={cx(
          videoPlayerWrapperStyles({ aspectRatio }),
          className,
        )}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        data-testid="video-player"
      >
        {/* Video element */}
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          autoPlay={autoPlay}
          loop={loop}
          muted={isMuted}
          className="size-full object-cover"
          onPlay={handlePlay}
          onPause={handlePause}
          onEnded={handleEnded}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onWaiting={handleWaiting}
          onCanPlay={handleCanPlay}
          onClick={togglePlay}
          playsInline
          data-testid="video-element"
        />

        {/* Buffering spinner overlay */}
        {buffering && (
          <div className={cx(bufferingOverlayStyles())} data-testid="buffering-overlay">
            <svg
              className="size-10 animate-spin text-white"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.25"
              />
              <path
                d="M12 2a10 10 0 0 1 10 10"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>
        )}

        {/* Controls bar */}
        <div
          className={cx(controlsBarStyles(), controlsOpacity)}
          data-testid="controls-bar"
        >
          {/* Play / Pause */}
          <button
            type="button"
            className={cx(controlButtonStyles())}
            onClick={togglePlay}
            aria-label={playing ? "Pause" : "Play"}
            data-testid="play-pause-button"
          >
            {playing ? (
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <rect x="3" y="2" width="4" height="12" rx="1" />
                <rect x="9" y="2" width="4" height="12" rx="1" />
              </svg>
            ) : (
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path d="M4 2.5a.5.5 0 0 1 .77-.42l9 5.5a.5.5 0 0 1 0 .84l-9 5.5A.5.5 0 0 1 4 13.5V2.5z" />
              </svg>
            )}
          </button>

          {/* Time display */}
          <span className={cx(timeDisplayStyles())} data-testid="time-display">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>

          {/* Seek bar */}
          <input
            type="range"
            min={0}
            max={duration || 0}
            step={0.1}
            value={currentTime}
            onChange={handleSeek}
            className={cx(seekBarStyles())}
            aria-label="Seek"
            data-testid="seek-bar"
          />

          {/* Volume button */}
          <button
            type="button"
            className={cx(controlButtonStyles())}
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute" : "Mute"}
            data-testid="mute-button"
          >
            {isMuted ? (
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path d="M7.5 2.146a.5.5 0 0 1 .5.5v10.708a.5.5 0 0 1-.82.384L4.1 11H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2.1L7.18 2.262a.5.5 0 0 1 .32-.116z" />
                <path d="M10.707 5.293a1 1 0 0 1 0 1.414L11.293 8l-1.586 1.293a1 1 0 0 1 1.414 1.414L12.414 8l1.293-1.707a1 1 0 0 0-1.414-1.414L11 6.586l-.293-.293a1 1 0 0 0-1.414 0z" />
              </svg>
            ) : (
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path d="M7.5 2.146a.5.5 0 0 1 .5.5v10.708a.5.5 0 0 1-.82.384L4.1 11H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2.1L7.18 2.262a.5.5 0 0 1 .32-.116z" />
                <path d="M11.536 3.464a6 6 0 0 1 0 9.072.5.5 0 0 1-.707-.708 5 5 0 0 0 0-7.656.5.5 0 0 1 .707-.708z" />
                <path d="M10.121 5.879a3 3 0 0 1 0 4.242.5.5 0 0 1-.707-.708 2 2 0 0 0 0-2.826.5.5 0 1 1 .707-.708z" />
              </svg>
            )}
          </button>

          {/* Volume slider */}
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
            className={cx(volumeSliderStyles())}
            aria-label="Volume"
            data-testid="volume-slider"
          />

          {/* Fullscreen */}
          <button
            type="button"
            className={cx(controlButtonStyles())}
            onClick={toggleFullscreen}
            aria-label="Fullscreen"
            data-testid="fullscreen-button"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <path d="M2 2.5A.5.5 0 0 1 2.5 2H5a.5.5 0 0 1 0 1H3v2a.5.5 0 0 1-1 0V2.5zM11 2a.5.5 0 0 0 0 1h2v2a.5.5 0 0 0 1 0V2.5a.5.5 0 0 0-.5-.5H11zM2.5 11a.5.5 0 0 1 .5.5V13h2a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5V11.5a.5.5 0 0 1 .5-.5zM13 11.5a.5.5 0 0 1 .5-.5.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H11a.5.5 0 0 1 0-1h2v-2z" />
            </svg>
          </button>
        </div>
      </div>
    );
  },
);

VideoPlayer.displayName = "VideoPlayer";

export { VideoPlayer, formatTime };
