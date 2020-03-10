/**
 * Types of musical notes
 */
export type Note =
  | "thirtysecondth"
  | "sixteenth"
  | "eigth"
  | "quarter"
  | "half"
  | "whole";

/**
 * Class representing the musical time concept of Beats Per Minute (BPM). In
 * many cases, BPM is applied to a quarter note.
 *
 * @example
 *  const bpm = new BPM(100);
 *  bpm.asSixteenth // 400
 *  bpm.asEighth    // 200
 *  bpm.asQuarter   // 100
 *  bpm.asHalf      // 50
 *  bpm.asWhole     // 25
 */
export class BPM {
  /**
   * Value is normalized to number of quarter notes per minute, even if the
   * class was constructed using a different beat note.
   */
  private readonly value: number;

  /**
   * Creates an object representing beats per minute whereby one beat is
   * considered as the provided beatNote.
   *
   * @param bpm Numerical BPM
   * @param beatNote Note that's considered 1 beat. Defaults to a quarter note.
   */
  constructor(bpm: number, beatNote: Note = "quarter") {
    this.value = this.applyBPMNote(bpm, beatNote);
  }

  private applyBPMNote(bpm: number, beatNote: Note) {
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

    throw new Error(`beatNote '${beatNote}' is not a recognized note.`);
  }

  /**
   * Converts this BPM value to seconds per beat.
   * @param beatNote Note that's considered 1 beat. Defaults to a quarter note.
   */
  toSecondsPerBeat(beatNote: Note = "quarter"): number {
    return 60.0 / this.applyBPMNote(this.value, beatNote);
  }

  get asThirtySecondth(): number {
    return this.applyBPMNote(this.value, "thirtysecondth");
  }

  get asSixteenth(): number {
    return this.applyBPMNote(this.value, "sixteenth");
  }

  get asEigth(): number {
    return this.applyBPMNote(this.value, "eigth");
  }

  get asQuarter(): number {
    return this.applyBPMNote(this.value, "quarter");
  }

  get asHalf(): number {
    return this.applyBPMNote(this.value, "half");
  }

  get asWhole(): number {
    return this.applyBPMNote(this.value, "whole");
  }
}
