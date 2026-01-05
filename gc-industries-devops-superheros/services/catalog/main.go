package main

import (
	"encoding/json"
	"log"
	"net/http"
	"os"
)

type Product struct {
	ID     string  `json:"id"`
	Name   string  `json:"name"`
	Image  string  `json:"image"`
	Price  int     `json:"price"`
	Rating float32 `json:"rating,omitempty"`
}

func catalogHandler(w http.ResponseWriter, r *http.Request) {
	version := os.Getenv("CATALOG_VERSION")

	products := getProducts(version)

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(products)
}

func healthHandler(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusOK)
	w.Write([]byte("OK"))
}

func main() {
	http.HandleFunc("/api/catalog", catalogHandler)
	http.HandleFunc("/health", healthHandler)

	log.Println("Catalog service running on :8081")
	log.Fatal(http.ListenAndServe(":8081", nil))
}
