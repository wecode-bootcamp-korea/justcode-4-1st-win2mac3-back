const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getonesubBestsell = async (id) => {
    return await prisma.$queryRaw`
    SELECT name, image_url, price_after
    FROM products 
    WHERE one_sub_category_id = ${id}
    ORDER BY sell_amount DESC;
    `
}

const gettwosubBestsell = async (id) => {
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


// ===




const getdetailColors = async () => {
    return await prisma.$queryRaw`
    SELECT id, name, value 
    FROM colors;
    `
}

const getdetailSizes = async () => {
    return await prisma.$queryRaw`
    SELECT id, name, value 
    FROM sizes;
    `
}

const getdetailCompositions = async () => {
    return await prisma.$queryRaw`
    SELECT id, name, value 
    FROM compositions;
    `
}


module.exports = { getonesubBestsell, gettwosubBestsell, getallbestsell, getdetailColors, getdetailSizes, getdetailCompositions };