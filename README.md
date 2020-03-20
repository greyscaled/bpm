![Publish to GH Pages](https://github.com/vapurrmaid/bpm/workflows/Publish%20to%20GH%20Pages/badge.svg?event=push)

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

There are 3 packages to install:

- root-level packages (format, lint etc)
- `lib/` package
- `react-app/` package

```bash
yarn
cd lib && yarn
cd react-app && yarn
```

### Linking

If changes are made to `lib/` that are not deployed, the package can be linked:

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
