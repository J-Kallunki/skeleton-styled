#!/bin/bash

if [[ $TRAVIS_BRANCH == 'master' ]]; then
    git add css/*
    git add javascript/*
    git commit -amend -m "Update css and javascript content"
    git push --force 44r0n/skeleton-styled master
else
    echo 'Not in master branch. Skiping push back.'
fi
