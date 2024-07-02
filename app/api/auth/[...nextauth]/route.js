import NextAuth from 'next-auth/next';
import CredentialsProvider from "next-auth/providers/credentials";
const handler = NextAuth({
  session: {
    strategy: 'jwt',
  },

  providers: [
    CredentialsProvider({
    credentials : {
      email: {
        lebel: 'Email',
        type: 'text',
        require: true,
        placeholder: 'Your Email',
      },
      password: {
        lebel: 'Password',
        type: 'password',
        require: true,
        placeholder: 'password',
      },
    },

      async authorize(credentials) {
        if (!credentials) {
          return null;
        }
        return true;
      },
    }),
  ],

  pages: {},
});

export { handler as GET, handler as POST };
