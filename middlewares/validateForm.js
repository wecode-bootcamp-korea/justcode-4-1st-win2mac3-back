const validateForm = async(req,res,next)=>{
  const {email,password} =req.body;

  if(!email || !password){
      res.status(400).json({message:"KEY_ERROR"});
      return;
  }
  next();
} //middlewares

module.exports = { validateForm }