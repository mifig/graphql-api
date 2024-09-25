"use client";

import {
  ApolloLink,
  HttpLink,
} from "@apollo/client";

import {
  ApolloNextAppProvider,
  ApolloClient,
  InMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support";

function makeClient() {
  const graphqlUrl = process.env.NODE_ENV === "development" ? 'http://127.0.0.1:3000/graphql' : 'https://graphql-test-43ead3251c1a.herokuapp.com/graphql';

  const httpLink = new HttpLink({
      uri: graphqlUrl,
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpLink,
          ])
        : httpLink,
  });
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>
  );
}