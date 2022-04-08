
const { genSaltSync } = require('bcrypt');
const bcrypt = require('bcrypt');
const { response } = require('express');
const jwt = require('jsonwebtoken');

const userDao = require("../models/userDao");

const signUp = async (username,email,password) => {
		
	const sameusername = await userDao.getUserByUsername(username)
	const sameemail = await userDao.getUserByEmail(email)

	if(sameemail.length !==0){
		const error = new Error('EXISTING_EMAIL')
		error.statusCode = 409
		throw error
	}
	//email,username,등록된 사람들 중에 중복이 있는지?
	

	const encryptedPW = bcrypt.hashSync(password, bcrypt.genSaltSync())
	const newUser = await userDao.createUser(username,email,encryptedPW)
	return newUser
}


const signIn = async(email, password) => {
	console.log(2)

	const notEmail = await userDao.getUserByEmail(email)

	if (notEmail.length === 0) {
		const error = new Error('INVALID_USER')
		error.statusCode = 400
		throw error
	}
	
	
	const userInfo= await userDao.getUserAll(email)

	const isCorrect = bcrypt.compareSync(password, userInfo[0].password)

	if (!isCorrect) {
		const error = new Error('INVALID_USER')
		error.statusCode = 400
		throw error
	}

	return jwt.sign({userId: userInfo[0].id}, process.env.SECRET_KEY)
}
module.exports={signIn,signUp}
