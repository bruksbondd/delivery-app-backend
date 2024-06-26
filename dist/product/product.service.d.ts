import { CategoryService } from 'src/category/category.service';
import { PrismaService } from 'src/prisma.service';
import { ProductDto } from './dto/product.dto';
export declare class ProductService {
    private prisma;
    private categoryService;
    constructor(prisma: PrismaService, categoryService: CategoryService);
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
        category: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            slug: string;
            image: string;
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
    search(searchTerm: string): Promise<{
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
        category: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            slug: string;
            image: string;
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
    bySlug(slug: string): Promise<{
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
        category: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            slug: string;
            image: string;
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
    byCategory(categorySlug: string): Promise<{
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
        category: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            slug: string;
            image: string;
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
    create(): Promise<string>;
    update(id: string, dto: ProductDto): Promise<{
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
    delete(id: string): Promise<{
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
