import { connectDB } from "@/lib/connectDB";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import GoogleProvider from "next-auth/providers/google"
import GitHubProvider from "next-auth/providers/github"

const handler= NextAuth({
  // max age and verification method 
  secret:process.env.SECRET_TOKEN,
  session:{
    strategy:"jwt",
    maxAge: 30 *24 *60*60
  },
  // login with email and password 
  providers:[
    CredentialsProvider({
      // adding login method 
      credentials:{
        email:{},
        password:{}
      },
      // validating user 
      async authorize(credentials){
        const {email , password}=credentials
        if(!email || !password){
          return null
        }
        // making db collection 
      const db = await connectDB()
      const currentUser = await db.collection('users').findOne({email})
      // if no currentUser return null 
      if(!currentUser){
        return null
      }
       //matching password by bcrypt 
       const passwordMatched = bcrypt.compareSync(password, currentUser?.password);
      //if password not matched return null 
       if(!passwordMatched){
        return null
       }
       // if everything ok return current user 
         return currentUser
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    })
  ],
  callbacks:{
   async signIn({ user, account}) {
      if(account.provider ==='google'||account.provider==='github'){
       const {name , image , email}=user;
       try  {
        const db = await connectDB()
        const usesCollection = db.collection('users')
        const existingUser = await usesCollection.findOne({email})
        if(!existingUser){
         const res = await usesCollection.insertOne(user)
        //  console.log({"res===>":res});
         return user
        }else{
          return user
        }

       } catch (error) {
        
       }
      }else{
        return user
      }

    },
  },
  // redirecting from api/auth/signIn to /signin
  pages:{
    signIn:'/signin'
  }
})

export {handler as GET , handler as POST}