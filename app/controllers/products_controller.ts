import { HttpContext } from '@adonisjs/core/http'
import { Product, ProductGroup } from 'app/types/user.types.js';
import productGroups from '../db/index.js'

let nextProductGroupId = 1

export default class ProductController {

    private findGroupById(groupId: number):ProductGroup | undefined {
        return productGroups.find(g => g.id === groupId);
    }

    private findProductById(group:ProductGroup, productId: number): Product | undefined {
        return group.products.find((p: { id: number; }) => p.id === productId);
    }

    public async store({ params, request, response }: HttpContext) {
        try {
            const groupId = parseInt(params.groupId, 10);
    
            if (isNaN(groupId))return response.status(400).json({ message: "Invalid group ID" });
    
            const group = this.findGroupById(groupId);
    
            if (!group)return response.status(404).json({ message: "Product group not found in database!" });
    
            const { name, description, price, stock, category, status } = request.all();
    
            const missingFields = [];
            if (!name) missingFields.push('name');
            if (!description) missingFields.push('description');
            if (!price) missingFields.push('price');
            if (!stock) missingFields.push('stock');
            if (!category) missingFields.push('category');
            if(!status) missingFields.push('status');
        
            if (missingFields.length > 0) {
                return response.status(400).json({
                    message: `Missing required fields: ${missingFields.join(', ')}`
                });
            }
    
            const existingProduct = group.products.find(p => p.name.toLowerCase() === name.toLowerCase());
            if (existingProduct)return response.status(409).json({ message: "A product with this name already exists in the group." });
    
            const id = nextProductGroupId++;
    
            const newProduct: Product = {
                id,
                name,
                description,
                price,
                stock,
                category,
                status,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            };
    
            group.products.push(newProduct);
    
            return response.status(201).json(newProduct);
    
        } catch (error:Error | any) {
            console.error("Error creating product:", error);
            return response.status(500).json({ message: "An error occurred while creating the product. :(", error: error.message });
        }
    }

    public async listAll({ params, response }: HttpContext) {
        const groupId = parseInt(params.groupId, 10);
    
        if (isNaN(groupId))return response.status(400).json({ message: "Invalid group ID" });
    
        const group = this.findGroupById(groupId);
    
        if (!group)return response.status(404).json({ message: "Product group not found in database!" });
    
        return response.status(200).json(group.products);
    }
    

    public async show({ params, response }: HttpContext) {
        const groupId = parseInt(params.groupId, 10);
        const productId = parseInt(params.productId, 10);

        if (isNaN(groupId) || isNaN(productId))return response.status(400).json({ message: "Invalid group or product ID :(" });

        const group = this.findGroupById(groupId);

        if (!group)return response.status(404).json({ message: "Product group not found in database! :(" });

        const product = this.findProductById(group, productId);

        if (!product)return response.status(404).json({ message: "Product not found in database! :(" });

        return response.status(200).json(product);
    }

    public async delete({ params, response }: HttpContext) {
        const groupId = parseInt(params.groupId, 10);
        const productId = parseInt(params.productId, 10);
    
        if (isNaN(groupId) || isNaN(productId))return response.status(400).json({ message: "Invalid group or product ID :(" });
    
        const group = this.findGroupById(groupId);
        if (!group)return response.status(404).json({ message: "Product group not found in database! :(" });
    
        const product = this.findProductById(group, productId);
        if (!product)return response.status(404).json({ message: "Product not found in database! :(" });

        group.products = group.products.filter(p => p.id !== productId);
    
        return response.status(200).json({ message: "Product removed successfully :)" });
    }
    
    public async updateProduct({ params, request, response }: HttpContext) {
        const groupId = parseInt(params.groupId, 10);
        const productId = parseInt(params.productId, 10);
    
        if (isNaN(groupId) || isNaN(productId)) {
            return response.status(400).json({ message: "Invalid group or product ID :(" });
        }
    
        const group = this.findGroupById(groupId);
        if (!group) {
            return response.status(404).json({ message: "Product group not found in database! :(" });
        }
    
        const product = this.findProductById(group, productId);
        if (!product) {
            return response.status(404).json({ message: "Product not found in database! :(" });
        }
    
        const { name, description, price, stock, category } = request.all();
    
        product.name = name || product.name;
        product.description = description || product.description;
        product.price = price ? parseFloat(price) : product.price;
        product.stock = stock ? parseInt(stock) : product.stock;
        product.category = category || product.category;
        product.updatedAt = new Date().toISOString();
    
        return response.status(200).json({ message: "Product updated successfully :)", product });
    }
}

