import { connectDB } from "@/lib/connectDB";

export async function GET(){
  const db = await connectDB()
  const servicesCollection = db.collection('services')
  const getService = await servicesCollection.find().toArray()
  return Response.json(getService)
}