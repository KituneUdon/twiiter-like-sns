package controllers

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"

	"github.com/kenichi-morihara/twitter-like-sns-backend/config"
	"github.com/kenichi-morihara/twitter-like-sns-backend/utils"

	"github.com/gorilla/mux"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

// User User構造体
type User struct {
	ID        int
	FirstName string
	LastName  string
}

func StartWebServer() {
	router := mux.NewRouter().StrictSlash(true)
	router.HandleFunc("/", home)
	router.HandleFunc("/users", findAllUsers).Methods("GET")
	router.HandleFunc("/users/{id}", findByID).Methods("GET")
	router.HandleFunc("/users", createUser).Methods("POST")
	router.HandleFunc("/users", updateUser).Methods("PUT")
	router.HandleFunc("/users", deleteUser).Methods("DELETE")
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%d", config.Config.ServerPort), router))
}

func home(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello World")
}

func findAllUsers(w http.ResponseWriter, r *http.Request) {
	// DB接続
	db := utils.GetConnection()
	defer db.Close()

	var userList []User
	db.Find(&userList)

	// 共通化した処理を使う
	utils.RespondWithJSON(w, http.StatusOK, userList)
}

func findByID(w http.ResponseWriter, r *http.Request) {

	id, err := utils.GetID(r)
	if err != nil {
		utils.RespondWithError(w, http.StatusBadRequest, "Invalid parameter")
		return
	}

	// DB接続
	db := utils.GetConnection()
	defer db.Close()

	var user User
	db.Where("id = ?", id).Find(&user)

	// 共通化した処理を使う
	utils.RespondWithJSON(w, http.StatusOK, user)
}

// ユーザー追加処理
func createUser(w http.ResponseWriter, r *http.Request) {
	// リクエストボディ取得
	body, err := ioutil.ReadAll(r.Body)
	defer r.Body.Close()
	if err != nil {
		utils.RespondWithError(w, http.StatusBadRequest, "Invalid request")
		return
	}

	var user User
	// 読み込んだJSONを構造体に変換
	if err := json.Unmarshal(body, &user); err != nil {
		utils.RespondWithError(w, http.StatusBadRequest, "JSON Unmarshaling failed .")
		return
	}

	// DB接続
	db := utils.GetConnection()
	defer db.Close()

	// DBにINSERTする
	db.Create(&user)

	utils.RespondWithJSON(w, http.StatusOK, user)

}

func updateUser(w http.ResponseWriter, r *http.Request) {
	// リクエストボディ取得
	body, err := ioutil.ReadAll(r.Body)
	defer r.Body.Close()
	if err != nil {
		utils.RespondWithError(w, http.StatusBadRequest, "Invalid request")
		return
	}

	// 読み込んだJSONを構造体に変換
	var user User
	if err := json.Unmarshal(body, &user); err != nil {
		utils.RespondWithError(w, http.StatusBadRequest, "JSON Unmarshaling failed .")
		return
	}

	// DB接続
	db := utils.GetConnection()
	defer db.Close()

	// Update実行
	db.Save(&user)
	// gormはSaveメソッドで主キーの部分をUpdateしてくれる。また、存在しないキーだったらINSERTされる

	utils.RespondWithJSON(w, http.StatusOK, user)
}

func deleteUser(w http.ResponseWriter, r *http.Request) {
	// リクエストボディ取得
	body, err := ioutil.ReadAll(r.Body)
	defer r.Body.Close()
	if err != nil {
		utils.RespondWithError(w, http.StatusBadRequest, "Invalid request")
		return
	}

	// 読み込んだJSONを構造体に変換
	var user User
	if err := json.Unmarshal(body, &user); err != nil {
		utils.RespondWithError(w, http.StatusBadRequest, "JSON Unmarshaling failed .")
		return
	}

	// IDがセットされていない場合はエラーを返す
	if user.ID == 0 {
		utils.RespondWithError(w, http.StatusBadRequest, "ID is not set .")
		return
	}

	// DB接続
	db := utils.GetConnection()
	defer db.Close()

	// DELETE実行
	db.Delete(&user)

	utils.RespondWithJSON(w, http.StatusOK, user)
}
