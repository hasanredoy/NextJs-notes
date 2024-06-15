/** @type {import('next').NextConfig} */
const nextConfig = {
  // output:"export",
   images: {
    remotePatterns: [
      {
        protocol: 'https',
         hostname: "**",
        port: '',
        pathname: '/**',
      },
      // {
      //   protocol: 'https',
      //   hostname: 'picsum.photos',
      //   port: '',
      //   pathname: '/**',
      // },
      // {
      //   protocol: 'https',
      //   hostname: 'lh3.googleusercontent.com',
      //   port: '',
      //   pathname: '/**',
      // },
      // {
      //   protocol: 'https',
      //   hostname: 'avatars.githubusercontent.com',
      //   port: '',
      //   pathname: '/**',
      // },
    ],
},
redirects:async()=>{
  return[{
     source:'/about',
     destination:'/posts',
     permanent:true
  }]
}
};

export default nextConfig;
