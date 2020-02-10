#!/usr/bin/env bash
version=`date +%Y%m%d%H%M%S`;
echo "build booth version $version"

docker rmi --force `docker images | grep shop | awk '{print $3}'`
docker rmi --force `docker images | grep none | awk '{print $3}'`

docker build -t coral-shop:$version ./docker


docker tag coral-shop:$version 10.10.208.193:5000/coral-shop:$version
#
docker push 10.10.208.193:5000/coral-shop:$version


echo "build booth sucess 10.10.208.193:5000/coral-shop:$version"
