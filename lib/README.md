# @vapurrmaid/bpm

A simple zero-dependency package for working with **BPM** calculations.

## BPM class

### Constructor

```ts
new BPM(bpm);
```

- `bpm: number` - A number greater than 0

### Public Properties

- `value: number` - Number of beats per minute (BPM)

### Public Methods

#### durationFor

Calculates the duration (in seconds) for a particular note at the BPM.

```ts
  durationFor(aNote, beatNote = "quarter"): number
```

- `aNote: NoteDuration` - the note to calculate the duration for
- `beatNote: NoteDuration` - the note that's considered 1 beat

#### numberOfBeatsFor

Calculates the number of beats for the given note duration at this BPM.

```ts
numberOfBeatsFor(aNote, beatNote = "quarter"): number
```

- `aNote: NoteDuration` - the note to calculate the duration for
- `beatNote: NoteDuration` - the note that's considered 1 beat
