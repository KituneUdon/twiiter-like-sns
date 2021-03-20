package controllers

import (
	"fmt"
	"log"
	"net/http"

	"github.com/kenichi-morihara/twitter-like-sns-backend/config"
	"github.com/kenichi-morihara/twitter-like-sns-backend/utils"

	"github.com/gorilla/mux"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

var db *gorm.DB

func init() {
	db = utils.GetConnection()
}

func StartWebServer() {
	router := mux.NewRouter().StrictSlash(true)
	router.HandleFunc("/", home)
	router.HandleFunc("/users", findAllUsers).Methods("GET")
	router.HandleFunc("/users/{id}", findByID).Methods("GET")
	router.HandleFunc("/users", createUser).Methods("POST")
	router.HandleFunc("/users", updateUser).Methods("PUT")
	router.HandleFunc("/users", deleteUser).Methods("DELETE")

	router.HandleFunc("/microposts", findAllMicroposts).Methods("GET")
	//router.HandleFunc("/microposts/{id}", findMicropostByID).Methods("GET")
	router.HandleFunc("/microposts/{id}", findAllMicropostsByUserID).Methods("GET")
	router.HandleFunc("/microposts", createMicropost).Methods("POST")
	router.HandleFunc("/microposts", updateMicropost).Methods("PUT")
	router.HandleFunc("/microposts", deleteMicropost).Methods("DELETE")

	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%d", config.Config.ServerPort), router))
}

func home(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello World")
}
