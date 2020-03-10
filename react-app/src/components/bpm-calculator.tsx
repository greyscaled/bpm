import { BPM, Note } from "@vapurrmaid/bpm";
import React from "react";

import "./bpm-calculator.css";
import { ReactComponent as ArrowIcon } from "./arrow.svg";
import { Metronome } from "../util/metronome";
import { formatDecimal } from "../util/strings";

const BPM_MAX = 220;
const BPM_MIN = 1;
const BEATS_PER_MEASURE_MIN = 2;

function beatNoteToNumber(note: Note) {
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
  const [bpm, setBpm] = React.useState<number>(120);
  const [beatsPerMeasure, setBeatsPerMeasure] = React.useState<number>(4);
  const [beatNote, setBeatNote] = React.useState<Note>("quarter");
  const [isPlaying, setIsPlaying] = React.useState<boolean>(false);
  const [currentBeat, setCurrentBeat] = React.useState<number>(1);

  const bpmCalculator = new BPM(bpm, beatNote);

  Metronome.setBPM(bpm);

  // hook that updates currentBeat whenever the Metronome ticks. Must ensure
  // this hook has zero dependencies so that the callback only gets
  // registered once.
  React.useEffect(() => {
    Metronome.addCallback(beat => setCurrentBeat(beat));
  }, []);

  const notes = [
    {
      beats: bpmCalculator.asSixteenth,
      note: "𝅘𝅥𝅯",
      seconds: bpmCalculator.toSecondsPerBeat("sixteenth"),
      value: "sixteenth"
    },
    {
      beats: bpmCalculator.asEigth,
      note: "𝅘𝅥𝅮",
      seconds: bpmCalculator.toSecondsPerBeat("eigth"),
      value: "eigth"
    },
    {
      beats: bpmCalculator.asQuarter,
      note: "𝅘𝅥",
      seconds: bpmCalculator.toSecondsPerBeat("quarter"),
      value: "quarter"
    },
    {
      beats: bpmCalculator.asHalf,
      note: "𝅗𝅥",
      seconds: bpmCalculator.toSecondsPerBeat("half"),
      value: "half"
    },
    {
      beats: bpmCalculator.asWhole,
      note: "𝅝",
      seconds: bpmCalculator.toSecondsPerBeat("whole"),
      value: "whole"
    }
  ];

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
              disabled={bpm === BPM_MIN}
              onClick={() => {
                if (bpm - 1 >= BPM_MIN) {
                  setBpm(bpm - 1);
                }
              }}
            >
              <ArrowIcon className="arrow arrow--left" />
            </button>
            <button
              aria-label="Increase beats per minute"
              className="btn"
              disabled={bpm === BPM_MAX}
              onClick={() => {
                if (bpm + 1 <= BPM_MAX) {
                  setBpm(bpm + 1);
                }
              }}
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
            <span
              className={`beeper ${
                currentBeat === 1
                  ? "beeper--downbeat"
                  : currentBeat % 2 === 0
                  ? "beeper--evenbeat"
                  : "beeper--oddbeat"
              }`}
            />
          </div>

          <input
            className="bpm-display"
            disabled
            id="bpmDisplay"
            max={BPM_MAX}
            min={BPM_MIN}
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
                Metronome.setBeatsPerMeasure(result);
              }}
            >
              <ArrowIcon className="arrow" />
            </button>
            <button
              aria-label="Decrease beats per measure"
              className="btn"
              disabled={beatsPerMeasure === BEATS_PER_MEASURE_MIN}
              onClick={() => {
                const result = beatsPerMeasure - 1;
                if (result >= BEATS_PER_MEASURE_MIN) {
                  setBeatsPerMeasure(result);
                  Metronome.setBeatsPerMeasure(result);
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
              min={BEATS_PER_MEASURE_MIN}
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
                {`${note} = ${beats}`}
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

      <fieldset className="fieldset" style={{ marginTop: "15px" }}>
        <legend>Beat Note Controls</legend>

        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          {notes.map(({ note, value }) => (
            <button
              aria-label={`Sets the beat note to a ${value} note`}
              className="btn note-btn"
              key={value}
              onClick={() => {
                setBeatNote(value as Note);
              }}
            >
              {note}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="fieldset" style={{ marginTop: "50px" }}>
        <legend>Playback Controls</legend>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            aria-label={`${
              isPlaying ? "Stops" : "Starts"
            } sounding the metronome at bpm ${bpm}`}
            className={`playback-btn  ${
              isPlaying ? "playback-btn--on" : "playback-btn--off"
            }`}
            onClick={() => {
              if (isPlaying) {
                Metronome.stop();
                return setIsPlaying(false);
              }

              Metronome.start().then(() => {
                setIsPlaying(true);
              });
            }}
          ></button>
        </div>
      </fieldset>
    </div>
  );
};
