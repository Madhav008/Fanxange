#!/bin/bash

#build the react app
npm run build

# Step 1: Build a Docker image
docker build -t fanxange-frontend .

docker rm -f fanxange-container  # Remove the existing container if it exists
docker run -d --name fanxange-container -p 5125:5125 fanxange-frontend  # Start a new container