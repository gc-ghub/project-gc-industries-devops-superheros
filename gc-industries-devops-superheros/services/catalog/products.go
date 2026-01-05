package main

func getProducts(version string) []Product {

	// Base products (v1)
	products := []Product{
		{
			ID:     "1",
			Name:   "Wonder Woman – Does Wonders with Terraform",
			Image:  "/images/WonderWoman_Terraform.jpg",
			Price:  5000000,
			Rating: 4.8,
		},
		{
			ID:     "2",
			Name:   "Doctor Strange – Master of the Mystic Arch Diagrams",
			Image:  "/images/DrStrange_Arch.jpg",
			Price:  4500000,
			Rating: 4.5,
		},
		{
			ID:     "3",
			Name:   "Aqua Man – Docker Containerization Expert",
			Image:  "/images/AquaMan_Docker.jpg",
			Price:  3000000,
			Rating: 4.7,
		},
		{
			ID:     "4",
			Name:   "Thor – Lightning-Fast GitHub Actions Hero",
			Image:  "/images/Thor_GitHub_Actions.jpg",
			Price:  4000000,
			Rating: 4.6,
		},
		{
			ID:     "5",
			Name:   "Logan – Advanced Kubernetes Superhero with Healing Powers",
			Image:  "/images/Logan_K8s.jpg",
			Price:  6000000,
			Rating: 4.9,
		},
		{
			ID:     "6",
			Name:   "Flash – Lightning-Fast Build and Release Hero",
			Image:  "/images/Flash_Build_Release.jpg",
			Price:  2000000,
			Rating: 4.4,
		},
	}

	// Canary behavior (v2)
	if version == "v2" {
		r1 := float32(4.8)
		r2 := float32(4.6)
		r3 := float32(4.9)
		r4 := float32(4.8)
		r5 := float32(4.6)
		r6 := float32(4.9)

		products[0].Rating = r1
		products[1].Rating = r2
		products[2].Rating = r3
		products[3].Rating = r4
		products[4].Rating = r5
		products[5].Rating = r6
	}

	return products
}
