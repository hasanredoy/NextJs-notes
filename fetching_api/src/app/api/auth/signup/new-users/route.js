import connectDB from "@/lib/connectDB";

export async function POST(request){
  try {
    const db =await connectDB()
    const userCollection = db.collection('user')
    const newUser = await request.json()
    console.log('new user ==',{newUser})
    const res = await userCollection.insertOne(newUser)
    console.log({res});
    return Response.json({message:"data inserted",res})
  } catch (error) {
    return Response.json({message:'something went wrong '})
  }
}