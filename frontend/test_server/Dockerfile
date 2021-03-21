FROM node:15.10.0-alpine
WORKDIR /usr/src/app
COPY ["./package.json", "./yarn.lock", "./"]
RUN yarn install
COPY . .
CMD ["node", "index.js"]