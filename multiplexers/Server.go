package multiplexers

import (
	"fmt"
	"net/http"
	"os"
	"strings"

	"github.com/julienschmidt/httprouter"
)

type Server struct {
	Router         *httprouter.Router
	AllowedHost    string
	AllowedMethods []string
}

func (serverInstance *Server) ServeHTTP(writer http.ResponseWriter, request *http.Request) {
	if serverInstance.AllowedHost != "" {
		if serverInstance.AllowedHost != request.Host {
			fmt.Println("not allowed ", request.Host)
			writer.WriteHeader(http.StatusForbidden)
		}
	}
	fmt.Println("request host: ", request.Host)
	var allowedMethods string = strings.Join(serverInstance.AllowedMethods, ",")
	writer.Header().Add("Access-Control-Allow-Methods", allowedMethods)
	serverInstance.Router.ServeHTTP(writer, request)
}

func NewServer() *Server {
	var serverPointer *Server = &Server{
		Router:         httprouter.New(),
		AllowedHost:    os.Getenv("ALLOWED_HOST"),
		AllowedMethods: []string{"GET"},
	}
	return serverPointer
}
