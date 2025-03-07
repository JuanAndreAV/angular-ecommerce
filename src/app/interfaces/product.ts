export interface Product {
    // id: number;
    // title: string;
    // description: string;
    // price: number;
    // images: string[];
    // creationAt: string;
    // category: {
    //     id: number;
    //     name: string;
    //     image: string;
    // },
    // cantidad: number
    _id: string;
  name: string;
  description?: string;
  price: number;
  category: string;
  stock: number;
  image: string;
  cantidad: number;
  createdAt?: string;
  updatedAt?: string;
       
       
}
