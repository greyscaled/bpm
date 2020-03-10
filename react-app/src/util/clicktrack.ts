import { Loop, MembraneSynth, Transport, start } from "tone";

/**
 * Arguments supplied by ClickTrack to functions registered as callbacks to
 * each click event.
 */
interface ClickCbArgs {
  currentBeat: number;
  beatsPerMeasure: number;
  time: number;
}

/**
 * A function registered as a callback to each click event.
 */
type ClickCbFunction = (args: ClickCbArgs) => void;

/**
 * Class representing a ClickTrack used to keep time in music. A clicktrack
 * has a tempo (often supplied in BPM, or beats per minute). Each 'click'
 * (beat) is the same duration apart and there will be a constant number
 * per minute.
 *
 * @example
 *  const ct = new ClickTrack();
 *  ct.addClickCallback(({ currentBeat, time }) => {
 *    const d = new Date(time)
 *    console.log(`Played beat ${currentBeat} at time ${d.toTimeString()}`)
 *  });
 *  ct.start();
 */
export class ClickTrack {
  /** A shared synth instance is used to output sound for each ClickTrack */
  private static readonly synth = new MembraneSynth().toDestination();

  /** Registered callbacks to be fired on each click event */
  private readonly callbacks: ClickCbFunction[];

  /**
   * Number of beats in a measure. There are 4 beats per measure in 4/4.
   */
  private _beatsPerMeasure = 4;

  /**
   * Current beat within a cycle. Must be in the interval
   * (1, beats per measure).
   */
  private _currentBeat = 1;

  /** The internal tonejs Loop that's called on each click. */
  private readonly loop: Loop;

  constructor() {
    this.loop = new Loop();
    this.loop.callback = this.createLoopCallback();
    this.callbacks = [];
  }

  /**
   * Returns a callback understood by ToneJS.
   *
   * @example
   *  this.loop.callback = this.createLoopCallback()
   */
  private createLoopCallback = () => {
    return (time: number) => {
      this.callbacks.forEach(cb =>
        cb({
          currentBeat: this._currentBeat,
          beatsPerMeasure: this._beatsPerMeasure,
          time
        })
      );

      ClickTrack.synth.triggerAttackRelease(
        this._currentBeat === 1 ? "G3" : "C3",
        "4n",
        time
      );

      const nextBeat = this._currentBeat + 1;

      this._currentBeat = nextBeat <= this._beatsPerMeasure ? nextBeat : 1;
    };
  };

  /**
   * Register the supplied function to be called during each
   * 'click' event emitted by this ClickTrack.
   */
  addClickCallback(fn: ClickCbFunction) {
    this.callbacks.push(fn);
  }

  /**
   * Set the beats per minute (BPM) of this ClickTrack. Increasing BPM (also
   * stated as 'increasing tempo') speeds up time (ie: subsequent 'clicks'
   * will be closer together).
   *
   * @throws Error if bpm is not an integer or outside the range (0, 220).
   */
  setBPM(bpm: number) {
    if (!Number.isInteger(bpm)) {
      throw new Error(`bpm must be an integer. Received: ${bpm}`);
    }

    if (bpm < 0 || bpm > 220) {
      throw new Error(`bpm must be in the range (0, 220). Received: ${bpm}`);
    }

    Transport.bpm.value = bpm;
  }

  /**
   * Set how many beats occur in a measure. This does not effect the overall
   * tempo or BPM, but just shifts where the 'downbeat' occurs.
   *
   * @throws Error if beatsPerMeasure is not an integer or is less than 2.
   */
  setBeatsPerMeasure(beatsPerMeasure: number) {
    if (!Number.isInteger(beatsPerMeasure)) {
      throw new Error(
        `beatsPerMeasure must be an integer. Received: ${beatsPerMeasure}`
      );
    }

    if (beatsPerMeasure < 2) {
      throw new Error(
        `beatsPerMeasure must be greater than or equal to 2. Received: ${beatsPerMeasure}`
      );
    }

    this._beatsPerMeasure = beatsPerMeasure;
    this.loop.callback = this.createLoopCallback();
  }

  /**
   * Returns a promise to start playing this ClickTrack. Playback is dependent
   * upon the browser's web audio context via the Web Audio API. If there is a
   * problem with the underlying Web Audio, then the promise is rejected.
   *
   * @async
   */
  start() {
    return new Promise((resolve, reject) => {
      start()
        .then(() => {
          Transport.start();
          this.loop.start(0);
          resolve();
        })
        .catch(() => {
          reject();
        });
    });
  }

  /**
   * Stops playing this ClickTrack.
   */
  stop() {
    Transport.pause();
    this.loop.stop(0);
  }

  /**
   * Number of beats in a measure. There are 4 beats per measure in 4/4.
   */
  get beatsPerMeasure() {
    return this._beatsPerMeasure;
  }

  /**
   * Current beat within a cycle. Must be in the interval
   * (1, beatsPerMeasure).
   */
  get currentBeat() {
    return this._currentBeat;
  }
}
