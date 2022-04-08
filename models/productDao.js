const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();


// == List ==


const getOnesublist = async (id) => {
    return await prisma.$queryRaw`
    SELECT id, name, image_url, price_after
    FROM products 
    WHERE one_sub_category_id = ${id};
    `
}

const getTwosublist = async (id) => {
    return await prisma.$queryRaw`
    SELECT id, name, image_url, price_after
    FROM products 
    WHERE two_sub_category_id = ${id};
    `
}

const getAlllist = async () => {
    return await prisma.$queryRaw`
    SELECT id, name, image_url, price_after 
    FROM products;
    `
}


// == Best ==


const getonesubBestsell = async (id) => {
    return await prisma.$queryRaw`
    SELECT id, name, image_url, price_after
    FROM products 
    WHERE one_sub_category_id = ${id}
    ORDER BY sell_amount DESC;
    `
}

const gettwosubBestsell = async (id) => {
    return await prisma.$queryRaw`
    SELECT id, name, image_url, price_after
    FROM products 
    WHERE two_sub_category_id = ${id}
    ORDER BY sell_amount DESC;
    `
}

const getallbestsell = async () => {
    return await prisma.$queryRaw`
    SELECT id, name, image_url, price_after, price_before 
    FROM products 
    ORDER BY sell_amount desc;
    `
}

// == Detail == 

const getDetail = async (id) => {
    return await prisma.$queryRaw`
    SELECT
    p.id 
    , p.name
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
    getAlllist,
    getOnesublist,
    getTwosublist,
    getonesubBestsell,
    gettwosubBestsell,
    getallbestsell,
    getdetailColors,
    getdetailSizes,
    getdetailCompositions,
    getDetail
};