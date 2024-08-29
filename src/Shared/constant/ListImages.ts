import { imgListType } from "../../types";

const imgList: imgListType = {
    img1: '/assets/books/book1.png',
    img2: '/assets/books/book2.png',
    img3: '/assets/books/book3.png',
    img4: '/assets/books/book4.png',
    img5: '/assets/books/book5.png',
    img6: '/assets/books/book6.png',
    img7: '/assets/books/book7.png',
  };
  
 export const getRandomImage = () => {
    const imgKeys = Object.keys(imgList) as (keyof imgListType)[];
    const randomKey: keyof imgListType = imgKeys[Math.floor(Math.random() * imgKeys.length)];
    return imgList[randomKey];
  };