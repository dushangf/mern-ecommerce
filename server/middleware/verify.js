const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
   try {
      const token = req.headers.authorization;
      const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
      req.userData = decoded;
      next();
   } catch (error) {
      return res.status(401).json({
         message: 'Authorization Error',
         status: false,
      });
   }
};

module.exports = verifyToken;
