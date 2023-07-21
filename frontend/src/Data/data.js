import Momo from "../Asset/ProductImg/Momo.jpg";
import panner from "../Asset/panner.jpg";
import noodles from "../Asset/noodles.jpg";
import pizza from "../Asset/pizza.jpg";

export const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    infinite: true,
    items: 4,
    slidesToSlide: 2,
  
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 3,
   
  },
  tablet: {
    breakpoint: { max: 800, min: 454 },
    items: 2,
  },
 

  mobile: {
    breakpoint: { max: 400, min: 0 },
    items: 1,
  },
};

export const productData = [
  {
    id: 1,
    imageurl:Momo,
    name: "momo",
    price: "130",
    
  },
  {
    id: 2,
    imageurl: panner,
    name: "Shrimp Fried Rice",
    price: "160",
    
  },
  {
    id: 3,
    imageurl:noodles,
    name: "Oster",
    price: "120",
   
  },
  {
    id: 4,
    imageurl:pizza,
    name: "pizza",
    price: "220",
  },
  {
    id: 5,
    imageurl:Momo,
    name: "momo",
    price: "130",
  
  },
  {
    id: 6,
    imageurl:panner,
    name: "Shrimp Fried Rice",
    price: "160",
  
  },
  {
    id: 7,
    imageurl:noodles,
    name: "Oster",
    price: "120",
  
  },
  {
    id: 8,
    imageurl:pizza,
    name: "pizza",
    price: 220,
  
  },
  {
    id: 9,
    imageurl:Momo,
    name: "momo",
    price: "130",  
  },

];




export const menuData = [
  {
    id: "1",
    menuimageurl: Momo,
    menuCategory:"Momo",
    menuname: "Stream Momo",
    menuprice: "170",
    menudescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. lit vero facere mollitia.",
    
  },
  {
    id: "2",
    menuimageurl:"",
    menuCategory:"Top Selling",
    menuname: "Drinks",
    menuprice: "199",
    menudescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. lit vero facere mollitia.",
    
  },
  {
    id: "3",
    menuimageurl:"",
    menuname: "Breakfast",
    menuprice: "199",
    menudescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. lit vero facere mollitia.",
    
  },
  {
    id: "4",
    menuimageurl:"",
    menuname: "Food",
    menuprice: "199",
    menudescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. lit vero facere mollitia.",
  },
  {
    id: "5",
    menuimageurl:"",
    menuname: "Food",
    menuprice: "199",
    menudescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. lit vero facere mollitia.",
  },
  {
    id: "6",
    menuimageurl:"",
    menuname: "Drink",
    menuprice: "199",
    menudescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. lit vero facere mollitia.",
  },
  {
    id: "7",
    menuimageurl:"",
    menuname: "Breakfast",
    menuprice: "199",
    menudescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. lit vero facere mollitia.",
  },

  {
    id: "8",
    menuimageurl:"",
    menuname: "Breakfast",
    menuprice: "199",
    menudescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. lit vero facere mollitia.",
  },


];
