import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    getById(id: string, selectObject?: Prisma.UserSelect): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        password: string;
        name: string;
        avatarPath: string;
        phone: string;
        favorites: {
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
        }[];
        orders: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            total: number;
            userId: string;
        }[];
        _count: {
            favorites: number;
            orders: number;
        };
    }>;
    toggleFavorite(userId: string, productId: string): Promise<{
        message: string;
    }>;
}
