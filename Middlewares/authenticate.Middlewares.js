import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";
export var authenticateToken = (req,res,next) => {
    const {token} = req.query;
    console.log(token);
    if (token == null) return res.sendStatus(401);
    
    jwt.verify(token,process.env.privateKey, (err,user)=>{
        if(err) {return res.sendStatus(403)}
        req.user = user;
        next();
    })

}