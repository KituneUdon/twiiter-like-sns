package controllers

import (
	"encoding/json"
	"io/ioutil"
	"net/http"

	"github.com/kenichi-morihara/twitter-like-sns-backend/utils"
)

// Micropost Micropost構造体
type Micropost struct {
	//gorm.Model
	ID     int
	UserID int
	Text   string
}

func findMicropostByID(w http.ResponseWriter, r *http.Request) {

	id, err := utils.GetID(r)
	if err != nil {
		utils.RespondWithError(w, http.StatusBadRequest, "Invalid parameter")
		return
	}

	var micropost Micropost
	db.Where("id = ?", id).Find(&micropost)

	// 共通化した処理を使う
	utils.RespondWithJSON(w, http.StatusOK, micropost)
}

type MicropostWithUserName struct {
	//gorm.Model
	ID     int
	UserID int
	Text   string
	Name   string
}

func findMicroposts(w http.ResponseWriter, r *http.Request) {

	var micropostList []MicropostWithUserName
	params := r.URL.Query()
	user_id := params["id"]

	if len(user_id) == 0 {
		//db.Select("id").Find(&micropostList)
		db.Table("microposts").Select("microposts.*, name").Joins("INNER JOIN users on users.id = microposts.user_id").Find(&micropostList)
	} else {
		db.Table("microposts").Select("microposts.*, name").Joins("INNER JOIN users on users.id = microposts.user_id").Where("user_id = ?", user_id).Find(&micropostList)
		//db.Where("user_id = ?", user_id).Find(&micropostList)
	}
	// 共通化した処理を使う
	utils.RespondWithJSON(w, http.StatusOK, micropostList)
}

// ユーザー追加処理
func createMicropost(w http.ResponseWriter, r *http.Request) {
	// リクエストボディ取得
	body, err := ioutil.ReadAll(r.Body)
	defer r.Body.Close()
	if err != nil {
		utils.RespondWithError(w, http.StatusBadRequest, "Invalid request")
		return
	}

	var micropost Micropost
	// 読み込んだJSONを構造体に変換
	if err := json.Unmarshal(body, &micropost); err != nil {
		utils.RespondWithError(w, http.StatusBadRequest, "JSON Unmarshaling failed .")
		return
	}

	// DBにINSERTする
	db.Create(&micropost)

	utils.RespondWithJSON(w, http.StatusOK, micropost)

}

func updateMicropost(w http.ResponseWriter, r *http.Request) {
	// リクエストボディ取得
	body, err := ioutil.ReadAll(r.Body)
	defer r.Body.Close()
	if err != nil {
		utils.RespondWithError(w, http.StatusBadRequest, "Invalid request")
		return
	}

	// 読み込んだJSONを構造体に変換
	var micropost Micropost
	if err := json.Unmarshal(body, &micropost); err != nil {
		utils.RespondWithError(w, http.StatusBadRequest, "JSON Unmarshaling failed .")
		return
	}

	// Update実行
	db.Save(&micropost)
	// gormはSaveメソッドで主キーの部分をUpdateしてくれる。また、存在しないキーだったらINSERTされる

	utils.RespondWithJSON(w, http.StatusOK, micropost)
}

func deleteMicropost(w http.ResponseWriter, r *http.Request) {
	// リクエストボディ取得
	body, err := ioutil.ReadAll(r.Body)
	defer r.Body.Close()
	if err != nil {
		utils.RespondWithError(w, http.StatusBadRequest, "Invalid request")
		return
	}

	// 読み込んだJSONを構造体に変換
	var micropost Micropost
	if err := json.Unmarshal(body, &micropost); err != nil {
		utils.RespondWithError(w, http.StatusBadRequest, "JSON Unmarshaling failed .")
		return
	}

	// IDがセットされていない場合はエラーを返す
	if micropost.ID == 0 {
		utils.RespondWithError(w, http.StatusBadRequest, "ID is not set .")
		return
	}

	// DELETE実行
	db.Delete(&micropost)

	utils.RespondWithJSON(w, http.StatusOK, micropost)
}
