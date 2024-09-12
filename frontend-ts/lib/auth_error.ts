import { redirect } from 'next/navigation';

export function handleAuthError(error: unknown) {
  if (error instanceof Error) {
    if (error.message === 'JWT_MISSING' || error.message.includes('Invalid token')) {
      redirect('/login');
    }
  }
  throw error;
}