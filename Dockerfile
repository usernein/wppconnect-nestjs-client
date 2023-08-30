FROM node:18-alpine3.16

RUN apk update
RUN apk upgrade
RUN apk add --no-cache ffmpeg