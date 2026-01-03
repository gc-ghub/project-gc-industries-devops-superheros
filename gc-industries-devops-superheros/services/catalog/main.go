package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()

	app.Get("/health", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{
			"service": "catalog",
			"status":  "ok",
		})
	})

	app.Get("/ping", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{
			"message": "catalog service is alive - CANARY",
			"version": "v2",
			"color":   "blue",
		})
	})

	log.Println("Catalog running on 8081")
	log.Fatal(app.Listen(":8081"))
}
