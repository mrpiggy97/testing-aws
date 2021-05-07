package main

import (
	"fmt"
	"net/http"

	"github.com/julienschmidt/httprouter"
)

func main() {
	var router *httprouter.Router = httprouter.New()
	router.ServeFiles("/*filepath", http.Dir("./app/build"))
	fmt.Println("listenting at port 8080")
	http.ListenAndServe("0.0.0.0:8080", router)
}
