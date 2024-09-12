import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support";
import { createServerAuthLink } from '@/lib/apollo-auth-link';
import { headers } from 'next/headers';

// Apollo client for queries:
export const { getClient, query } = registerApolloClient(() => {
  const httpLink = new HttpLink({
    uri: 'http://127.0.0.1:3000/graphql',
  });
  
  const authLink = createServerAuthLink(() => headers().get('x-invoke-path') || '');

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
  });
});

// Apollo client for mutations:
const httpLink = new HttpLink({
  uri: 'http://127.0.0.1:3000/graphql',
});

const authLink = createServerAuthLink(() => headers().get('x-invoke-path') || '');

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});
