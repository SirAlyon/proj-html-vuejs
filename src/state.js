import Vue from 'vue'
// crea un oggetto usando .observable
const state = Vue.observable({
    products: [
        {
          name: "Black Leather Jacket",
          category: ["Man", "Jackets", "Jeans"],
          original_price: 270,
          final_price: 220,
          src: "black_elegant_leather_jacket.jpg",
          genre: "Men",
        },
        {
          name: "Black Leather Suit",
          category: ["Man", "Jackets"],
          original_price: 250,
          final_price: 200,
          src: "black_leather_suit.jpg",
          genre: "Men",
        },
        {
          name: "Blue Jacket & Stripe Tee",
          category: ["Man", "Jackets", "Suits"],
          original_price: null,
          final_price: 580,
          src: "blue_jacket_and_white_stripe_tee.jpg",
          genre: "Men",
        },
        {
          name: "Modern Black Leather",
          category: ["Man", "Jackets"],
          original_price: null,
          final_price: 96,
          src: "modern_black_leather_suit.jpg",
          genre: "Men",
        },
        {
          name: "Black Leather Jacket",
          category: ["Woman", "Jackets", "Jeans"],
          original_price: 250,
          final_price: 200,
          src: "black_leather_jacket.jpg",
          genre: "Women",
        },
        {
          name: "Modern Love Outfit",
          category: ["Woman", "Outfit", "T-Shirt"],
          original_price: 150,
          final_price: 100,
          src: "modern_love_tee.jpg",
          genre: "Women",
        },
        {
          name: "Spring Dress Outfit",
          category: ["Woman", "Outfit"],
          original_price: 250,
          final_price: 220,
          src: "spring_printed_dress.jpg",
          genre: "Women",
        },
        {
          name: "Casual Belt",
          category: ["Accessories", "Belt"],
          original_price: 100,
          final_price: 90,
          src: "casual_leather_belts.jpg",
          genre: "Accessories",
        },
        {
          name: "Brown Dress Shoes",
          category: ["Accessories", "Shoes"],
          original_price: 600,
          final_price: 570,
          src: "brown_dress_shoes.jpg",
          genre: "Accessories",
        },
      ]
})
// esporta lo state
export default state