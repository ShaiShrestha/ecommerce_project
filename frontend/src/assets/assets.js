// Importing images and assets for the application
import cart_icon from './cart.png';
import about_icon from './about1.jpg';
import delete_icon from './delete.png';
import menu_icon from './menu.png';
import support_icon from './support.png';
import user_icon from './user.png';
import logo from './logo.jpg';
import search_icon from './search.png';
import return_icon from './return.png';
import front_image1 from './front_image1.jpg';
import exchange_icon from './return-box.png';
import quality_icon from './best-seller.png';
import service_icon from './customer-service.png';
import filter_icon from './right.png';
import dogharness_1 from './dog_harness1.png';
import dogharness_1a from './dog_harness1a.png';
import dogharness_1b from './dog_harness1b.png';
import dogharness_1c from './dog_harness1c.png';
import retract_leash_1 from './retract_leash_1.png';
import retract_leash_1a from './retract_leash_1a.png';
import dog_acc_1 from './dog_acc_1.png';
import dog_acc_1a from './dog_acc_1a.png';
import dog_acc_1b from './dog_acc_1b.png';
import dog_toy_1 from './dog_toy_1.png';
import dog_toy_1a from './dog_toy_1a.png';
import dog_toy_2 from './dog_toy_2.png';
import dog_toy_2a from './dog_toy_2a.png';
import dog_toy_2b from './dog_toy_2b.png';
import cat_acc_1 from './cat_acc_1.png';
import cat_acc_1a from './cat_acc_1a.png';
import cat_acc_1b from './cat_acc_1b.png';
import cat_leash_1 from './cat_leash_1.png';
import cat_leash_1a from './cat_leash_1a.png';
import cat_leash_1b from './cat_leash_1b.png';
import cat_toy_1 from './cat_toy_1.png';
import cat_toy_1a from './cat_toy_1a.png';
import cat_toy_2 from './cat_toy_2.png';
import cat_toy_2a from './cat_toy_2a.png';
import dog_cat_acc_1 from './dog_cat_acc_1.png';
import dog_cat_acc_1a from './dog_cat_acc_1a.png';
import dog_cat_acc_1b from './dog_cat_acc_1b.png';
import paw_icon from './paw.png';
import dull_paw_icon from './footprint.png';
import paypal_icon from './paypal.png';
import atmcard_icon from './atm-card.png';
import contact_us from './contactus.png';

// exporting all the images and assets for use in the application
export const assets = {
    cart_icon,
    about_icon,
    delete_icon,
    menu_icon,
    support_icon,
    user_icon,
    search_icon,
    return_icon,
    front_image1,
    dogharness_1,
    dogharness_1a,
    dogharness_1b,
    dogharness_1c,
    logo,
    quality_icon,
    service_icon,
    exchange_icon,
    filter_icon,
    retract_leash_1,
    retract_leash_1a,
    dog_acc_1,
    dog_acc_1a,
    dog_acc_1b,
    dog_toy_1,
    dog_toy_1a,
    dog_toy_2,
    dog_toy_2a,
    dog_toy_2b,
    cat_acc_1,
    cat_acc_1a,
    cat_acc_1b,
    cat_leash_1,
    cat_leash_1a,
    cat_leash_1b,
    cat_toy_1,
    cat_toy_1a,
    cat_toy_2,
    cat_toy_2a,
    dog_cat_acc_1,
    dog_cat_acc_1a,
    dog_cat_acc_1b,
    paw_icon,
    dull_paw_icon,
    paypal_icon,
    atmcard_icon,
    contact_us

}

// Array of product objects for the store
export const products = [

    {
        _id: "a000",
        name: "Service Dog Training Harness",
        price: 15.99,
        image: [dogharness_1, dogharness_1a, dogharness_1b, dogharness_1c],
        description: "This is a great product for your dog. It is comfortable and durable.",
        category: "Dogs",
        subcategory: "Leashes & Harnesses",
        sizes: ["M", "L", "XL"],
        colors: ["Black", "Camo"],
        date: 1232423546,
        bestseller: false,
    },

    {
        _id: "a001",
        name: "Retractable Dog Leash",
        price: 10.99,
        image: [retract_leash_1, retract_leash_1a],
        description: "This is an amazing retractable dog leash. It is easy to use and very durable.",
        category: "Dogs",
        subcategory: "Leashes & Harnesses",
        sizes: ["M"],
        colors: ["Black", "Blue", "Yellow", "Green"], 
        date: 1232423547,
        bestseller: false,
    },

    {
        _id: "a100",
        name: "Comfy Indoor Dog House",
        price: 299.99,
        image: [dog_acc_1, dog_acc_1a, dog_acc_1b],
        description: "This is a great small home for your dog. It is comfortable and durable.",
        category: "Dogs",
        subcategory: "Accessories",
        sizes: ["S","M", "L", "XL"],
        colors: ["Regular"],
        date: 1232423547,
        bestseller: true,
    },

    {
        _id: "a200",
        name: "Dog Chew Toy For Teeth Cleaning",
        price: 5.99,
        image: [dog_toy_1, dog_toy_1a],
        description: "Functional dog chew toy for teeth cleaning. It is durable, clean, and fun.",
        category: "Dogs",
        subcategory: "Toys",
        sizes: ["S"],
        colors: ["Blue", "Pink", "Red", "Green", "Yellow", "Orange", "Turquoise"],
        date: 1232423547,
        bestseller: false,
    },

    {
        _id: "a201",
        name: "Stuffed Duck Dog Toy",
        price: 10.99,
        image: [dog_toy_2, dog_toy_2a, dog_toy_2b],
        description: "This is a great toy for your dog to play with. It is soft and durable.",
        category: "Dogs",
        subcategory: "Toys",
        sizes: ["S"],
        colors: ["Regular"],
        date: 1232423547,
        bestseller: true,
    },

    {
        _id: "b000",
        name: "All Around Cat Harness",
        price: 12.99,
        image: [cat_leash_1, cat_leash_1a, cat_leash_1b],
        description: "Perfect to take your cat to the around without them running off. It is comfortable and durable.",
        category: "Cats",
        subcategory: "Leashes & Harnesses",
        sizes: ["S","M"],
        colors: ["Regular"],
        date: 1232423547,
        bestseller: false,
    },

    {
        _id: "b100",
        name: "Customizable Cat Sctratch Pad",
        price: 19.99,
        image: [cat_toy_1, cat_toy_1a],
        description: "This is a great scratch pad for your cat so they don't have to scratch your furniture. It is fun and durable.",
        category: "Cats",
        subcategory: "Toys",
        sizes: ["S"],
        colors: ["Black", "Tan"],
        date: 1232423547,
        bestseller: true,
    },

    {
        _id: "b101",
        name: "Cat Tunnel Bed",
        price: 29.99,
        image: [cat_toy_2, cat_toy_2a],
        description: "Fun and cozy cat tunnel bed for your cat to play and sleep in. It is durable and fun.",
        category: "Cats",
        subcategory: "Toys",
        sizes: ["S"],
        colors: ["Regular"],
        date: 1232423547,
        bestseller: false,
    },

    {
        _id: "ab100",
        name: "Portable Stainless Steel Dog and Cat Feeder",
        price: 39.99,
        image: [dog_cat_acc_1, dog_cat_acc_1a, dog_cat_acc_1b],
        description: "This is a great feeder for your dog or cat on the go. It is easy to use and very durable.",
        category: "Others",
        subcategory: "Accessories",
        sizes: ["32oz"],
        colors: ["Black", "Blue", "Pink", "Red", "Gray"],
        date: 1232423547,
        bestseller: true,
    },

    {
        _id: "b200",
        name: "Tree Cat Tower",
        price: 99.99,
        image: [cat_acc_1, cat_acc_1a, cat_acc_1b],
        description: "Great cat tree for your cat to play on. It is fun and durable.",
        category: "Cats",
        subcategory: "Accessories",
        sizes: ["L"],
        colors: ["Regular"],
        date: 1232423547,
        bestseller: true,
    }



]