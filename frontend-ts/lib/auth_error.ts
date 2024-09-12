import { redirect } from 'next/navigation';

export function handleAuthError(message: unknown) {
  // if (error instanceof Error) {
    if (message ==='Authentication required.') {
      redirect('/login');
    }
  // }
  throw message;
}