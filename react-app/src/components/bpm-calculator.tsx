import { BPM, NoteDuration } from "@vapurrmaid/bpm";
import React, { useEffect, /* useRef, */ useState } from "react";

import "./bpm-calculator.scss";
import { ReactComponent as ArrowIcon } from "./icons/arrow.svg";
import { ReactComponent as PlayIcon } from "./icons/play.svg";
import { ReactComponent as StopIcon } from "./icons/stop.svg";
import { ReactComponent as WholeNoteIcon } from "./icons/whole.svg";
import { ReactComponent as HalfNoteIcon } from "./icons/half.svg";
import { ReactComponent as QuarterNoteIcon } from "./icons/quarter.svg";
import { ReactComponent as EighthNoteIcon } from "./icons/eighth.svg";
import { ReactComponent as SixteenthNoteIcon } from "./icons/sixteenth.svg";
import { useClickTrackRef } from "../contexts/clicktrack";
import { ClickTrack } from "../util/clicktrack";
import { formatDecimal } from "../util/strings";

function beatNoteToNumber(note: NoteDuration) {
  if (note === "thirtysecondth") {
    return 32;
  } else if (note === "sixteenth") {
    return 16;
  } else if (note === "eigth") {
    return 8;
  } else if (note === "quarter") {
    return 4;
  } else if (note === "half") {
    return 2;
  } else {
    return 1;
  }
}

export const BPMCalculator: React.FC = () => {
  const clickTrack = useClickTrackRef();
  const [bpm, setBpm] = useState<number>(120);
  const [beatsPerMeasure, setBeatsPerMeasure] = useState<number>(4);
  const [beatNote, setBeatNote] = useState<NoteDuration>("quarter");
  // const timerId = useRef<number | undefined>(undefined);

  const bpmCalculator = new BPM(bpm);

  clickTrack.current.setBPM(bpm);

  const notes = [
    {
      beats: bpmCalculator.numberOfBeatsFor("sixteenth", beatNote),
      note: <SixteenthNoteIcon className="note-icon" />,
      seconds: bpmCalculator.durationFor("sixteenth", beatNote),
      value: "sixteenth",
    },
    {
      beats: bpmCalculator.numberOfBeatsFor("eigth", beatNote),
      note: <EighthNoteIcon className="note-icon" />,
      seconds: bpmCalculator.durationFor("eigth", beatNote),
      value: "eigth",
    },
    {
      beats: bpmCalculator.numberOfBeatsFor("quarter", beatNote),
      note: <QuarterNoteIcon className="note-icon" />,
      seconds: bpmCalculator.durationFor("quarter", beatNote),
      value: "quarter",
    },
    {
      beats: bpmCalculator.numberOfBeatsFor("half", beatNote),
      note: <HalfNoteIcon className="note-icon" />,
      seconds: bpmCalculator.durationFor("half", beatNote),
      value: "half",
    },
    {
      beats: bpmCalculator.numberOfBeatsFor("whole", beatNote),
      note: <WholeNoteIcon className="note-icon" />,
      seconds: bpmCalculator.durationFor("whole", beatNote),
      value: "whole",
    },
  ];

  const handleDecreaseBpm = () => {
    if (bpm - 1 >= ClickTrack.MIN_BEATS_PER_MINUTE) {
      setBpm(bpm - 1);
    }

    // timerId.current = window.setInterval(() => {
    //   setBpm(bpm => {
    //     if (bpm - 1 >= ClickTrack.MIN_BEATS_PER_MINUTE) {
    //       return bpm - 1;
    //     }
    //     return bpm;
    //   });
    // }, 200);
  };

  const handleIncreaseBpm = () => {
    if (bpm + 1 <= ClickTrack.MAX_BEATS_PER_MINUTE) {
      setBpm(bpm + 1);
    }

    // timerId.current = window.setInterval(() => {
    //   setBpm(bpm => {
    //     if (bpm + 1 <= ClickTrack.MAX_BEATS_PER_MINUTE) {
    //       return bpm + 1;
    //     }
    //     return bpm;
    //   });
    // }, 200);
  };

  // const clearTimer = () => {
  //   window.clearInterval(timerId.current);
  // };

  return (
    <div className="calculator">
      <div className="calculator-top">
        <fieldset className="fieldset">
          <legend>BPM Controls</legend>

          <div className="calculator-bpm">
            <div className="calculator-bpm-btns calculator-top-btn-group">
              <button
                aria-label="Increase beats per minute"
                className="calculator-top-btn"
                onClick={handleIncreaseBpm}
                // onTouchStart={handleIncreaseBpm}
                // onTouchEnd={clearTimer}
                // onMouseDown={handleIncreaseBpm}
                // onMouseUp={clearTimer}
                // onMouseLeave={clearTimer}
              >
                <ArrowIcon className="arrow arrow--up" />
              </button>
              <button
                aria-label="Decrease beats per minute"
                className="calculator-top-btn"
                onClick={handleDecreaseBpm}
                // onTouchStart={handleDecreaseBpm}
                // onTouchEnd={clearTimer}
                // onMouseDown={handleDecreaseBpm}
                // onMouseUp={clearTimer}
                // onMouseLeave={clearTimer}
              >
                <ArrowIcon className="arrow arrow--down" />
              </button>
            </div>

            <div className="calculator-bpm-displays">
              <input
                className="bpm-display"
                disabled
                id="bpmDisplay"
                max={ClickTrack.MAX_BEATS_PER_MINUTE}
                min={ClickTrack.MIN_BEATS_PER_MINUTE}
                type="text"
                value={bpm}
              />

              <div className="calculator-bpm-displays-bottom">
                <div className="beepers">
                  <Beeper />
                </div>

                <label className="label" htmlFor="bpmDisplay">
                  BPM
                </label>
              </div>
            </div>
          </div>
        </fieldset>

        <fieldset className="fieldset">
          <legend>Time Signature Controls</legend>

          <div className="calculator-signature">
            <div className="calculator-signature-lcd">
              <label
                htmlFor="beatsPerMeasureDisplay"
                style={{ display: "none" }}
              >
                Beats per measure
              </label>
              <input
                className="time-signature"
                disabled
                id="beatsPerMeasureDisplay"
                min={ClickTrack.MIN_BEATS_PER_MEASURE}
                type="text"
                value={beatsPerMeasure}
              />
              <label htmlFor="beatNoteDisplay" style={{ display: "none" }}>
                Beat note
              </label>
              <input
                className="time-signature"
                disabled
                id="beatNoteDisplay"
                type="text"
                value={beatNoteToNumber(beatNote)}
              />
            </div>

            <div className="calculator-top-btn-group">
              <button
                aria-label="Increase beats per measure"
                className="calculator-top-btn"
                onClick={() => {
                  const result = beatsPerMeasure + 1;
                  setBeatsPerMeasure(result);
                  clickTrack.current.setBeatsPerMeasure(result);
                }}
              >
                <ArrowIcon className="arrow arrow--up" />
              </button>
              <button
                aria-label="Decrease beats per measure"
                className="calculator-top-btn"
                disabled={beatsPerMeasure === ClickTrack.MIN_BEATS_PER_MEASURE}
                onClick={() => {
                  const result = beatsPerMeasure - 1;
                  if (result >= ClickTrack.MIN_BEATS_PER_MEASURE) {
                    setBeatsPerMeasure(result);
                    clickTrack.current.setBeatsPerMeasure(result);
                  }
                }}
              >
                <ArrowIcon className="arrow arrow--down" />
              </button>
            </div>
          </div>
        </fieldset>
      </div>

      <fieldset className="fieldset">
        <legend>Note Information</legend>

        <section className="note-info">
          {notes.map(({ beats, note, seconds, value }) => (
            <div key={value} className="note-info-line">
              <span
                aria-label={`Number of beats for ${value} note at bpm ${bpm}`}
                style={{ display: "flex", whiteSpace: "pre" }}
              >
                {note}
                {` = ${beats}`}
              </span>

              <span style={{ display: "flex" }}>
                <span
                  aria-label={`Number of seconds for each ${value} note at bpm ${bpm}`}
                >
                  {formatDecimal(seconds)}
                </span>

                <span>s</span>
              </span>
            </div>
          ))}
        </section>
      </fieldset>

      <fieldset className="fieldset">
        <legend>Beat Note Controls</legend>

        <div className="note-btn-group">
          {notes.map(({ note, value }) => (
            <button
              aria-label={`Sets the beat note to a ${value} note`}
              className={`btn note-btn ${value === beatNote ? "pushed" : ""}`}
              key={value}
              onClick={() => {
                setBeatNote(value as NoteDuration);
              }}
            >
              {note}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="fieldset">
        <legend>Playback Controls</legend>

        <div className="calculator-playback">
          <PlaybackBtn />
        </div>
      </fieldset>
    </div>
  );
};

const Beeper: React.FC = () => {
  const clickTrack = useClickTrackRef();
  const [currentBeat, setCurrentBeat] = useState<number>(1);

  // hook that updates currentBeat whenever the Metronome ticks. Must ensure
  // this hook has zero dependencies so that the callback only gets
  // registered once.
  useEffect(() => {
    clickTrack.current.addClickCallback(({ currentBeat }) =>
      setCurrentBeat(currentBeat)
    );
  }, [clickTrack]);

  return (
    <>
      <span
        className={`beeper beeper--downbeat ${
          currentBeat === 1 ? "on" : "off"
        }`}
      />
      <span
        className={`beeper beeper--upbeat ${
          currentBeat % 2 === 0 ? "on" : "off"
        }`}
      />
      <span
        className={`beeper beeper--oddbeat ${
          currentBeat !== 1 && currentBeat % 2 !== 0 ? "on" : "off"
        }`}
      />
    </>
  );
};

const PlaybackBtn: React.FC = () => {
  const clickTrack = useClickTrackRef();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  return (
    <div className="playback-btn-wrap">
      <button
        aria-label={`${isPlaying ? "Stops" : "Starts"} sounding the metronome`}
        className={`playback-btn play ${
          isPlaying ? "playback-btn--on pushed" : "playback-btn--off"
        }`}
        onClick={() => {
          if (!isPlaying) {
            clickTrack.current.start().then(() => {
              setIsPlaying(true);
            });
          }
        }}
      >
        <PlayIcon />
      </button>
      <button
        aria-label={`${isPlaying ? "Stops" : "Starts"} sounding the metronome`}
        className={`playback-btn stop  ${
          isPlaying ? "playback-btn--off" : "playback-btn--on pushed"
        }`}
        onClick={() => {
          if (isPlaying) {
            clickTrack.current.stop();
            return setIsPlaying(false);
          }
        }}
      >
        <StopIcon />
      </button>
    </div>
  );
};
