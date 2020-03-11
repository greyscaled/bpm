import { Validate } from "@vapurrmaid/validate";

export type NoteDuration =
  | "sixtyfourth"
  | "thirtysecondth"
  | "sixteenth"
  | "eigth"
  | "quarter"
  | "half"
  | "whole";

/**
 * Class representing Beats Per Minute (BPM), a concept in musical timing. In
 * many cases, BPM is applied to a quarter note, meaning that a quarter note
 * is equivalent to 1 beat.
 *
 * @example
 *  const bpm = new BPM(120)
 *  bpm.value                       // 120
 *  bpm.durationFor("quarter")      // 0.5
 *  bpm.numberOfBeatsFor("quarter") // 120
 *  bpm.numberOfBeatsFor("half")    // 60
 */
export class BPM {
  /** Number of beats per minute (BPM) */
  readonly value: number;

  /**
   * Constructs a BPM object
   *
   * @param bpm An number greater than 0
   * @throws An Error if bpm is less than or equal to 0
   */
  constructor(bpm: number) {
    Validate.isTrue(
      bpm > 0,
      `bpm must be greater than 0. Instead received: ${bpm}`
    );

    this.value = bpm;
  }

  private applyBeatNote(bpm: number, beatNote: NoteDuration) {
    if (beatNote === "thirtysecondth") {
      return bpm * 8;
    } else if (beatNote === "sixteenth") {
      return bpm * 4;
    } else if (beatNote === "eigth") {
      return bpm * 2;
    } else if (beatNote === "quarter") {
      return bpm;
    } else if (beatNote === "half") {
      return bpm / 2;
    } else if (beatNote === "whole") {
      return bpm / 4;
    }

    throw new Error(`'${beatNote}' is not a recognized NoteDuration.`);
  }

  /**
   * Returns the duration (in seconds) of the given note at this BPM.
   */
  durationFor(aNote: NoteDuration = "quarter") {
    return 60.0 / this.applyBeatNote(this.value, aNote);
  }

  /**
   * Returns the number of beats per minute for the given note.
   */
  numberOfBeatsFor(aNote: NoteDuration = "quarter") {
    return this.applyBeatNote(this.value, aNote);
  }
}
