package controllers

import (
	"encoding/json"
	"io/ioutil"
	"net/http"

	"github.com/kenichi-morihara/twitter-like-sns-backend/utils"
)

// User User構造体
type User struct {
	ID        int
	FirstName string
	LastName  string
}

func findAllUsers(w http.ResponseWriter, r *http.Request) {
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

	// DELETE実行
	db.Delete(&user)

	utils.RespondWithJSON(w, http.StatusOK, user)
}
