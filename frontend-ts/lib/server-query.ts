import { DocumentNode } from 'graphql';
import { getClient } from './apollo-client';
import { redirect } from 'next/navigation';

export default async function serverQuery<T>(query: DocumentNode, variables?: Record<string, any>) {
  try {
    const { data } = await getClient().query<T>({
      query,
      variables,
    });
    return data;
  } catch (error) {

    if (error.graphQLErrors[0].code === 401) {
      redirect('/login');
    }
    throw error;
  }
}