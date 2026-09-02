import bcrypt from 'bcryptjs';
import { findOneByEmail,createUser} from "../repositories/authrepository.js"
import jwt from 'jsonwebtoken';

export const createNewUser = async ({name,email,password})=>{
const userExists = await findOneByEmail({email});

if(userExists){
    throw new Error("user alredy exist");
}

const hashedPassword = await bcrypt.hash(password,10);

const user = await createUser({name,email,password:hashedPassword});
return user;

}

export const AlreadyUser = async ({email,password})=>{
 const user = await findOneByEmail({email});
 
 if(!user){
    throw new Error("Invalid email or password"); 
 }

const isPasswordCorrect = await bcrypt.compare(password,user.password);

if(!isPasswordCorrect){
  throw new Error("Invalid email or password");   
}

const token = jwt.sign(
{userId : user._id},
process.env.JWT_SECRET,
{expiresIn:"7d"}
)

return {
    user:{
        name: user.fullname,
         id: user._id,
        email: user.email,
        token:token
    }
}
}
