export interface User{
  id: number;
  name: string;
  description: string;
  avatar: string;
}

export interface AuthToken{
  token: string;
}

export interface Store{
  id: number;
  name: string;
  description: string;
  owner: User;
}

export interface Category{
  id: number;
  name: string;
}

export interface Product{
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  store: Store;
  category: Category;
}

export interface Comment{
  id: number;
  user: User;
  product: Product;
  text: string;
}

export interface ProductInCart{
  id: number;
  user: User;
  product: Product;
  amount: number;
}

export interface Order{
  delivered: boolean;
  products: ProductInCart[];
}









