// generate meta data

export const generateMetadata=async ({params})=>{
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?id=${params.id}`)
  const data =await res.json()
  console.log(data);
  return{
    title:`${data[0].title} `,
    description: data[0].body,
    keywords: data[0]?.body?.split(' ')
  }
}


const getSinglePost =async(id)=>{
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?id=${id}`)
  const data =await res.json()
return data
}



const SinglePostPage =async ({params}) => {
console.log(params.is);
  const post =await getSinglePost(params.id)
  console.log(post);
  return (
    <div>
      <div  className=" border border-yellow-400 p-6 rounded-md shadow-md ">
	<div className="mt-6 mb-2">
		<h2 className="text-xl font-semibold tracking-wide">{post[0].title}</h2>
	</div>
	<p className="">{post[0].body}</p>
</div>
    </div>
  );
};
export async function generateStaticParams() {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json())
 
  return posts.map((post) => ({
    id: post.id.toString(),
  }))
}

export default SinglePostPage;