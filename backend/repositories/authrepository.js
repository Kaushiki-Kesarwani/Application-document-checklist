import { User } from "../model/authmodel.js"

export const findOneByEmail = async({email})=>{
    const user = await User.findOne({email});
    return user;
}

export const createUser = async({name,email,password})=>{
    const user = await User.create({
        name,
        email,
        password,
    });
    return user;
}