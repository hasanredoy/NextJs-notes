import { connectDB } from "@/lib/connectDB"

export async function GET(request,{params}){
  const db = await connectDB()
  
  const bookingsCollection = db.collection('booking')
  const getBooking = await bookingsCollection.find({email:params.email}).toArray()
  return Response.json(getBooking)
}