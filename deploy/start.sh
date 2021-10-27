!#bin/bash

IMAGE_PROJECT="200lab-course"
CONTAINER_PROJECT="200lab-nextjs"

echo "---Loading Image---"
docker load -i $IMAGE_PROJECT.tar

echo "---Stoping Container---"
docker container stop $CONTAINER_PROJECT

echo "---Removing Container---"
docker container rm $CONTAINER_PROJECT

echo "---Start Project---"
docker run -it -d --net 200lab-course -p 3000:3000 --name $CONTAINER_PROJECT $IMAGE_PROJECT:latest
