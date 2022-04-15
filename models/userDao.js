const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getUserByEmail = async (email) => {
	return await prisma.$queryRaw`
		SELECT id, email, password FROM users WHERE users.email = ${email};
	`
}

const createUser = async (username, email, encryptedPW) => {
	return await prisma.$queryRaw`
		INSERT INTO users(username, email, password) VALUES (${username}, ${email}, ${encryptedPW});
    `
}

module.exports = { getUserByEmail, createUser };