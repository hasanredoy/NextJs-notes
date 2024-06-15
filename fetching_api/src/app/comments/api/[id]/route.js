// patch api 

export async function PATCH(request ,{params}){
  console.log(params.id);
  const body = await request.json()
  console.log("body",body);
  const index =comments.findIndex((c)=> c.id === parseInt(params.id))
  comments[index]={
    id:  parseInt(params.id),
    text : body.text
  }
  return Response.json({
    message:"comment updated",
    comments
  })
}

export async function DELETE(request,{params}){
  const id =  parseInt(params.id)
  console.log("id",id);
  const newComment = comments.filter((c)=>c.id !==id)
  return Response.json({
    message:'deleted',
    newComment
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