package main

// go modulesで管理すると絶対パスでのimportが必須です
import (
	"github.com/kenichi-morihara/go_tour/controllers"
)

func main() {
	controllers.StartWebServer()
}
