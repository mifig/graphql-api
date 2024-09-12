import { DocumentNode } from 'graphql';
import { getClient } from './apollo-client';
import { redirect } from 'next/navigation';

export default async function serverQuery<T>(query: DocumentNode, variables?: Record<string, any>) {
  try {
    const { data } = await getClient().query<T>({
      query, 
      variables
    });
    return data;
  } catch (error: any) {
    error.graphQLErrors.forEach((graphQLError: any) => {
      console.log(graphQLError)
      if (graphQLError.code === 401) {
        redirect(`/login?error=${graphQLError.message}&code=${graphQLError.code}`);
      } 
      // else if(graphQLError.code === 401) {
      //   redirect(`/login?error=${graphQLError.message}&code=${graphQLError.code}`);
      // }
    })

    throw error;
  }
}