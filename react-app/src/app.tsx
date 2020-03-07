import { BPM, BPMNote } from "@vapurrmaid/bpm";
import React from "react";

import "./app.css";

const formatter = new Intl.NumberFormat("en", {
  maximumFractionDigits: 3
});

export const App: React.FC = () => {
  const [bpm, setBpm] = React.useState<number>(120);
  const [beatNote, setBeatNote] = React.useState<BPMNote>("quarter");

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
                  setBpm(Number(e.target.value));
                }
              }}
              type="range"
              value={bpm}
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
          {notes.map(({ bpm, note, seconds }) => (
            <div className="control-box">
              {`${note} = ${bpm} (${formatter.format(seconds)} seconds)`}
            </div>
          ))}
        </fieldset>
      </main>
    </>
  );
};
