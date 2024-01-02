import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { loginUser, registerUser } from '../../../utils/auth';

export default NextAuth({
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        try {
          // Login
          if (credentials.action === 'login') {
            const { user, token } = await loginUser(credentials.email, credentials.password);
            if (user && token) {
              return Promise.resolve({ ...user, token });
            } else {
              return Promise.resolve(null);
            }
          }
          
          if (credentials.action === 'register') {
            const { user, token } = await registerUser(credentials.email, credentials.password);
            if (user && token) {
              return Promise.resolve({ ...user, token });
            } else {
              return Promise.resolve(null);
            }
          }
        } catch (error) {
          return Promise.resolve(null);
        }
      },
    }),
  ],
});
