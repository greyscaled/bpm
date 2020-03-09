import { BPM, BPMNote } from "@vapurrmaid/bpm";
import React from "react";
import { Transport } from "tone";

import "./app.css";
import { Metronome } from "./metronome";

const formatter = new Intl.NumberFormat("en", {
  maximumSignificantDigits: 3
});

export const App: React.FC = () => {
  const [bpm, setBpm] = React.useState<number>(120);
  const [beatsPerMeasure, setBeatsPerMeasure] = React.useState<number>(4);
  const [beatNote, setBeatNote] = React.useState<BPMNote>("quarter");
  const [isPlaying, setIsPlaying] = React.useState<boolean>(false);

  const bpmCalculator = new BPM(bpm, beatNote);

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

  Metronome.setBPM(bpm);

  return (
    <>
      <header>
        <h1>BPM Calculator</h1>
      </header>

      <main>
        <fieldset className="control-set">
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
                  setBpm(Number.parseInt(e.target.value));
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
                  const val = Number.parseInt(e.target.value);
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

        <fieldset className="control-set">
          <legend>Notes</legend>

          {notes.map(({ bpm, note, seconds }, idx) => (
            <div className="control-box" key={idx}>
              {`${note} = ${bpm} (${formatter.format(seconds)} seconds)`}
            </div>
          ))}
        </fieldset>

        <fieldset className="control-set">
          <button
            onClick={() => {
              if (isPlaying) {
                Transport.pause();
                Metronome.stop();
                return setIsPlaying(false);
              }
              Transport.start();
              Metronome.start();
              setIsPlaying(true);
            }}
          >
            {isPlaying ? "Stop" : "Start"}
          </button>
        </fieldset>
      </main>
    </>
  );
};
