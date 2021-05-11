FROM node:16-alpine
WORKDIR /usr/src/app
COPY . .
RUN apk add git 
RUN git clone https://github.com/KituneUdon/twitter-like-sns-api.git
RUN npm install -g @stoplight/prism-cli
CMD prism mock -p 3000 -h 0.0.0.0 ./twitter-like-sns-api/reference/twitter-like-sns.v1.yaml