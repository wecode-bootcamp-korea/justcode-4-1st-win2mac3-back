const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


// == Cart ==

const createCartItem = async (user_id, color_id, composition_id, product_id, quantity, size_id, price) => {

    return await prisma.$queryRaw`
    INSERT INTO user_carts (user_id, color_id, composition_id, product_id, quantity, size_id, price) 
    VALUES (${user_id}, ${color_id}, ${composition_id}, ${product_id}, ${quantity}, ${size_id}, ${price});
    `
}

const getCart = async (id) => {
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

const deleteCartItem = async (id) => {
    return await prisma.$queryRaw`
    delete from user_carts where id=${id};`
}

const updateCartQuantity = async (id, quantity) => {
    return await prisma.$queryRaw`
    UPDATE user_carts SET quantity = ${quantity} WHERE id=${id};`
}

module.exports = {
    createCartItem,
    getCart,
    deleteCartItem,
    updateCartQuantity
};