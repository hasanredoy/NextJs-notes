import { connectDB } from "@/lib/connectDB";

export const POST = async(request)=>{
  const body = await request.json()
  console.log({body});
  const db = await connectDB()
  const bookingsCollection = db.collection('booking')
  try {
    const res = await bookingsCollection.insertOne(body)
    return Response.json({message:'inserted'},{status:200})
  } catch (error) {
    console.log(error);
  }
}