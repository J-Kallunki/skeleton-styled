#!/bin/bash

if [[ -z "$TRAVIS_TAG" ]]; then
    echo "Skiping predeploy process, TRAVIS_TAG is not defined"
else
    npm config set git-tag-version false
    npm version ${TRAVIS_TAG}
    npm version   
fi