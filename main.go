package main

import (
	"fmt"
	"net/http"
	"time"

	"github.com/mrpiggy97/testing-aws/multiplexers"
)

func main() {
	var multiplexer *multiplexers.Server = multiplexers.NewServer()
	multiplexer.Router.ServeFiles("/*filepath", http.Dir("./app/build"))
	var currentTime time.Time = time.Now()
	var message string = fmt.Sprintf("server started listenting %v", currentTime)
	fmt.Println(message)
	http.ListenAndServe("0.0.0.0:5000", multiplexer)
}
