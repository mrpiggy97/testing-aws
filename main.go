package main

import (
	"fmt"
	"net/http"

	"github.com/julienschmidt/httprouter"
)

func main() {
	var router *httprouter.Router = httprouter.New()
	router.ServeFiles("/*filepath", http.Dir("./app/build"))
	fmt.Println("listenting at port 5000")
	http.ListenAndServe("0.0.0.0:5000", router)
}
