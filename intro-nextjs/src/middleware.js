import { NextResponse } from "next/server"

// export const middleware =(request)=>{
//   if(request.nextUrl.pathname.startsWith('/about')){
//     return NextResponse.redirect(new URL('/dashboard',request.url))
//   }
// const user = true;
// export const middleware =(request)=>{
//   if(!user){
//     return NextResponse.redirect(new URL('/',request.url))
//   }else{
//     return NextResponse.next()
//   }
// }

// export const config ={
//   matcher:['/dashboard','/about']
// }
const token = 'hello';
export const middleware =(request)=>{
  const cookies = request.cookies.get('token') 
  if(!cookies|| cookies.value!==token){
    return NextResponse.redirect(new URL('/',request.url))
  }else{
    return NextResponse.next()
  }
}

export const config ={
  matcher:['/dashboard','/about']
}