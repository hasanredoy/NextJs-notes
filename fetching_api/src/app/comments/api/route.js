export async function GET(){
  return Response.json({
 comments
  },{
    headers:{
      "Set-Cookie":'me=hello'
    }
  })
}

export async function POST(request){
  const newComment = await request.json()
  console.log('new comment ',newComment);
   comments.push({
    id:comments.length+1,
    text: newComment.text
   })
   return Response.json({
    message:'comment is adding',
    comments
   })
}

const comments = [
  {
    id:1,
    text:" comment 1"
  },
  {
    id:2,
    text:" comment 2"
  },
  {
    id:3,
    text:" comment 3"
  },
]