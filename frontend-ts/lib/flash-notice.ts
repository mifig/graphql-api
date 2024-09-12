import { cookies } from 'next/headers';

export function getFlashNotice() {
  const flashNotice = cookies().get('flash')?.value;
  
  if (flashNotice) {
    cookies().delete('flash');
  }
  return flashNotice;
}

export function setFlashNotice(message: string) {
  cookies().set('flash', message, { 
    maxAge: 5, // Cookie will expire in 5 seconds
    path: '/'
  });
}