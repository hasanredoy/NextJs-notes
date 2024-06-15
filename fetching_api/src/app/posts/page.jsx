import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
export const metadata = {
  title: "Posts",
  description: " posts page",
};
const getPosts = async()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
   const data = await res.json()
  //  if(data){
  //   redirect(`/posts/${data[0].id}`)
  //  }
   return data
}
const getTime =async()=>{
  const res = await fetch('http://localhost:3000/time',{next:{
    revalidate: 5
  }})
  // const res = await fetch('http://localhost:3000/time',{cache:'no-store'})
  const data= await res.json()
  // console.log('data',data);
  return data.currentTime
}
const PostPage =async () => {
  const posts = await getPosts()

  //  getting login session 
  const sessionm =await getServerSession(authOptions)
  console.log('session from post page',{sessionm});


  // console.log(posts);
  const currentTime = getTime()
  // console.log('currentTime',currentTime);
  return (
    <div className=" p-24">
      <h1> this is post page </h1>
      <h3 className=" text-5xl"> current time ==== {currentTime} </h3>

      <div className=" grid gap-3 grid-cols-4 ">
        {posts.map(post=><div key={post.id} className="max-w-xs border border-yellow-400 p-6 rounded-md shadow-md ">
	<div className="mt-6 mb-2">
		<h2 className="text-xl font-semibold tracking-wide">{post.title}</h2>
	</div>
	<p className="">{post.body}</p>
  <Link href={`/posts/${post.id}`} className=" text-white bg-green-500 font-bold p-2">See Details</Link>
</div>)}
      </div>
    </div>
  );
};

export default PostPage;