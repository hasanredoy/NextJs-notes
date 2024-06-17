import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export const middleware=async(request)=>{
const token = cookies(request).get('__Secure-next-auth.session-token')
// getting pathname from request 
const pathname = request.nextUrl.pathname
// checking if pathname is api than return api s 
if(pathname.includes('api')){
  
  return NextResponse.next()
}
// if no token redirecting user to login page 
if(!token){
  return NextResponse.redirect(new URL(`/signin?redirect=${pathname}`,request.url))
} 
//if token then allowing user to go in privet route 
return NextResponse.next()
}

export const config={
  matcher:["/my-booking/:path*",'/services/:path*']
}