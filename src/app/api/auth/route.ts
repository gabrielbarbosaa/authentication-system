import { connectMongoDB } from "@/lib/mongo";
import User from "@/models/user";
import NextAuth, {NextAuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

async function findUserByEmail(email: string) {
  await connectMongoDB();
  const user = await User.findOne({
    email: email,
  });
  return user;
}

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: {  label: "password", type: "password" }
      },
      async authorize(credentials, req) {
        if(credentials){
          const user = findUserByEmail(credentials.email!);
    
          if (user) {
            return Promise.resolve(user);
          } else {
            return Promise.resolve(null);
          }
        }
      }
    })
  ],
  callbacks: {
    async jwt(params) {
      const { token, user } = params;
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({user, session, token}) {
      if (session.user) {
        session.user.email = token.email;
      }
      return session;
    }
  }
}

export default NextAuth(authOptions);

