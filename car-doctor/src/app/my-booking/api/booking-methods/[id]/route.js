import { connectDB } from "@/lib/connectDB"
import { ObjectId } from "mongodb"

export const DELETE=async(request,{params})=>{
  const db = await connectDB()
  console.log({params});
  const bookingsCollection = db.collection('booking')
  try {
    const getBooking = await bookingsCollection.deleteOne({_id: new ObjectId(params.id)})
  return Response.json({getBooking})
  } catch (error) {
    console.log(error);
  }
}
export const GET=async(request,{params})=>{
  const db = await connectDB()
  console.log({params});
  const bookingsCollection = db.collection('booking')
  try {
    const getBooking = await bookingsCollection.findOne({_id: new ObjectId(params.id)})
  return Response.json({getBooking})
  } catch (error) {
    console.log(error);
  }
}
export const PATCH=async(request,{params})=>{
  const db = await connectDB()
  console.log({params});
  const data = await request.json()
  const bookingsCollection = db.collection('booking')
  try {
    const getBooking = await bookingsCollection.updateOne(
      {_id: new ObjectId(params.id)},
      {
        $set:{
          date:data.date
        }
      },
      {upsert:true}
      
    )
  return Response.json({getBooking})
  } catch (error) {
    console.log(error);
  }
}