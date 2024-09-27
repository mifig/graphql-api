"use client";

import React from "react";
import { Flash } from "@/types/types";
import toast from 'react-hot-toast';

export default function FlashNotice({ 
  flashNotice, 
  deleteFlashNotice 
}: {
  flashNotice: Flash, 
  deleteFlashNotice: () => Promise<void> 
}) {
  React.useEffect(() => {
    if (flashNotice?.variant === "error") {
      toast.error(flashNotice.message);
    } else if (flashNotice?.variant === "notice") {
      toast.success(flashNotice.message);
    } else if (flashNotice?.variant === "alert") {
      toast.error(flashNotice.message)
    }
    deleteFlashNotice();
  }, [flashNotice]);

  return null;
}
