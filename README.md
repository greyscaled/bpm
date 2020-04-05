![Publish to GH Pages](https://github.com/vapurrmaid/bpm/workflows/Publish%20to%20GH%20Pages/badge.svg?event=push)

# BPM Calculator

Beats Per Minute (**BPM**) is a measurement used to signify the tempo of a piece
of music. This repository contains a library and an example web application for
working with **BPM**s.

> **Demo:** Available at <https://vapurrmaid.ca/bpm>

## Contents

### lib

The `lib/` directory contains a lightweight library for working with **BPM**
calculations. For more information, please read its [README.md](lib/README.md)

### react-app

[![BPM Calculator UI](./img/bpm-calc.JPG)](https://vapurrmaid.ca/bpm)

The `react-app/` directory contains an example web application that uses the
`lib`. The application offers a UI for calculating information about notes based
on **BPM** and _time signature_, as well as offers a real-time metronome for
playback.

#### Clicktrack.ts

Although not `export`ed, a useful reference module for building a metronome (or
clicktrack) is in the `react-app` at
[src/util/clicktrack.ts](https://github.com/vapurrmaid/bpm/blob/master/react-app/src/util/clicktrack.ts).

## Wiki

For more information regarding development and releasing, see the
[wiki](https://github.com/vapurrmaid/bpm/wiki)
