'use client'

import React from 'react';

export default function FlashNotice({ initialMessage }: { initialMessage: string | undefined }) {
  const [message, setMessage] = React.useState(initialMessage);

  if (!message) return null;

  return (
    <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded absolute right-6 bottom-6" role="alert">
      <span className="block sm:inline">🔔 {message}</span>
    </div>
  );
}

