const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getUserByEmail = async (email) => {
	return await prisma.$queryRaw`
		SELECT id FROM users WHERE users.email = ${email};
	`
}	

const getUserByUsername= async (username) => {
	return await prisma.$queryRaw`
		SELECT id FROM users WHERE username = ${username};
	`
}

const getUserPassword = async (password) => {
	return await prisma.$queryRaw`
		SELECT id FROM users WHERE password = ${password};
	`
} 

const getUsernamePassword = async (username) => {
	return await prisma.$queryRaw`
		SELECT password FROM users WHERE username = ${username};
	`
} 
const getUserAll = async (username) => {
	return await prisma.$queryRaw`
		SELECT * FROM users WHERE username = ${username};
	`
} 

const createUser = async (username,email,encryptedPW) => {
	return await prisma.$queryRaw`
		INSERT INTO users(username,email,password) VALUES (${username}, ${email}, ${encryptedPW});
    `
}

module.exports = {getUserByEmail,getUserPassword,getUserByUsername,createUser,getUsernamePassword,getUserAll};
