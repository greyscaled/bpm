# BPM Calculator

Beats Per Minute (**BPM**) is a measurement used to signify the tempo of a piece
of music. This repository contains a library and an example web application for
working with **BPM**s.

## Contents

### lib

The `lib/` directory contains a zero dependency library for working with **BPM**
calculations. For more information, please read its [README.md](lib/README.md)

### react-app

The `react-app/` directory contains an example web application that uses the
`lib`.

## Development

### Installation

```bash
yarn
cd lib && yarn
cd react-app && yarn
```

### Linking

```bash
cd lib
yarn link

cd react-app
yarn link @vapurrmaid/bpm
```

### React HMR

```bash
cd react-app
yarn start
```
