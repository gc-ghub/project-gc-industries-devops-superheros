package main

func getProducts(version string) []Product {

	products := []Product{
		{
			ID:    "1",
			Name:  "Wonder Woman – Does Wonders with Terraform",
			Image: "/images/WonderWoman_Terraform.jpg",
			Price: 5000000,
		},
		{
			ID:    "2",
			Name:  "Doctor Strange – Master of the Mystic Arch Diagrams",
			Image: "/images/DrStrange_Arch.jpg",
			Price: 4500000,
		},
		{
			ID:    "3",
			Name:  "Aqua Man – Docker Containerization Expert",
			Image: "/images/AquaMan_Docker.jpg",
			Price: 3000000,
		},
		{
			ID:    "4",
			Name:  "Thor – Lightning-Fast GitHub Actions Hero",
			Image: "/images/Thor_GitHub_Actions.jpg",
			Price: 4000000,
		},
		{
			ID:    "5",
			Name:  "Logan – Advanced Kubernetes Superhero with Healing Powers",
			Image: "/images/Logan_K8s.jpg",
			Price: 6000000,
		},
		{
			ID:    "6",
			Name:  "Flash – Lightning-Fast Build and Release Hero",
			Image: "/images/Flash_Build_Release.jpg",
			Price: 2000000,
		},
	}

	// ⭐ Ratings for v2 and v3
	if version == "v2" || version == "v3" {
		ratings := []float32{4.8, 4.5, 4.7, 4.6, 4.9, 4.4}
		for i := range products {
			products[i].Rating = ratings[i]
		}
	}

	// 🦇 v3 changes (Flash removed, Batman added)
	if version == "v3" {
		products = products[:5] // remove Flash

		batmanRating := float32(4.8)
		products = append(products, Product{
			ID:     "6",
			Name:   "Batman – Dark Knight Cloud Cost Optimizer",
			Image:  "/images/Batman_Cost_Optimizer.jpg",
			Price:  5500000,
			Rating: batmanRating,
		})
	}

	return products
}
