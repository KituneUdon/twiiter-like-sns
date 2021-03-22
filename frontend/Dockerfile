FROM node:15.10.0-alpine
WORKDIR /usr/src/app
RUN apk add git 
COPY ["./package.json", "./yarn.lock", "./"]
RUN yarn install
COPY . .
CMD ["yarn", "start"]