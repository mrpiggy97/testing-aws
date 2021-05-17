FROM node:latest AS Builder

WORKDIR /first-app
COPY . /first-app
RUN cd app
RUN yarn install


FROM golang:alpine

WORKDIR /testing-azure
COPY --from=Builder /first-app .
RUN apk add --no-cache git
RUN go get -d -v ./...
CMD [ "go", "run", "main.go" ]
