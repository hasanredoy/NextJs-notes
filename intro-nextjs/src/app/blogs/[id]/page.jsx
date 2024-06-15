
const page = ({params}) => {
  // console.log(params.id);
  const blogs= [
    {
        "id": 1,
        "title": "The Future of AI",
        "author": "Jane Doe",
        "content": "Artificial Intelligence is transforming industries and creating new opportunities. This blog explores the potential future developments in AI."
    },
    {
        "id": 2,
        "title": "Healthy Eating Tips",
        "author": "John Smith",
        "content": "Discover practical tips for maintaining a healthy diet, including recipes, nutrition advice, and lifestyle changes."
    },
    {
        "id": 3,
        "title": "Traveling on a Budget",
        "author": "Emily Johnson",
        "content": "Learn how to explore the world without breaking the bank. This blog provides budget-friendly travel tips and destination recommendations."
    },
    {
        "id": 4,
        "title": "Tech Trends in 2024",
        "author": "Michael Brown",
        "content": "Stay updated with the latest technological advancements and trends that are shaping the year 2024."
    },
    {
        "id": 5,
        "title": "Mindfulness and Meditation",
        "author": "Sarah Davis",
        "content": "Explore the benefits of mindfulness and meditation, and how to incorporate these practices into your daily routine for better mental health."
    }
]
// console.log(blogs);
const blog= blogs.find((blog)=> blog.id === parseInt(params.id))
// console.log(blog);
  return (
    <div>
      <h1>{blog?.title}</h1>
      <p>{blog?.content}</p>
    </div>
  );
};

export default page;