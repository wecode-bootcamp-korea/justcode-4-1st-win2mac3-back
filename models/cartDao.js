const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();


// == Cart ==

const postCartwrite = async (user_id, color_id, composition_id, product_id, quantity, size_id, price) => {
    return await prisma.$queryRaw`
    INSERT INTO user_carts (user_id, color_id, composition_id, product_id, quantity, size_id, price) 
    VALUES (${user_id}, ${color_id}, ${composition_id}, ${product_id}, ${quantity}, ${size_id}, ${price});
    `
}

const getCartread = async (id) => {
    console.log(3)
    return await prisma.$queryRaw`
    SELECT u.id, u.price, u.quantity, p.image_url,
    p.name AS product_name,
    c.name AS color_name,
    s.name AS size_name,
    com.name AS composition_name
    FROM user_carts AS u 
    JOIN products p
    ON u.product_id=p.id
    JOIN colors c
    ON u.color_id=c.id
    JOIN sizes s
    ON u.size_id=s.id
    JOIN compositions com
    ON u.composition_id=com.id
    WHERE user_id=${id};
    `
}

const getCartdelete = async (id) => {
    return await prisma.$queryRaw`
    delete from user_carts where id=${id};`
}


module.exports = {
    postCartwrite,
    getCartread,
    getCartdelete
};