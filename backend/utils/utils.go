package utils

import (
	"encoding/json"
	"log"
	"net/http"
	"strconv"

	"github.com/gorilla/mux"
	"github.com/jinzhu/gorm"
	"github.com/kenichi-morihara/go_tour/config"
)

// RespondWithError エラー情報をJSONで返す
func RespondWithError(w http.ResponseWriter, code int, msg string) {
	RespondWithJSON(w, code, map[string]string{"error": msg})
}

// RespondWithJSON JSONを返す部分を共通化
func RespondWithJSON(w http.ResponseWriter, code int, payload interface{}) {
	response, _ := json.Marshal(payload)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(code)
	w.Write(response)
}

// GetConnection DBとのコネクションを張る
func GetConnection() *gorm.DB {
	DBMS := config.Config.DbDriverName
	USER := config.Config.DbUserName
	PASS := config.Config.DbUserPassword
	DB_HOST := config.Config.DbHost
	DB_PORT := config.Config.DbPort
	DBNAME := config.Config.DbName
	CONNECT := USER + ":" + PASS + "@" + "tcp(" + DB_HOST + ":" + DB_PORT + ")/" + DBNAME
	db, err := gorm.Open(DBMS, CONNECT)
	// 接続に失敗したらエラーログを出して終了する
	if err != nil {
		log.Fatalf("DB connection failed %v", err)
	}
	db.LogMode(true)

	return db
}

// GetID リクエストからIDを取得する
func GetID(r *http.Request) (id int, err error) {
	vars := mux.Vars(r)
	return strconv.Atoi(vars["id"])
}
