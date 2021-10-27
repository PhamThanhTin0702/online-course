#!/bin/bash
set -e

IMAGE_PROJECT="200lab-course"
CONTAINER_PROJECT="200lab-nextjs"
CONNECTION=$1

echo "---Building Project---"
npm run build

echo "---Building Image Docker---"
docker build . -t $IMAGE_PROJECT

echo "---Compressing Image Docker---"
docker save --output $IMAGE_PROJECT.tar $IMAGE_PROJECT

echo "---Deploying---"
scp -o StrictHostKeyChecking=no ./$IMAGE_PROJECT.tar $CONNECTION:~
ssh -o StrictHostKeyChecking=no $CONNECTION "" < ./deploy/start.sh