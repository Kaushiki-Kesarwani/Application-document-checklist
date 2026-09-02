
import { createNewUser ,AlreadyUser} from "../services/authservices.js";

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
       
     const {user,token} = AlreadyUser({email,password});

     res.cookie("token",token,{
      httpOnly:true,
      secure:process.env.NODE_ENV === "development",
      maxAge:7*24*60*60*1000,
     });

     return res.status(200).json({
      success:true,
      message:"Login successful",
      data:user,
     });
      
  }catch(err){
     return res.status(500).json({
      success: false,
      message: err.message,
    }); 
  }
}