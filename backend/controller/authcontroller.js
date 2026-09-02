
import { createNewUser } from "../services/authservices.js";

export const register = async (req,res) => {
  try {
    const { name, email, password } = req.body;

    const user = await createNewUser({name, email, password});
    return res.status(201).json({
      success: true,
      message: user,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const login = async (req,res) =>{
  try{
      const { email, password } = req.body;
       
      
  }catch(err){
     return res.status(500).json({
      success: false,
      message: err.message,
    }); 
  }
}