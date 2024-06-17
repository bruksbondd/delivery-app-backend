import { ProductDto } from './dto/product.dto';
import { ProductService } from './product.service';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    getAll(searchTerm?: string): Promise<{
        user: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            password: string;
            name: string;
            avatarPath: string;
            phone: string;
        };
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        _count: {
            category: number;
            user: number;
            orderItems: number;
        };
        slug: string;
        description: string;
        price: number;
        image: string;
        categoryId: string;
        userId: string;
        category: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            slug: string;
            image: string;
        };
        orderItems: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            quantity: number;
            price: number;
            orderId: string;
            productId: string;
        }[];
    }[]>;
    getProductBySlug(slug: string): Promise<{
        user: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            password: string;
            name: string;
            avatarPath: string;
            phone: string;
        };
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        _count: {
            category: number;
            user: number;
            orderItems: number;
        };
        slug: string;
        description: string;
        price: number;
        image: string;
        categoryId: string;
        userId: string;
        category: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            slug: string;
            image: string;
        };
        orderItems: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            quantity: number;
            price: number;
            orderId: string;
            productId: string;
        }[];
    }>;
    getProductsByCategory(categorySlug: string): Promise<{
        user: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            password: string;
            name: string;
            avatarPath: string;
            phone: string;
        };
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        _count: {
            category: number;
            user: number;
            orderItems: number;
        };
        slug: string;
        description: string;
        price: number;
        image: string;
        categoryId: string;
        userId: string;
        category: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            slug: string;
            image: string;
        };
        orderItems: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            quantity: number;
            price: number;
            orderId: string;
            productId: string;
        }[];
    }[]>;
    createProduct(): Promise<string>;
    updateProduct(id: string, dto: ProductDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        description: string;
        price: number;
        image: string;
        categoryId: string;
        userId: string;
    }>;
    deleteProduct(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        description: string;
        price: number;
        image: string;
        categoryId: string;
        userId: string;
    }>;
}
