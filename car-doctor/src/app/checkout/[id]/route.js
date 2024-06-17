import { connectDB } from "@/lib/connectDB";

export const  POST=async (request,{params})=>{
  const  db = await connectDB()
  // console.log(params);
  const data = await request.json()
  const bookingsCollection = db.collection('bookings')
  try {
    const bookings = await bookingsCollection.insertOne(data)
    return Response.json({
      message:'booked successfully'
    })
  } catch (error) {
    console.log(error);
  }
  }