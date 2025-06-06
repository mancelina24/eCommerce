import hero from "../assets/home/hero.png";
import hero1 from "../assets/home/hero1.png";
import hero2 from "../assets/home/hero2.png";
import hero3 from "../assets/home/hero3.png";

import categoryB1 from "../assets/home/categoryB1.png";
import categoryB2 from "../assets/home/categoryB2.png";
import categoryK1 from "../assets/home/categoryK1.png";
import categoryK2 from "../assets/home/categoryK2.png";

import productCategory1 from "../assets/home/productCategory1.png";
import productCategory2 from "../assets/home/productCategory2.png";
import productCategory3 from "../assets/home/productCategory3.png";
import productCategory4 from "../assets/home/productCategory4.png";
import productCategory5 from "../assets/home/productCategory5.png";
import productCategory6 from "../assets/home/productCategory6.png";
import productCategory7 from "../assets/home/productCategory7.png";
import productCategory8 from "../assets/home/productCategory8.png";

import slider0 from "../assets/home/slider0.png";
import slider1 from "../assets/home/slider1.png";
import C2A1 from "../assets/home/C2A1.png";
import Fpost1 from "../assets/home/Fpost1.png";
import Fpost2 from "../assets/home/Fpost2.png";
import Fpost3 from "../assets/home/Fpost3.png";

export const shop = {
  Woman: [
    {
      id: 1,
      name: "Bags",
      to: "/shop/woman/bags/:id",
    },
    {
      id: 2,
      name: "Belts",
      to: "/shop/woman/belts/:id",
    },
    {
      id: 3,
      name: "Cosmetics",
      to: "/shop/woman/cosmetics/:id",
    },
    {
      id: 4,
      name: "Hats",
      to: "/shop/woman/hats/:id",
    },
    {
      id: 5,
      name: "Shoe",
      to: "/shop/woman/shoes/:id",
    },
  ],

  Man: [
    {
      id: 1,
      name: "Bags",
      to: "/shop/man/bags/:id",
    },
    {
      id: 2,
      name: "Belts",
      to: "/shop/man/belts/:id",
    },
    {
      id: 3,
      name: "Cosmetics",
      to: "/shop/man/cosmetics/:id",
    },
    {
      id: 4,
      name: "Hats",
      to: "shop/man/hats/:id",
    },
    {
      id: 5,
      name: "Shoes",
      to: "shop/man/shoes/:id",
    },
  ],
};
export const carousel = [
  {
    id: 1,
    img: hero,
    h5: "SUMMER 2025",
    h1: "WOMAN NEW COLLECTION",
    h4: "We know how large objects will act, but things on a small scale.",
  },
  {
    id: 2,
    img: hero1,
    h5: "SUMMER 2025",
    h1: "CHILD NEW COLLECTION",
    h4: "We know how large objects will act, but things on a small scale.",
  },
  {
    id: 3,
    img: hero2,
    h5: "SUMMER 2025",
    h1: "MAN NEW COLLECTION",
    h4: "We know how large objects will act, but things on a small scale.",
  },
  {
    id: 4,
    img: hero3,
    h5: "SUMMER 2025",
    h1: "GIRL NEW COLLECTION",
    h4: "We know how large objects will act, but things on a small scale.",
  },
];

export const homeCategoryPick = [
  categoryB1,
  categoryB2,
  categoryK1,
  categoryK2,
];

export const productCategory = [
  {
    image: productCategory1,
    title: "Graphic Design",
    department: "English Department",
    price: 6.48,
    originalPrice: 16.48,
  },
  {
    image: productCategory2,
    title: "Graphic Design",
    department: "English Department",
    price: 6.48,
    originalPrice: 16.48,
  },
  {
    image: productCategory3,
    title: "Graphic Design",
    department: "English Department",
    price: 6.48,
    originalPrice: 16.48,
  },
  {
    image: productCategory4,
    title: "Graphic Design",
    department: "English Department",
    price: 6.48,
    originalPrice: 16.48,
  },
  {
    image: productCategory5,
    title: "Graphic Design",
    department: "English Department",
    price: 6.48,
    originalPrice: 16.48,
  },
  {
    image: productCategory6,
    title: "Graphic Design",
    department: "English Department",
    price: 6.48,
    originalPrice: 16.48,
  },
  {
    image: productCategory7,
    title: "Graphic Design",
    department: "English Department",
    price: 6.48,
    originalPrice: 16.48,
  },
  {
    image: productCategory8,
    title: "Graphic Design",
    department: "English Department",
    price: 6.48,
    originalPrice: 16.48,
  },
];

export const slider = [
  {
    id: 0,
    img: slider0,
    h4: "SUMMER 2025",
    h1: "Vita Classic Product",
    p: "We know how large objects will act, We know how are objects will act, We know",
    h3: "$16.48",
  },
  {
    id: 1,
    img: slider1,
    h4: "SUMMER 2025",
    h1: "Vita Classic Product",
    p: "We know how large objects will act, We know how are objects will act, We know",
    h3: "$16.48",
  },
];

export const c2a = [C2A1];
export const featuredPosts = [Fpost1, Fpost2, Fpost3];
