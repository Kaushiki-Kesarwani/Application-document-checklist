import bcrypt from 'bcryptjs';
import { findOneByEmail,createUser} from "../repositories/authrepository.js"

export const createNewUser= async ({name,email,password})=>{
const userExists = await findOneByEmail({email});

if(userExists){
    throw new Error("user alredy exist");
}

const hashedPassword = await bcrypt.hash(password,10);

const user = await createUser({name,email,password:hashedPassword});
return user;

}
