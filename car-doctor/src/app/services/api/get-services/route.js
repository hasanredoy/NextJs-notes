import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export async function GET(){
  const db = await connectDB()
  const servicesCollection = db.collection('services')
  try {
    const getService = await servicesCollection.find().toArray()
    return NextResponse.json(getService)
  } catch (error) {
    return NextResponse.json({message:'something wrong'})
    
  }
}