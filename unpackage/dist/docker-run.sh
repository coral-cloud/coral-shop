#!/usr/bin/env bash
docker stop coral-shop
docker rm coral-shop
docker run -d  --privileged=true -p 8093:8093 --name coral-shop 10.10.208.193:5000/coral-shop:20200210124230
docker logs -f coral-shop
