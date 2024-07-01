import axios from "axios";

export interface Product {
  color: string;
  currency: string;
  gender: string;
  id: number;
  imageURL: string;
  name: string;
  price: number;
  quantity: number;
  type: string;
}

const BASE_URL =
  "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"; // Replace with your API base URL

const ProductService = {
  async getAllProducts(): Promise<Product[]> {
    try {
      const response = await axios.get<Product[]>(`${BASE_URL}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  },
};

export default ProductService;
