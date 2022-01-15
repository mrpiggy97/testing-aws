FROM node:latest AS Builder

WORKDIR /first-app
COPY . /first-app
RUN cd app
RUN yarn install


FROM golang:alpine

WORKDIR /testing-aws
COPY --from=Builder /first-app .
RUN go mod tidy
RUN go build main.go
CMD ["./main"]
