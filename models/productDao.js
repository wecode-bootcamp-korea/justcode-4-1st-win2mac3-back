const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getProductbestsell = async (id) => {
    return await prisma.$queryRaw`
    SELECT name, image_url, price_after
    FROM products 
    WHERE two_sub_category_id = ${id}
    ORDER BY sell_amount DESC;
    `
}

const getallbestsell = async () => {
    return await prisma.$queryRaw`
    SELECT name, image_url, price_after, price_before 
    FROM products 
    ORDER BY sell_amount desc;
    `
}






module.exports = { getProductbestsell, getallbestsell };
