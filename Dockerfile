FROM node:21.6.0-slim

ENV LANG=ja_JP.UTF-8
ENV TZ=Asia/Tokyo

WORKDIR /app
COPY . .

RUN yarn install
