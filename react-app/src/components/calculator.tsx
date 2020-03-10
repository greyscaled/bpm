import { BPM, BPMNote } from "@vapurrmaid/bpm";
import React from "react";

import "./calculator.css";
import { Metronome } from "../util/metronome";
import { formatDecimal } from "../util/strings";

export const Calculator: React.FC = () => {
  const [bpm, setBpm] = React.useState<number>(120);
  const [beatsPerMeasure, setBeatsPerMeasure] = React.useState<number>(4);
  const [beatNote, setBeatNote] = React.useState<BPMNote>("quarter");
  const [isPlaying, setIsPlaying] = React.useState<boolean>(false);
  const [currentBeat, setCurrentBeat] = React.useState<number>(1);

  const bpmCalculator = new BPM(bpm, beatNote);
  Metronome.setBPM(bpm);

  React.useEffect(() => {
    Metronome.addCallback(beat => setCurrentBeat(beat));
  }, []);

  const notes = [
    {
      bpm: bpmCalculator.asSixteenth,
      note: "𝅘𝅥𝅯",
      seconds: bpmCalculator.toSecondsPerBeat("sixteenth")
    },
    {
      bpm: bpmCalculator.asEigth,
      note: "𝅘𝅥𝅮",
      seconds: bpmCalculator.toSecondsPerBeat("eigth")
    },
    {
      bpm: bpmCalculator.asQuarter,
      note: "𝅘𝅥",
      seconds: bpmCalculator.toSecondsPerBeat("quarter")
    },
    {
      bpm: bpmCalculator.asHalf,
      note: "𝅗𝅥",
      seconds: bpmCalculator.toSecondsPerBeat("half")
    },
    {
      bpm: bpmCalculator.asWhole,
      note: "𝅝",
      seconds: bpmCalculator.toSecondsPerBeat("whole")
    }
  ];

  return (
    <div className="calculator">
      <fieldset className="control-set control-set--bpm">
        <legend>BPM Controls</legend>

        <div className="control-box">
          <label
            className="control-label"
            htmlFor="bpmRange"
          >{`BPM: ${bpm}`}</label>
          <input
            className="control"
            id="bpmRange"
            max={220}
            min={0}
            onChange={e => {
              if (e.target) {
                setBpm(Number.parseInt(e.target.value, 10));
              }
            }}
            type="range"
            value={bpm}
          />
        </div>

        <div className="control-box">
          <label className="control-label" htmlFor="beatPerMeasureSelect">
            Beats Per Measure
          </label>
          <input
            className="control"
            id="beatPerMeasureSelect"
            min={2}
            onChange={e => {
              if (e.target) {
                const val = Number.parseInt(e.target.value, 10);
                setBeatsPerMeasure(val);
                Metronome.setBeatsPerMeasure(val);
              }
            }}
            type="number"
            value={beatsPerMeasure}
          />
        </div>

        <div className="control-box">
          <label className="control-label" htmlFor="beatNoteSelect">
            Beat Note
          </label>
          <select
            className="control"
            id="beatNoteSelect"
            onChange={e => {
              if (e.target) {
                setBeatNote(e.target.value as BPMNote);
              }
            }}
            value={beatNote}
          >
            <option value="sixteenth">Sixteenth</option>
            <option value="eigth">Eigth</option>
            <option value="quarter">Quarter</option>
            <option value="half">Half</option>
            <option value="whole">Whole</option>
          </select>
        </div>
      </fieldset>

      <fieldset className="control-set control-set--notes">
        <legend>Notes</legend>

        {notes.map(({ bpm, note, seconds }, idx) => (
          <div className="control-box" key={idx}>
            {`${note} = ${bpm} (${formatDecimal(seconds)} seconds)`}
          </div>
        ))}
      </fieldset>

      <fieldset className="control-set control-set--playback">
        <legend>Playback</legend>

        <button
          onClick={() => {
            if (isPlaying) {
              Metronome.stop();
              return setIsPlaying(false);
            }
            Metronome.start().then(() => {
              setIsPlaying(true);
            });
          }}
        >
          {isPlaying ? "Stop" : "Start"}
        </button>

        {isPlaying && (
          <span
            className="beeper"
            style={{ color: currentBeat === 1 ? "red" : "blue" }}
          >
            {currentBeat === 0 ? beatsPerMeasure : currentBeat}
          </span>
        )}
      </fieldset>
    </div>
  );
};
