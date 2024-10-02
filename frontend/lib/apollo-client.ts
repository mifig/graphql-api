import { ApolloClient, HttpLink, InMemoryCache, from } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support";
import { createServerAuthLink } from '@/lib/apollo-auth-link';
import { headers } from 'next/headers';

const graphqlUrl = process.env.NODE_ENV === "development" ? 'http://127.0.0.1:3000/graphql' : process.env.GRAPHQL_URL;

// Apollo client for queries:
export const { getClient, query } = registerApolloClient(() => {
  const httpLink = new HttpLink({
    uri: graphqlUrl,
  });
  
  const authLink = createServerAuthLink(() => headers().get('x-invoke-path') || '');

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: from([authLink, httpLink]),
  });
});

// Apollo client for mutations:
const httpLink = new HttpLink({
  uri: graphqlUrl,
});

const authLink = createServerAuthLink(() => headers().get('x-invoke-path') || '');

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([authLink, httpLink]),
});
