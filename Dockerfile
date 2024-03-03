FROM node:21.6.0-slim

ENV LANG=ja_JP.UTF-8
ENV TZ=Asia/Tokyo

WORKDIR /app

RUN apt-get update && \
  apt-get install -y curl

RUN npm install -g @nestjs/cli
RUN yarn install
