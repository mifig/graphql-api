import { ApolloClient, HttpLink, InMemoryCache, from } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support";
import { createServerAuthLink } from '@/lib/apollo-auth-link';
import { headers } from 'next/headers';
import { onError } from "@apollo/client/link/error";
import { handleAuthError } from './auth_error';
import { redirect } from "next/navigation";

// Apollo client for queries:
export const { getClient, query } = registerApolloClient(() => {
  const httpLink = new HttpLink({
    uri: 'http://127.0.0.1:3000/graphql',
  });

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach((error) => {
        console.log(`REDIRECTING >>>> [code: ${error.code}, status: ${error.status}, message: ${error.message}`)
      })
    }
  });
  
  const authLink = createServerAuthLink(() => headers().get('x-invoke-path') || '');

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: from([errorLink, authLink, httpLink]),
  });
});

// Apollo client for mutations:
const httpLink = new HttpLink({
  uri: 'http://127.0.0.1:3000/graphql',
});

const authLink = createServerAuthLink(() => headers().get('x-invoke-path') || '');

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([authLink, httpLink]),
});
