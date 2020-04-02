#!/bin/bash

# This script is used to release the react-app/ pkg.

set -euox pipefail

pushd $(git rev-parse --show-toplevel)
  cd react-app
  ../node_modules/.bin/release-it --config ../.release-it-react.json
popd
