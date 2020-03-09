import { MembraneSynth, Loop, Transport } from "tone";

const synth = new MembraneSynth().toDestination();

let beat = 1;
function createLoopCB(beatsPerMeasure: number) {
  return (time: number) => {
    synth.triggerAttackRelease(beat === 1 ? "G3" : "C3", "4n", time);
    beat = (beat + 1) % beatsPerMeasure;
  };
}

const loop = new Loop();
loop.callback = createLoopCB(4);

export const Metronome = {
  setBPM: (bpm: number) => {
    Transport.bpm.value = bpm;
  },

  setBeatsPerMeasure: (beatsPerMeasure: number) => {
    loop.callback = createLoopCB(beatsPerMeasure);
  },

  start: () => {
    loop.start(0);
  },

  stop: () => {
    loop.stop(0);
  }
};
