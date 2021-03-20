#FROM golang:latest
FROM golang:1.16.0-alpine3.13

RUN apk add --update --no-cache ca-certificates git

RUN mkdir /go-app
WORKDIR /go-app
COPY go.mod .
COPY go.sum .

RUN go mod download
COPY . .

CMD ["go", "run", "main.go"]