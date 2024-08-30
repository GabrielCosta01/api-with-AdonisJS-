import type { HttpContext } from '@adonisjs/core/http'
import productGroups from '../db/index.js'
import { ProductGroup } from 'app/types/user.types.js';

let nextProductGroupId:number = 1;

export default class ProductGroupsController {

    private findGroupById(groupId: number):ProductGroup | undefined {
        return productGroups.find(g => g.id === groupId);
    }

    public async store({ request, response }: HttpContext) {
        try {
            const { name, description, status, category } = request.all();

            const missingFields = [];
            if (!name) missingFields.push('name');
            if (!description) missingFields.push('description');
            if (!status) missingFields.push('status');
            if (!category) missingFields.push('category');
        
            if (missingFields.length > 0) {
                return response.status(400).json({
                    message: `Missing required fields: ${missingFields.join(', ')}`
                });
            }

            const existGroup = productGroups.find(g => g.name ===  name);
    
            if(existGroup) return response.status(401).json({ message: "Group exist with this name :p"})
    
            const id = nextProductGroupId++;
            const newGroup:ProductGroup = {
                id,
                name,
                description: description || 'No description provided :(',
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
                status: status || true,
                category: category || 'general',
                products: []
            };

            productGroups.push(newGroup);
            return response.status(201).json(newGroup);
            
        } catch (error) {
            return response.status(500).json({ message: "Error occurred while creating the group.", error });
        }
    }

    public async index({ response }:HttpContext) {
        try {
            if (productGroups.length > 0) {
                return response.status(200).json(productGroups);
            } else {
                return response.status(404).json({ message: "No product groups found in the database. :(" });
            }
        } catch (error) {
            return response.status(500).json({ message: "Error occurred while fetching product groups. :(", error });
        }
    }
    
    public async getGroupById({ params, response }: HttpContext) {
        try {
            const groupId = parseInt(params.groupId, 10);
            if (isNaN(groupId))return response.status(400).json({ message: "Invalid group ID" });
    
            const group = productGroups.filter(g => g.id === groupId);
            if (!group)return response.status(404).json({ message: "Group not found in database! :(" });
    
            return response.status(200).json(group);
        } catch (error) {
            return response.status(500).json({ message: "Error occurred while fetching product group. :(", error });
        }
    }   

    public async deleteGroup({ params, response }: HttpContext) {
        const groupId = parseInt(params.groupId, 10);
    
        if (isNaN(groupId)) {
            return response.status(400).json({ message: "Invalid group ID :(" });
        }
    
        const groupIndex = productGroups.findIndex(g => g.id === groupId);
        if (groupIndex === -1) {
            return response.status(404).json({ message: "Product group not found in database! :(" });
        }
    
        productGroups.splice(groupIndex, 1);
    
        return response.status(200).json({ message: "Product group removed successfully :)" });
    }

    public async updateGroup({ params, request, response }: HttpContext) {
        const groupId = parseInt(params.groupId, 10);
    
        if (isNaN(groupId))return response.status(400).json({ message: "Invalid group ID :(" });
    
        const group = this.findGroupById(groupId);
        if (!group)return response.status(404).json({ message: "Product group not found in database! :(" });
    
        const { name, description, status, category } = request.all();
    
        if (name !== group.name) {
            const existingGroup = productGroups.find(g => g.name === name);
            if (existingGroup) {
                return response.status(409).json({ message: "A group with this name already exists :(" });
            }
        }

        group.name = name || group.name;
        group.description = description || group.description;
        group.status = status || group.description;
        group.category = category || group.category;
        group.updatedAt = new Date().toISOString();
    
        return response.status(200).json({ message: "Product group updated successfully :)", group });
    }
}