export interface Image {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  }
  
  export interface Product {
    image: Image;
    name: string;
    category: string;
    price: number;
    quantity: number;
    addedToCart: boolean;
    productTotal: number;
    orderTotal: number;
    totalProductsInCart: number;
  }