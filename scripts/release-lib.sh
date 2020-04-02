#!/bin/bash

# This script is used to release the lib/ pkg.

set -euox pipefail

pushd $(git rev-parse --show-toplevel)
  cd lib
  ../node_modules/.bin/release-it --config ../.release-it-lib.json
popd
