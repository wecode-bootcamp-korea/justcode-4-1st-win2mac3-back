
const req = require('express/lib/request');
const userService = require('../services/userService') 
require('dotenv').config(); 
const YOUR_SECRET_KET = process.env.SECRET_KEY;
const jwt = require('jsonwebtoken');
const { getUserAll, createUser } = require('../models/userDao');


const valideteForm = async(req,res,next)=>{
    const {username,email,password} =req.body;

    if(!username || !email || !password){
        res.status(400).json({message:"KEY_ERROR"});
        return;
    }

 
    next();

}
const createToken = async (req,res,next)=>{
    try{
        const dbFindUser = await getUserAll(username);

        if(dbFindUser.length){
            const token = jwt.sign({
                userId : dbFindUser[0].id
            },YOUR_SECRET_KET,{
                expiresIn : '1h'
            });
            

            res.cookie('user',token);
            res.status(201).json({
                result: 'ok',
                token
            });
        }else{
            res.status(400).json({error: 'invalid user'});
        }
    }catch(err){
        console.log.error(err);
        next(err);
    }
};

const createNewUer = async(req,res,next)=>{
    try{
        const userSave = await createUser(username,email,password);

        res.status(201).json({
            result: 'ok',
            userSave:userSave
        });
    }catch(err){
        console.error(err);
        next(err);
    }
};

const verifyToken = async(req,res,next) =>{
    try{
        const clientToken = req.cookies.user;
        const decoded = jwt.verify(clientToken,YOUR_SECRET_KET);

        if(decoded){
            res.locals.userId =decoded.user_Id;
            next();
        }else{
            res.status(401).json({error:'unauthorzies'});

        }

    }catch(err){
        res.status(401).json({error:'token expired'});
    }
};

const getAll = async (req,res,next)=>{
    try{
        const all = await dbFindUser.find({
            user_Id: res.locals.userId 
        });
        res.json({alls:all});
    }catch(err){
        next(err);
    }
};




const signUp = async (req, res) => {

    try {
        const  { username,email,password } = req.body;

        await userService.signUp(username,email,password);

        res.status(201).json({message: 'SIGNUP_SUCESS'});

    }   catch (err){
        console.log(err);
        return res.status (err.statusCode || 500).json({message: err.message});

    }
};

const signIn = async(req,res)=> {
    try{
        const {username,email,password} = req.body;
        
        const token = await userService.signIn(username,email,password)
        console.log(token)
        return res.status(200).json({message:'LOGIN_SUCCESS',jwt:token})

    }   catch(err){
        console.log(err)
        return res.status(err.statusCode||500).json({message:err.message})
 }   
};


module.exports = {
    
    valideteForm,
    verifyToken,
    createToken,
    createNewUer,
    getAll,
    signUp,
    signIn

};