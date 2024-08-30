export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    category: string;
    createdAt: string;
    updatedAt: string;
    status: string;
}

export interface ProductGroup {
    id: number;
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string; 
    status: boolean;
    category: string;
    products: Product[];
}