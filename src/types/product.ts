export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  originalPrice: number;
  category: string;
  brand: string;
  rating: number;
  reviews: number;
  image: string;
  images: string[];
  description: string;
  features: string[];
  specifications: Record<string, string>;
  inStock: boolean;
  stockCount: number;
}

export interface CartItem extends Product {
  quantity: number;
} 