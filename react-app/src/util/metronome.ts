import { Loop, MembraneSynth, Transport, start } from "tone";

const synth = new MembraneSynth().toDestination();

const callbacks: ((beat: number) => void)[] = [];

let beat = 1;
function createLoopCB(beatsPerMeasure: number) {
  return (time: number) => {
    callbacks.forEach(cb => cb(beat));
    synth.triggerAttackRelease(beat === 1 ? "G3" : "C3", "4n", time);
    beat = (beat + 1) % beatsPerMeasure;
  };
}

const loop = new Loop();
loop.callback = createLoopCB(4);

export const Metronome = {
  addCallback: (fn: (beat: number) => void) => {
    callbacks.push(fn);
  },

  setBPM: (bpm: number) => {
    Transport.bpm.value = bpm;
  },

  setBeatsPerMeasure: (beatsPerMeasure: number) => {
    loop.callback = createLoopCB(beatsPerMeasure);
  },

  start: async () => {
    await start();
    Transport.start();
    loop.start(0);
  },

  stop: () => {
    Transport.pause();
    loop.stop(0);
  }
};
