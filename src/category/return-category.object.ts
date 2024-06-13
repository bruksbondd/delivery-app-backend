import { Prisma } from './../../node_modules/.prisma/client/index.d';
export const returnCategoryObject: Prisma.CategorySelect = {
    id: true,
    name: true,
    slug: true,
    image: true
}