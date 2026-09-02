import jwt from 'jsonwebtoken'
import { findUserById } from '../repositories/authrepository.js';

export const protect = async(req,res,next)=>{
const token = req.cookies.token;

if(!token){
    throw new Error("unauthorized user");
}

const decoded = jwt.verify(token,process.env.JWT_SECRET);
console.log(decoded.userId);

const user = await findUserById(decoded.userId);

if(!user){
    throw new Error("unauthorized user");
}
req.user = user;
next();
 }