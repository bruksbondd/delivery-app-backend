import { PrismaService } from 'src/prisma.service';
import { OrderDto } from './dto/order.dto';
export declare class OrderService {
    private prisma;
    private stripe;
    constructor(prisma: PrismaService);
    getAll(): Promise<({
        items: ({
            product: {
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
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            quantity: number;
            price: number;
            orderId: string;
            productId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        total: number;
        userId: string;
    })[]>;
    getByUserId(userId: string): Promise<({
        items: ({
            product: {
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
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            quantity: number;
            price: number;
            orderId: string;
            productId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        total: number;
        userId: string;
    })[]>;
    placeOrder(dto: OrderDto, userId: string): Promise<{
        clientSecret: string;
    }>;
}
