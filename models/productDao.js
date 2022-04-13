const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


// == List ==


const getSubList = async (oneid, twoid) => {
    return await prisma.$queryRaw`
    SELECT id, name, image_url, price_after
    FROM products 
    WHERE one_sub_category_id = ${oneid} or two_sub_category_id = ${twoid};
    `
}


const getAllList = async () => {
    return await prisma.$queryRaw`
    SELECT id, name, image_url, price_after, price_before
    FROM products;
    `
}


// == Best ==


const getSubBest = async (oneid, twoid) => {
    return await prisma.$queryRaw`
    SELECT id, name, image_url, price_after
    FROM products 
    WHERE one_sub_category_id = ${oneid} or two_sub_category_id = ${twoid}
    ORDER BY sell_amount DESC;
    `
}

const getAllBestList = async () => {
    return await prisma.$queryRaw`
    SELECT id, name, image_url, price_after, price_before 
    FROM products 
    ORDER BY sell_amount desc;
    `
}

const getAllNewList = async () => {
    return await prisma.$queryRaw`
    SELECT
    p.id,
    p.name,
    p.image_url,
    p.price_before,
    p.price_after,
    p.created_at
    FROM products as p
    ORDER BY created_at desc;
    `
}

// == Detail == 

const getDetail = async (id) => {
    return await prisma.$queryRaw`
    SELECT
    p.id 
    , p.name
    , p.description
    , p.image_url
    , p.price_after
    , p.price_before
    , o.name as one_sub_category
    , t.name as two_sub_category
FROM 
    products AS p 
Inner JOIN  
    one_sub_categories o 
ON 
    p.one_sub_category_id=o.id
inner JOIN  
    two_sub_categories t
ON
    p.two_sub_category_id=t.id
WHERE p.id =${id};
    `
}

const getdetailColors = async () => {
    console.log(1)
    return await prisma.$queryRaw`
    SELECT id, name, value 
    FROM colors;
    `
}

const getdetailSizes = async () => {
    return await prisma.$queryRaw`
    SELECT id, name, value, price_add
    FROM sizes;
    `
}

const getdetailCompositions = async () => {
    return await prisma.$queryRaw`
    SELECT id, name, value, price_add
    FROM compositions;
    `
}

module.exports = {
    getAllList,
    getSubList,
    getSubBest,
    getAllBestList,
    getAllNewList,
    getdetailColors,
    getdetailSizes,
    getdetailCompositions,
    getDetail
};