import { connectDB } from "@/lib/connectDB"
import { ObjectId } from "mongodb"

export const  GET=async (request,{params})=>{
const  db = await connectDB()
console.log(params);
const servicesCollection = db.collection('services')
try {
  const filter = {_id : new ObjectId(params.id)}
  const singleService = await servicesCollection.findOne(filter)
  return Response.json(singleService)
} catch (error) {
  console.log(error);
}
}