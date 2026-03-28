import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { VideoPlayer } from "./VideoPlayer";

/* ========== Mock HTMLMediaElement ========== */

beforeAll(() => {
  // jsdom doesn't implement play/pause/requestFullscreen
  Object.defineProperty(HTMLMediaElement.prototype, "play", {
    configurable: true,
    value: jest.fn().mockResolvedValue(undefined),
  });
  Object.defineProperty(HTMLMediaElement.prototype, "pause", {
    configurable: true,
    value: jest.fn(),
  });
  Object.defineProperty(HTMLElement.prototype, "requestFullscreen", {
    configurable: true,
    value: jest.fn().mockResolvedValue(undefined),
  });
});

/* ========== Basic rendering ========== */

describe("VideoPlayer", () => {
  it("renders a video element with the correct src", () => {
    render(<VideoPlayer src="https://example.com/video.mp4" />);
    const video = screen.getByTestId("video-element") as HTMLVideoElement;
    expect(video).toBeInTheDocument();
    expect(video).toHaveAttribute("src", "https://example.com/video.mp4");
  });

  it("renders poster attribute when provided", () => {
    render(
      <VideoPlayer
        src="https://example.com/video.mp4"
        poster="https://example.com/poster.jpg"
      />,
    );
    const video = screen.getByTestId("video-element") as HTMLVideoElement;
    expect(video).toHaveAttribute("poster", "https://example.com/poster.jpg");
  });

  it("renders controls bar", () => {
    render(<VideoPlayer src="https://example.com/video.mp4" />);
    expect(screen.getByTestId("controls-bar")).toBeInTheDocument();
  });

  it("renders play/pause button", () => {
    render(<VideoPlayer src="https://example.com/video.mp4" />);
    expect(screen.getByTestId("play-pause-button")).toBeInTheDocument();
    expect(screen.getByLabelText("Play")).toBeInTheDocument();
  });

  it("renders seek bar", () => {
    render(<VideoPlayer src="https://example.com/video.mp4" />);
    expect(screen.getByTestId("seek-bar")).toBeInTheDocument();
  });

  it("renders volume controls", () => {
    render(<VideoPlayer src="https://example.com/video.mp4" />);
    expect(screen.getByTestId("mute-button")).toBeInTheDocument();
    expect(screen.getByTestId("volume-slider")).toBeInTheDocument();
  });

  it("renders fullscreen button", () => {
    render(<VideoPlayer src="https://example.com/video.mp4" />);
    expect(screen.getByTestId("fullscreen-button")).toBeInTheDocument();
  });

  it("renders time display with 00:00 / 00:00", () => {
    render(<VideoPlayer src="https://example.com/video.mp4" />);
    expect(screen.getByTestId("time-display")).toHaveTextContent(
      "00:00 / 00:00",
    );
  });

  it("has correct displayName", () => {
    expect(VideoPlayer.displayName).toBe("VideoPlayer");
  });
});

/* ========== Props ========== */

describe("VideoPlayer - props", () => {
  it("passes autoPlay, loop, muted to video element", () => {
    render(
      <VideoPlayer
        src="https://example.com/video.mp4"
        autoPlay
        loop
        muted
      />,
    );
    const video = screen.getByTestId("video-element") as HTMLVideoElement;
    expect(video).toHaveAttribute("autoplay", "");
    expect(video).toHaveAttribute("loop", "");
  });

  it("passes id to wrapper", () => {
    render(<VideoPlayer src="https://example.com/video.mp4" id="my-player" />);
    expect(screen.getByTestId("video-player")).toHaveAttribute("id", "my-player");
  });

  it("merges custom className", () => {
    render(
      <VideoPlayer src="https://example.com/video.mp4" className="custom-class" />,
    );
    expect(screen.getByTestId("video-player").className).toContain(
      "custom-class",
    );
  });
});

/* ========== Aspect ratio variants ========== */

describe("VideoPlayer - aspect ratio", () => {
  it("applies 16/9 (aspect-video) by default", () => {
    render(<VideoPlayer src="https://example.com/video.mp4" />);
    expect(screen.getByTestId("video-player").className).toContain(
      "aspect-video",
    );
  });

  it("applies aspect-square for 1/1", () => {
    render(
      <VideoPlayer src="https://example.com/video.mp4" aspectRatio="1/1" />,
    );
    expect(screen.getByTestId("video-player").className).toContain(
      "aspect-square",
    );
  });

  it("applies aspect-4/3 for 4/3", () => {
    render(
      <VideoPlayer src="https://example.com/video.mp4" aspectRatio="4/3" />,
    );
    expect(screen.getByTestId("video-player").className).toContain(
      "aspect-4/3",
    );
  });

  it("applies aspect-[21/9] for 21/9", () => {
    render(
      <VideoPlayer src="https://example.com/video.mp4" aspectRatio="21/9" />,
    );
    expect(screen.getByTestId("video-player").className).toContain(
      "aspect-[21/9]",
    );
  });
});

/* ========== Play / Pause ========== */

describe("VideoPlayer - play/pause", () => {
  it("calls play on video when play button is clicked", async () => {
    const user = userEvent.setup();
    render(<VideoPlayer src="https://example.com/video.mp4" />);
    const video = screen.getByTestId("video-element") as HTMLVideoElement;
    const playBtn = screen.getByTestId("play-pause-button");

    // Mock paused property
    Object.defineProperty(video, "paused", {
      configurable: true,
      get: () => true,
    });

    await user.click(playBtn);
    expect(video.play).toHaveBeenCalled();
  });

  it("calls onPlay callback when video plays", () => {
    const handlePlay = jest.fn();
    render(
      <VideoPlayer src="https://example.com/video.mp4" onPlay={handlePlay} />,
    );
    const video = screen.getByTestId("video-element");
    fireEvent.play(video);
    expect(handlePlay).toHaveBeenCalled();
  });

  it("calls onPause callback when video pauses", () => {
    const handlePause = jest.fn();
    render(
      <VideoPlayer
        src="https://example.com/video.mp4"
        onPause={handlePause}
      />,
    );
    const video = screen.getByTestId("video-element");
    fireEvent.pause(video);
    expect(handlePause).toHaveBeenCalled();
  });

  it("calls onEnded callback when video ends", () => {
    const handleEnded = jest.fn();
    render(
      <VideoPlayer
        src="https://example.com/video.mp4"
        onEnded={handleEnded}
      />,
    );
    const video = screen.getByTestId("video-element");
    fireEvent.ended(video);
    expect(handleEnded).toHaveBeenCalled();
  });
});

/* ========== Keyboard handlers ========== */

describe("VideoPlayer - keyboard", () => {
  it("toggles play on Space key", () => {
    render(<VideoPlayer src="https://example.com/video.mp4" />);
    const wrapper = screen.getByTestId("video-player");
    const video = screen.getByTestId("video-element") as HTMLVideoElement;

    Object.defineProperty(video, "paused", {
      configurable: true,
      get: () => true,
    });

    fireEvent.keyDown(wrapper, { key: " " });
    expect(video.play).toHaveBeenCalled();
  });

  it("toggles mute on M key", () => {
    render(<VideoPlayer src="https://example.com/video.mp4" />);
    const wrapper = screen.getByTestId("video-player");
    const video = screen.getByTestId("video-element") as HTMLVideoElement;

    // Initially not muted
    expect(video.muted).toBe(false);

    fireEvent.keyDown(wrapper, { key: "m" });
    expect(video.muted).toBe(true);
  });

  it("requests fullscreen on F key", () => {
    render(<VideoPlayer src="https://example.com/video.mp4" />);
    const wrapper = screen.getByTestId("video-player");

    fireEvent.keyDown(wrapper, { key: "f" });
    expect(wrapper.requestFullscreen).toHaveBeenCalled();
  });

  it("seeks backward on ArrowLeft", () => {
    render(<VideoPlayer src="https://example.com/video.mp4" />);
    const wrapper = screen.getByTestId("video-player");
    const video = screen.getByTestId("video-element") as HTMLVideoElement;

    Object.defineProperty(video, "currentTime", {
      configurable: true,
      writable: true,
      value: 30,
    });

    fireEvent.keyDown(wrapper, { key: "ArrowLeft" });
    expect(video.currentTime).toBe(25);
  });

  it("seeks forward on ArrowRight", () => {
    render(<VideoPlayer src="https://example.com/video.mp4" />);
    const wrapper = screen.getByTestId("video-player");
    const video = screen.getByTestId("video-element") as HTMLVideoElement;

    Object.defineProperty(video, "duration", {
      configurable: true,
      get: () => 120,
    });
    Object.defineProperty(video, "currentTime", {
      configurable: true,
      writable: true,
      value: 30,
    });

    fireEvent.keyDown(wrapper, { key: "ArrowRight" });
    expect(video.currentTime).toBe(35);
  });
});

/* ========== Buffering state ========== */

describe("VideoPlayer - buffering", () => {
  it("shows buffering overlay on waiting event", () => {
    render(<VideoPlayer src="https://example.com/video.mp4" />);
    const video = screen.getByTestId("video-element");

    expect(screen.queryByTestId("buffering-overlay")).not.toBeInTheDocument();

    fireEvent.waiting(video);
    expect(screen.getByTestId("buffering-overlay")).toBeInTheDocument();
  });

  it("hides buffering overlay on canplay event", () => {
    render(<VideoPlayer src="https://example.com/video.mp4" />);
    const video = screen.getByTestId("video-element");

    fireEvent.waiting(video);
    expect(screen.getByTestId("buffering-overlay")).toBeInTheDocument();

    fireEvent.canPlay(video);
    expect(screen.queryByTestId("buffering-overlay")).not.toBeInTheDocument();
  });
});

/* ========== Ref forwarding ========== */

describe("VideoPlayer - ref", () => {
  it("forwards ref to wrapper div", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<VideoPlayer ref={ref} src="https://example.com/video.mp4" />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
    expect(ref.current?.getAttribute("data-testid")).toBe("video-player");
  });
});
