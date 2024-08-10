FROM node:22-slim

ENV LANG=ja_JP.UTF-8
ENV TZ=Asia/Tokyo

WORKDIR /app
COPY ./api .

RUN apt-get update -y && apt-get install -y curl procps

RUN npm install -g @nestjs/cli
RUN npm install