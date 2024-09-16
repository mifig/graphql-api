"use client"

import React from 'react';
import { useFormStatus } from 'react-dom';

function FormSubmit() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className="rounded-none bg-blue-700 text-yellow-200 py-3 hover:bg-blue-900 hover:text-yellow-500" disabled={pending}>
      { pending ? "Logging in..." : "Log in"}
    </button>
  );
}

export default FormSubmit;
