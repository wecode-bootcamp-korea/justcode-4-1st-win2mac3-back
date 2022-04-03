const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const arrangeNewItems = async () => {
    return await prisma.$queryRaw`
    SELECT
    p.id,
    p.name,
    p.price_before,
    p.price_after,
    p.created_at
    FROM products as p
    `
}

module.exports = {arrangeNewItems};