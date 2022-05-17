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
            id: 1,
        },
        {
            name: "Black Leather Suit",
            category: ["Man", "Jackets"],
            original_price: 250,
            final_price: 200,
            src: "black_leather_suit.jpg",
            genre: "Men",
            id: 2,
        },
        {
            name: "Blue Jacket & Stripe Tee",
            category: ["Man", "Jackets", "Suits"],
            original_price: null,
            final_price: 580,
            src: "blue_jacket_and_white_stripe_tee.jpg",
            genre: "Men",
            id: 3,
        },
        {
            name: "Modern Black Leather",
            category: ["Man", "Jackets"],
            original_price: null,
            final_price: 96,
            src: "modern_black_leather_suit.jpg",
            genre: "Men",
            id: 4,
            rate: 4
        },
        {
            name: "Black Leather Jacket",
            category: ["Woman", "Jackets", "Jeans"],
            original_price: 250,
            final_price: 200,
            src: "black_leather_jacket.jpg",
            genre: "Women",
            id: 5,
        },
        {
            name: "Modern Love Outfit",
            category: ["Woman", "Outfit", "T-Shirt"],
            original_price: 150,
            final_price: 100,
            src: "modern_love_tee.jpg",
            genre: "Women",
            id: 6,
        },
        {
            name: "Spring Dress Outfit",
            category: ["Woman", "Outfit"],
            original_price: 250,
            final_price: 220,
            src: "spring_printed_dress.jpg",
            genre: "Women",
            id: 7,
            rate: 5
        },
        {
            name: "Casual Belt",
            category: ["Accessories", "Belt"],
            original_price: 100,
            final_price: 90,
            src: "casual_leather_belts.jpg",
            genre: "Accessories",
            id: 8,
        },
        {
            name: "Brown Dress Shoes",
            category: ["Accessories", "Shoes"],
            original_price: 600,
            final_price: 570,
            src: "brown_dress_shoes.jpg",
            genre: "Accessories",
            id: 9,
            rate: 5
        },
        {
            name: "Leather Gloves",
            category: ["Accessories"],
            original_price: 200,
            final_price: 170,
            src: "leather_gloves.jpg",
            genre: "Accessories",
            id: 10,
            rate: 5
        }
    ],
    previews: [
        {
            name: 'FEATURED',
            ids: [1, 4, 6]
        },
        {
            name: 'ON SALE',
            ids: [3, 2, 9]
        },
        {
            name: 'TOP RATED',
            ids: [9, 4, 7]
        },
        {
            name: 'LATEST REVIEWS',
            ids: [7, 4, 10]
        }
    ],
    articles: [
        {
            title: 'Lorem ipsum dolor sit amet consectetur.',
            text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Aspernatur fuga nulla voluptatibus totam enim dicta amet
            cupiditate, voluptas at explicabo.`,
            src: 'post_img_10-320x202.jpg',
            date: 'Semptember 9th, 2015',
            comments: 0
        },
        {
            title: 'Lorem ipsum dolor sit amet consectetur.',
            text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Aspernatur fuga nulla voluptatibus totam enim dicta amet
            cupiditate, voluptas at explicabo.`,
            src: 'post_img_11-320x202.jpg',
            date: 'Semptember 24th, 2015',
            comments: 3
        },
        {
            title: 'Lorem ipsum dolor sit amet consectetur.',
            text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Aspernatur fuga nulla voluptatibus totam enim dicta amet
            cupiditate, voluptas at explicabo.`,
            src: 'post_img_12-320x202.jpg',
            date: 'October 13th, 2016',
            comments: 15
        }
    ]
})
// esporta lo state
export default state