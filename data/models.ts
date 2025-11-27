export interface VehicleModel {
  id: string
  name: string
  category: string
  image: string
  pricePerDay: number
  features: string[]
}

export const vehicleModels: VehicleModel[] = [
  {
    id: "bentley-continental",
    name: "Bentley Continental GT",
    category: "Luxe",
    image: "/vehicles/bentley.jpg",
    pricePerDay: 890,
    features: ["V8 4.0L", "Cuir premium", "GPS", "Chauffeur disponible"]
  },
  {
    id: "mercedes-s-class",
    name: "Mercedes Classe S",
    category: "Prestige",
    image: "/vehicles/mercedes-s.jpg",
    pricePerDay: 650,
    features: ["Conduite autonome", "Massage seats", "Soundsystem Burmester", "Champagne bar"]
  },
  {
    id: "bmw-740",
    name: "BMW Série 7",
    category: "Executive",
    image: "/vehicles/bmw-7.jpg",
    pricePerDay: 580,
    features: ["V6 Hybrid", "Cuir Nappa", "Écrans arrière", "Wifi embarqué"]
  },
  {
    id: "porsche-panamera",
    name: "Porsche Panamera",
    category: "Sport",
    image: "/vehicles/porsche.jpg",
    pricePerDay: 720,
    features: ["V8 biturbo", "Sièges sport", "Performance package", "Echappement sport"]
  },
  {
    id: "range-rover",
    name: "Range Rover Autobiography",
    category: "SUV Premium",
    image: "/vehicles/range-rover.jpg",
    pricePerDay: 695,
    features: ["5.0L V8", "7 places", "Toit panoramique", "Système off-road"]
  },
  {
    id: "audi-a8",
    name: "Audi A8 L",
    category: "Luxe",
    image: "/vehicles/audi-a8.jpg",
    pricePerDay: 610,
    features: ["V6 TFSI", "Matrix LED", "Bang & Olufsen", "Autonomous drive"]
  }
]
