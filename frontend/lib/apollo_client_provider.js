'use client';

import React from 'react';
import { 
  ApolloClient, 
  InMemoryCache, 
  ApolloProvider,
  createHttpLink
} from '@apollo/client';


export default function ApolloClientProvider({children}) {
  const [token, setToken] = React.useState(undefined)

  React.useEffect(() => {
    setToken(localStorage.getItem('jwtToken'))
  }, [])

  const link = createHttpLink({
    uri: 'http://127.0.0.1:3000/graphql',
    headers: {
      authorization: token ? `Bearer ${token}` : "",
    }
  })

  const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
  })

  return (
    <ApolloProvider client={client}>{children}</ApolloProvider>
  );
};
