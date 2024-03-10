FROM node:21.6.0-slim

ENV LANG=ja_JP.UTF-8
ENV TZ=Asia/Tokyo

WORKDIR /app
COPY . .

RUN apt-get update -y && apt-get install -y curl
