import chat from "../photos/intl-shopping/chat.png";
import currency from "../photos/intl-shopping/currency.png";
import flights from "../photos/intl-shopping/flights.png";
import language from "../photos/intl-shopping/language.png";
import location from "../photos/intl-shopping/location.png";
import notebook from "../photos/intl-shopping/notebook.png";
import padlock from "../photos/intl-shopping/padlock.png";
import returns from "../photos/intl-shopping/returns.png";

import { Cloudinary } from "@cloudinary/url-gen";

export const cld = new Cloudinary({
  cloud: {
    cloudName: "ochmed",
  },
});
const shoe = cld.image("shopping-categories/shoe");
const storage = cld.image("shopping-categories/storage");
const gifts = cld.image("shopping-categories/gifts");
const giftBox = cld.image("shopping-categories/gift-box");
const pc = cld.image("shopping-categories/pc");
const trainToy = cld.image("shopping-categories/train-toy");
const clothing = cld.image("shopping-categories/clothing");
const fashion = cld.image("shopping-categories/fashion");
const plates = cld.image("shopping-categories/plates");
const planeToy = cld.image("shopping-categories/plane-toy");
const beautyProducts = cld.image("shopping-categories/beauty-products");
const utensils = cld.image("shopping-categories/utensils");
const decor = cld.image("shopping-categories/decor");
const socks = cld.image("shopping-categories/socks");
const appliance = cld.image("shopping-categories/appliance");

export const shoppingCategory = [
  {
    id: 1,
    title: "Recommended deals for you",
    imageUrl: shoe,
    alt: "shoe",
  },
  {
    id: 2,
    title: "Shop storage devices",
    imageUrl: storage,
    alt: "storage device",
  },
  {
    id: 3,
    title: "Small gifts under ₦5000",
    imageUrl: giftBox,
    alt: "gift box",
  },
  {
    id: 4,
    title: "Deals in PC",
    imageUrl: pc,
    alt: "laptop",
  },
  {
    id: 5,
    title: "Toys",
    imageUrl: trainToy,
    alt: "train toy",
  },
  {
    id: 6,
    title: "Shop holiday gift guides",
    imageUrl: gifts,
    alt: "gifts",
  },
  {
    id: 7,
    title: "New from Ochayi",
    imageUrl: clothing,
    alt: "sweat shirt",
  },
  {
    id: 8,
    title: "Deals on most-loved gifts",
    imageUrl: plates,
    alt: "plates",
  },
  {
    id: 9,
    title: "Home decor under ₦20000",
    imageUrl: decor,
    alt: "home decor",
  },
  {
    id: 10,
    title: "Beauty steals under ₦2500",
    imageUrl: beautyProducts,
    alt: "beauty products",
  },
  {
    id: 11,
    title: "Shop premium gifts under ₦900",
    imageUrl: socks,
    alt: "socks and towel",
  },
  {
    id: 12,
    title: "Hosting essentials",
    imageUrl: utensils,
    alt: "kitchen utensils",
  },
  {
    id: 13,
    title: "Score big deals on toys",
    imageUrl: planeToy,
    alt: "plane toy",
  },
  {
    id: 14,
    title: "New from big Och",
    imageUrl: appliance,
    alt: "coffee maker",
  },
  {
    id: 15,
    title: "Holiday deals in fashion",
    imageUrl: fashion,
    alt: "belt, wallet, bag, shoe, hat",
  },
];
const shop = cld.image("Banners/shop");
const beauty = cld.image("Banners/beauty");
const home = cld.image("Banners/home");
const toys = cld.image("Banners/toys");
const kitchen = cld.image("Banners/kitchen");

export const banners = [
  {
    id: 1,
    imageUrl: shop,
    alt: "shopping banner",
  },
  {
    id: 2,
    imageUrl: beauty,
    alt: "beauty products banner",
  },
  {
    id: 3,
    imageUrl: home,
    alt: "home banner",
  },
  {
    id: 4,
    imageUrl: toys,
    alt: "toys and games banner",
  },
  {
    id: 5,
    imageUrl: kitchen,
    alt: "kitchen banner",
  },
];

export const intlShopping = [
  {
    id: 1,
    title: "Local Delivery",
    imageUrl: flights,
    alt: "local delivery",
  },
  {
    id: 2,
    title: "Easy Returns",
    imageUrl: returns,
    alt: "easy returns",
  },
  {
    id: 3,
    title: "Select your language",
    imageUrl: language,
    alt: "select language",
  },
  {
    id: 4,
    title: "Select your currency",
    imageUrl: currency,
    alt: "select currency",
  },
  {
    id: 5,
    title: "Customer Service",
    imageUrl: chat,
    alt: "customer service",
  },
  {
    id: 6,
    title: "Secure Payments",
    imageUrl: padlock,
    alt: "secure payments",
  },
  {
    id: 7,
    title: "Order Tracking",
    imageUrl: location,
    alt: "order tracking",
  },
  {
    id: 8,
    title: "A-to-Z Guarantee",
    imageUrl: notebook,
    alt: "guarantee",
  },
];
