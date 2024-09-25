'use client'

import React from 'react';
import { logout } from '@/actions/auth';

function Logout() {
  return (
    <button className='bg-yellow-200 self-center py-2 px-3' onClick={() => { logout()}}>Log-out</button>
  )
}

export default Logout;
