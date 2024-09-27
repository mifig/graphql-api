import { DocumentNode } from 'graphql';
import { getClient } from './apollo-client';

export default async function serverQuery<T>(query: DocumentNode, variables?: Record<string, any>) {
  try {
    const { data } = await getClient().query<T>({
      query, 
      variables
    });
    return data;
  } catch (error: any) {
    if (error.graphQLErrors) {
      const firstError = { error: error.graphQLErrors[0].message, code: error.graphQLErrors[0].code }
      throw new Error(JSON.stringify(firstError))
   }
  }
}