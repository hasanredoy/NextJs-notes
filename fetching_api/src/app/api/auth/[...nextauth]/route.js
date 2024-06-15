import connectDB from "@/lib/connectDB";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";




export const authOptions = {
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      credentials: {
        // name: {
        //   label: "Name",
        //   type: "text",
        //   placeholder: "Name",
        //   required: true,
        // },
        email: {
          label: "Email",
          type: "email",
          placeholder: "Email",
          required: true,
        },

        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
          required: true,
        },
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        if (!credentials) {
          return null;
        }

        if (email) {
          const db = await connectDB();
          const currentUser = await db.collection("user").findOne({ email });
          // const currentUser= users.find((user)=> user.email === email)
          if (currentUser) {
            if (currentUser.password) {
              return currentUser;
            }
          }
          return null;
        }
      },
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
  callbacks: {
    async jwt({ token, account, user }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        token.type = user.type;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.type = token.type;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

const users = [
  {
    id: 1,
    name: "john_doe",
    email: "john.doe@example.com",
    type: "admin",
    image: "https://picsum.photos/200/300",
    password: "password123",
  },
  {
    id: 2,
    name: "jane_smith",
    email: "jane.smith@example.com",
    type: "admin",
    image: "https://picsum.photos/200/300",
    password: "securepass456",
  },
  {
    id: 3,
    name: "michael_brown",
    type: "admin",
    email: "michael.brown@example.com",
    image: "https://picsum.photos/200/300",
    password: "mypassword789",
  },
  {
    id: 4,
    name: "linda_white",
    email: "linda.white@example.com",
    type: "member",
    password: "password456",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 5,
    name: "robert_jones",
    email: "robert.jones@example.com",
    type: "moderator",
    image: "https://picsum.photos/200/300",
    password: "pass1234word",
  },
];

export { handler as GET, handler as POST };
