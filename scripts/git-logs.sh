#!/bin/bash

set -euo pipefail

pushd () {
    command pushd "$@" > /dev/null
}

popd () {
    command popd "$@" > /dev/null
}

function usage() {
  echo "Usage: git-logs <lib | react-app> [--changelog | --difflog]"
}

pushd $(git rev-parse --show-toplevel)
  if [ "${1:-}" == "lib" ]; then
    LATEST_COMMIT=$(git log -1 --pretty=format:"%h" lib)
    LATEST_TAG=$(git describe --abbrev=0 --match="vapurrmaid/bpm@*" $LATEST_COMMIT)
  elif [ "${1:-}" == "react-app" ]; then
    LATEST_COMMIT=$(git log -1 --pretty=format:"%h" react-app)
    LATEST_TAG=$(git describe --abbrev=0 --match="vapurrmaid/bpm-react-app*" $LATEST_COMMIT)
  else
    echo "Unknown argument"
    usage
    exit 1 
  fi

  echo "Latest commit:    $LATEST_COMMIT"
  echo "Latest tag   :    $LATEST_TAG"

  if [ "${2:-}" == "--changelog" ] || [ "${2:-}" == "" ]; then
    echo "Changelog    :"
    git log --pretty=format:"  * %s (%h)" $LATEST_TAG...HEAD $1
  elif [ "${2:-}" == "--difflog" ]; then
    echo "Difflog      :"
    git diff HEAD $LATEST_TAG $1
  else
    echo "Unknown option $2"
    usage
    exit 1
  fi
popd
