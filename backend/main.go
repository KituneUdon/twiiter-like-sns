package main

// go modulesで管理すると絶対パスでのimportが必須です
import (
	"github.com/kenichi-morihara/twitter-like-sns-backend/controllers"
)

func main() {
	controllers.StartWebServer()
}
