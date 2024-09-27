import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { cookies } from 'next/headers';
import Logout from '@/components/Logout'

function Navbar() {
  return (
    <div className='flex p-2 bg-blue-700 text-white-200 fixed w-full justify-between'>
      <Link href="/blogs"><Image src="/images/logo.webp" width={50} height={50} alt="Logo" /></Link>
      {cookies().get("jwtToken")?.value ? 
        <Logout></Logout>
        :
        <div className='flex gap-3'>
          <Link href="/signin" className='text-yellow-200 self-center py-2 px-3'>Sign-in</Link>
          <Link href="/login" className='bg-yellow-200 self-center py-2 px-3'>Log-in</Link>
        </div>
      }
    </div>
  )
}

export default Navbar;
