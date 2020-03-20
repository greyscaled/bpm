import { BPM, NoteDuration } from "@vapurrmaid/bpm";
import React, { useEffect, /* useRef, */ useState } from "react";

import "./bpm-calculator.css";
import { ReactComponent as ArrowIcon } from "./arrow.svg";
import { ReactComponent as EighthNoteIcon } from "./eighth.svg";
import { ReactComponent as HalfNoteIcon } from "./half.svg";
import { ReactComponent as QuarterNoteIcon } from "./quarter.svg";
import { ReactComponent as SixteenthNoteIcon } from "./sixteenth.svg";
import { ReactComponent as WholeNoteIcon } from "./whole.svg";
import { ClickTrack } from "../util/clicktrack";
import { formatDecimal } from "../util/strings";

const clickTrack = new ClickTrack();

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
  const [bpm, setBpm] = useState<number>(120);
  const [beatsPerMeasure, setBeatsPerMeasure] = useState<number>(4);
  const [beatNote, setBeatNote] = useState<NoteDuration>("quarter");
  // const timerId = useRef<number | undefined>(undefined);

  const bpmCalculator = new BPM(bpm);

  clickTrack.setBPM(bpm);

  const notes = [
    {
      beats: bpmCalculator.numberOfBeatsFor("sixteenth", beatNote),
      note: <SixteenthNoteIcon className="note-icon" />,
      seconds: bpmCalculator.durationFor("sixteenth", beatNote),
      value: "sixteenth"
    },
    {
      beats: bpmCalculator.numberOfBeatsFor("eigth", beatNote),
      note: <EighthNoteIcon className="note-icon" />,
      seconds: bpmCalculator.durationFor("eigth", beatNote),
      value: "eigth"
    },
    {
      beats: bpmCalculator.numberOfBeatsFor("quarter", beatNote),
      note: <QuarterNoteIcon className="note-icon" />,
      seconds: bpmCalculator.durationFor("quarter", beatNote),
      value: "quarter"
    },
    {
      beats: bpmCalculator.numberOfBeatsFor("half", beatNote),
      note: <HalfNoteIcon className="note-icon" />,
      seconds: bpmCalculator.durationFor("half", beatNote),
      value: "half"
    },
    {
      beats: bpmCalculator.numberOfBeatsFor("whole", beatNote),
      note: <WholeNoteIcon className="note-icon" />,
      seconds: bpmCalculator.durationFor("whole", beatNote),
      value: "whole"
    }
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
      <fieldset className="fieldset">
        <legend>BPM Controls</legend>

        <div
          style={{
            display: "flex",
            flex: "1 0 auto",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "5px"
          }}
        >
          <div style={{ alignItems: "center", display: "inline-flex" }}>
            <button
              aria-label="Decrease beats per minute"
              className="btn"
              onClick={handleDecreaseBpm}
              // onTouchStart={handleDecreaseBpm}
              // onTouchEnd={clearTimer}
              // onMouseDown={handleDecreaseBpm}
              // onMouseUp={clearTimer}
              // onMouseLeave={clearTimer}
            >
              <ArrowIcon className="arrow arrow--left" />
            </button>
            <button
              aria-label="Increase beats per minute"
              className="btn"
              onClick={handleIncreaseBpm}
              // onTouchStart={handleIncreaseBpm}
              // onTouchEnd={clearTimer}
              // onMouseDown={handleIncreaseBpm}
              // onMouseUp={clearTimer}
              // onMouseLeave={clearTimer}
              style={{ marginLeft: "5px" }}
            >
              <ArrowIcon className="arrow arrow--right" />
            </button>
          </div>

          <div
            style={{
              alignSelf: "center",
              display: "inline-flex",
              marginLeft: "auto",
              marginRight: "10px"
            }}
          >
            <Beeper />
          </div>

          <input
            className="bpm-display"
            disabled
            id="bpmDisplay"
            max={ClickTrack.MAX_BEATS_PER_MINUTE}
            min={ClickTrack.MIN_BEATS_PER_MINUTE}
            type="text"
            value={bpm}
          />
        </div>

        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginRight: "14px"
            }}
          >
            <label className="label" htmlFor="bpmDisplay">
              BPM
            </label>
          </div>
        </div>
      </fieldset>

      <fieldset className="fieldset" style={{ marginTop: "50px" }}>
        <legend>Time Signature Controls</legend>

        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "auto 0"
            }}
          >
            <button
              aria-label="Increase beats per measure"
              className="btn"
              onClick={() => {
                const result = beatsPerMeasure + 1;
                setBeatsPerMeasure(result);
                clickTrack.setBeatsPerMeasure(result);
              }}
            >
              <ArrowIcon className="arrow" />
            </button>
            <button
              aria-label="Decrease beats per measure"
              className="btn"
              disabled={beatsPerMeasure === ClickTrack.MIN_BEATS_PER_MEASURE}
              onClick={() => {
                const result = beatsPerMeasure - 1;
                if (result >= ClickTrack.MIN_BEATS_PER_MEASURE) {
                  setBeatsPerMeasure(result);
                  clickTrack.setBeatsPerMeasure(result);
                }
              }}
              style={{ marginTop: "5px" }}
            >
              <ArrowIcon className="arrow arrow--down" />
            </button>
          </div>

          <div
            style={{
              alignItems: "center",
              border: "2px inset",
              display: "flex",
              flexDirection: "column"
            }}
          >
            <label htmlFor="beatsPerMeasureDisplay" style={{ display: "none" }}>
              Beats per measure
            </label>
            <input
              className="time-signature"
              disabled
              id="beatsPerMeasureDisplay"
              min={ClickTrack.MIN_BEATS_PER_MEASURE}
              style={{ borderBottom: "2px solid red" }}
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
        </div>
      </fieldset>

      <fieldset className="fieldset">
        <legend>Note Information</legend>

        <section className="note-info">
          {notes.map(({ beats, note, seconds, value }) => (
            <div
              key={value}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "0 5px"
              }}
            >
              <span
                aria-label={`Number of beats for ${value} note at bpm ${bpm}`}
                style={{ display: "inline-block", whiteSpace: "pre" }}
              >
                {note}
                {` = ${beats}`}
              </span>

              <span style={{ display: "inline-block" }}>
                <span
                  aria-label={`Number of seconds for each ${value} note at bpm ${bpm}`}
                  style={{ display: "inline-block", marginRight: "5px" }}
                >
                  {formatDecimal(seconds)}
                </span>

                <span>seconds</span>
              </span>
            </div>
          ))}
        </section>
      </fieldset>

      <fieldset
        className="fieldset"
        style={{ marginTop: "15px", padding: "0 5px" }}
      >
        <legend>Beat Note Controls</legend>

        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          {notes.map(({ note, value }) => (
            <button
              aria-label={`Sets the beat note to a ${value} note`}
              className="btn note-btn"
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

      <fieldset className="fieldset" style={{ marginTop: "45px" }}>
        <legend>Playback Controls</legend>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <PlaybackBtn />
        </div>
      </fieldset>
    </div>
  );
};

const Beeper: React.FC = () => {
  const [currentBeat, setCurrentBeat] = useState<number>(1);

  // hook that updates currentBeat whenever the Metronome ticks. Must ensure
  // this hook has zero dependencies so that the callback only gets
  // registered once.
  useEffect(() => {
    clickTrack.addClickCallback(({ currentBeat }) =>
      setCurrentBeat(currentBeat)
    );
  }, []);

  return (
    <span
      className={`beeper ${
        currentBeat === 1
          ? "beeper--downbeat"
          : currentBeat % 2 === 0
          ? "beeper--evenbeat"
          : "beeper--oddbeat"
      }`}
    />
  );
};

const PlaybackBtn: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  return (
    <button
      aria-label={`${isPlaying ? "Stops" : "Starts"} sounding the metronome`}
      className={`playback-btn  ${
        isPlaying ? "playback-btn--on" : "playback-btn--off"
      }`}
      onClick={() => {
        if (isPlaying) {
          clickTrack.stop();
          return setIsPlaying(false);
        }

        clickTrack.start().then(() => {
          setIsPlaying(true);
        });
      }}
    />
  );
};
