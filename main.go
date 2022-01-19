package main

import (
	"fmt"
	"net/http"
	"os"
	"time"

	"github.com/julienschmidt/httprouter"
	"github.com/mrpiggy97/testing-aws/multiplexers"
)

func main() {
	var allowedHost string = os.Getenv("ALLOWED_HOST")
	var multiplexer *multiplexers.Server = &multiplexers.Server{
		Router:         httprouter.New(),
		AllowedHost:    allowedHost,
		AllowedMethods: []string{"GET"},
	}
	multiplexer.Router.ServeFiles("/*filepath", http.Dir("./app/build"))
	var currentTime time.Time = time.Now()
	var message string = fmt.Sprintf("server started listenting %v", currentTime)
	fmt.Println(message)
	http.ListenAndServe("0.0.0.0:5000", multiplexer)
}
