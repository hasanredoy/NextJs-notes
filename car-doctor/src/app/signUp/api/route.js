import { connectDB } from "@/lib/connectDB"
import bcrypt from "bcrypt";

// func for posting user in db 
export const POST = async(request)=>{
  // getting user from body 
  const user = await request.json()
  try {
  //connecting db 
    const db = await connectDB()
    const userCollection = db.collection('users')
    const checkUser = await userCollection.findOne({email:user.email})
    if(checkUser){
      return Response.json({
        message:"user exist"
      },
    {status:304})
    }
    //making the password more secure using bcrypt
    const hashPassword = bcrypt.hashSync(user.password, 14);


    const res = await userCollection.insertOne({...user,password:hashPassword})
    return Response.json({
      message:'user inserted'
    },
  {status:200})
  } catch (error) {
    console.log(error);
    return Response.json({
      message:'failed to insert'
    })
  }
}