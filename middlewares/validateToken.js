const YOUR_SECRET_KET = process.env.SECRET_KEY;
const jwt = require('jsonwebtoken');

const validateToken = async (req,res,next) => {
  try {
      const clientToken = req.headers.authorization;
      const decoded = jwt.verify(clientToken, YOUR_SECRET_KET);
      if(decoded.userId) {
          res.json('USER_CORRECT');
      }
  } catch(err) {
      res.status(401).json({error:'token expired'});
  }
  next();
}; //middlewares

module.exports = { validateToken }