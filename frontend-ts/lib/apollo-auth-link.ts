import { ApolloLink } from '@apollo/client';
import { cookies } from 'next/headers';

const publicPaths = ['/login', '/signup'];

export const createServerAuthLink = (getPathname: () => string) => {
  return new ApolloLink((operation, forward) => {
    const pathname = getPathname();

    if (!publicPaths.includes(pathname)) {
      const cookieStore = cookies();
      const token = cookieStore.get('jwtToken')?.value;

      operation.setContext(({ headers = {} }) => ({
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : '',
        },
      }));
    }

    return forward(operation);
  });
};